// Who may open which walk.
//
// The pilot is free. Everything else needs an active subscription, and the
// subscription is sold through Google Play: in the Android build the page
// asks the Play Store directly via the Digital Goods API, so there is no
// server, no account and no payment code of our own to keep safe.
//
// On the plain web there is no Play Store to ask. Until web checkout exists,
// the paid walks show as locked with an explanation rather than pretending
// to be purchasable.

export type Entitlement =
  | { state: "loading" }
  /** Play says this device holds the subscription. */
  | { state: "subscribed" }
  /** Play is reachable and says there is no subscription. */
  | { state: "unsubscribed" }
  /** Opened in a browser rather than the Android app. */
  | { state: "unavailable" };

/** The Play Console product id. Price and currency live in Play, not here. */
export const subscriptionProductId = "balkan_echo_monthly";

/**
 * The Worker that acknowledges purchases with Google (see
 * ../../balkan-echo-worker). Play auto-refunds a subscription that is not
 * acknowledged within three days, and only a server can acknowledge, so
 * without this endpoint we must not sell at all — see startSubscription.
 */
const acknowledgeEndpoint = process.env.NEXT_PUBLIC_ACK_ENDPOINT;

type AcknowledgeResult = { active: boolean; acknowledged: boolean };

async function acknowledgeWithServer(
  purchaseToken: string,
): Promise<AcknowledgeResult | null> {
  if (!acknowledgeEndpoint) return null;

  try {
    const response = await fetch(`${acknowledgeEndpoint}/acknowledge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ purchaseToken }),
    });
    if (!response.ok) return null;
    return (await response.json()) as AcknowledgeResult;
  } catch {
    return null;
  }
}

/**
 * The Digital Goods API is only present inside the Android app (a Trusted
 * Web Activity). Its absence is the signal that we are on the open web.
 */
type ItemDetails = {
  itemId: string;
  title?: string;
  price?: { currency: string; value: string };
};

type Purchase = {
  itemId: string;
  purchaseToken?: string;
};

type DigitalGoodsService = {
  getDetails(itemIds: string[]): Promise<ItemDetails[]>;
  listPurchases(): Promise<Purchase[]>;
};

type WindowWithDigitalGoods = Window & {
  getDigitalGoodsService?: (serviceProvider: string) => Promise<DigitalGoodsService>;
};

const PLAY_BILLING = "https://play.google.com/billing";

/**
 * Set `?entitlement=subscribed` to work on the paid walks in a browser.
 * Development only — a production build ignores it, so a shared link can
 * never hand out a subscription.
 */
function developmentOverride(): Entitlement | null {
  if (process.env.NODE_ENV === "production") return null;
  if (typeof window === "undefined") return null;

  const value = new URLSearchParams(window.location.search).get("entitlement");
  if (value === "subscribed") return { state: "subscribed" };
  if (value === "unsubscribed") return { state: "unsubscribed" };
  return null;
}

export async function readEntitlement(): Promise<Entitlement> {
  const override = developmentOverride();
  if (override) return override;

  if (typeof window === "undefined") return { state: "loading" };

  const getService = (window as WindowWithDigitalGoods).getDigitalGoodsService;
  if (!getService) return { state: "unavailable" };

  try {
    const service = await getService(PLAY_BILLING);
    const purchases = await service.listPurchases();
    const mine = purchases.find(
      (purchase) => purchase.itemId === subscriptionProductId,
    );
    if (!mine) return { state: "unsubscribed" };

    // Acknowledge again on every open, not only after the purchase. The
    // call right after buying can fail — flaky signal in the street is the
    // normal case for this app — and Google's three-day refund window is
    // unforgiving. Acknowledging an already-acknowledged purchase is a
    // no-op, so this is safe to repeat and gives us many chances.
    if (mine.purchaseToken) void acknowledgeWithServer(mine.purchaseToken);

    return { state: "subscribed" };
  } catch {
    // Play is there but would not answer. Treat it as no subscription rather
    // than unlocking, and let the walker retry.
    return { state: "unsubscribed" };
  }
}

export function canOpen(access: "free" | "subscriber", entitlement: Entitlement) {
  return access === "free" || entitlement.state === "subscribed";
}

async function playService(): Promise<DigitalGoodsService | null> {
  if (typeof window === "undefined") return null;
  const getService = (window as WindowWithDigitalGoods).getDigitalGoodsService;
  if (!getService) return null;
  try {
    return await getService(PLAY_BILLING);
  } catch {
    return null;
  }
}

/**
 * The price as Play states it for this user's country and currency. We never
 * hard-code a price: it lives in Play Console, and Play localises it.
 */
export async function subscriptionPrice(): Promise<string | null> {
  const service = await playService();
  if (!service) return null;

  try {
    const [details] = await service.getDetails([subscriptionProductId]);
    if (!details?.price) return null;
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: details.price.currency,
    }).format(Number(details.price.value));
  } catch {
    return null;
  }
}

export type PurchaseOutcome = "ok" | "cancelled" | "unavailable" | "failed";

/**
 * Opens Google Play's own purchase sheet.
 *
 * Play is the merchant: we never see a card number, and there is no payment
 * code of ours to get wrong. The zero-amount total below is required by the
 * Payment Request API but ignored — Play charges the price configured for
 * the product in Play Console.
 *
 * A Play subscription must be acknowledged within three days or Google
 * refunds it automatically, and only a server can acknowledge. So this
 * refuses to open the sheet at all unless NEXT_PUBLIC_ACK_ENDPOINT points
 * at the Worker: taking money we are going to lose is worse than not
 * selling yet.
 */
export async function startSubscription(): Promise<PurchaseOutcome> {
  if (typeof window === "undefined") return "unavailable";
  if (!("PaymentRequest" in window)) return "unavailable";
  if (!acknowledgeEndpoint) return "unavailable";
  if (!(await playService())) return "unavailable";

  try {
    const request = new PaymentRequest(
      [{ supportedMethods: PLAY_BILLING, data: { sku: subscriptionProductId } }],
      { total: { label: "Subscription", amount: { currency: "EUR", value: "0" } } },
    );
    const response = await request.show();

    // The charge has happened by now, so always tell the sheet it
    // succeeded. Acknowledgement is a separate concern and gets retried
    // on the next open if it fails here.
    await response.complete("success");

    const { purchaseToken } = (response.details ?? {}) as { purchaseToken?: string };
    if (purchaseToken) await acknowledgeWithServer(purchaseToken);

    return "ok";
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") return "cancelled";
    return "failed";
  }
}
