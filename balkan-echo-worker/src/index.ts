/*
 * Balkan Echo — subscription acknowledgement.
 *
 * Why this exists at all
 * ----------------------
 * Google Play refunds a subscription automatically if it is not
 * "acknowledged" within three days, and acknowledgement is a server-side
 * call to the Play Developer API. The app itself has no server: it is a
 * static export on GitHub Pages. This Worker is the smallest thing that
 * closes that gap — one endpoint, no database, no state, free tier.
 *
 * It also answers whether a purchase is actually active, straight from
 * Google, which is a stronger answer than asking the device.
 *
 * What it deliberately does NOT do
 * --------------------------------
 * It does not hold accounts, sessions or personal data. The only thing it
 * ever receives is an opaque Play purchase token, which it hands to Google
 * and forgets. Nothing is logged.
 */

import { accessToken } from "./google-auth";

export type Env = {
  /** Service-account JSON, set with: wrangler secret put GOOGLE_SERVICE_ACCOUNT_JSON */
  GOOGLE_SERVICE_ACCOUNT_JSON: string;
  /** Android application id, e.g. cc.penastudio.balkanecho */
  PACKAGE_NAME: string;
  /** Play Console subscription product id, e.g. balkan_echo_monthly */
  PRODUCT_ID: string;
  /** Exact origin allowed to call this, e.g. https://penastudio.cc */
  ALLOWED_ORIGIN: string;
};

const PLAY_API = "https://androidpublisher.googleapis.com/androidpublisher/v3/applications";

/** Play tokens are long opaque strings; reject anything that plainly is not one. */
function looksLikeToken(value: unknown): value is string {
  return typeof value === "string" && value.length >= 20 && value.length <= 1024;
}

function corsHeaders(env: Env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(body: unknown, status: number, env: Env) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(env) },
  });
}

type SubscriptionV2 = {
  subscriptionState?: string;
  acknowledgementState?: string;
};

async function fetchSubscription(env: Env, token: string, bearer: string) {
  const url =
    `${PLAY_API}/${encodeURIComponent(env.PACKAGE_NAME)}` +
    `/purchases/subscriptionsv2/tokens/${encodeURIComponent(token)}`;

  const response = await fetch(url, { headers: { Authorization: `Bearer ${bearer}` } });

  if (response.status === 404 || response.status === 410) return null;
  if (!response.ok) throw new Error(`play lookup failed with ${response.status}`);

  return (await response.json()) as SubscriptionV2;
}

async function acknowledge(env: Env, token: string, bearer: string) {
  // Acknowledgement still lives on the v3 classic endpoint; subscriptionsv2
  // is read-only. It needs the product id as well as the token.
  const url =
    `${PLAY_API}/${encodeURIComponent(env.PACKAGE_NAME)}` +
    `/purchases/subscriptions/${encodeURIComponent(env.PRODUCT_ID)}` +
    `/tokens/${encodeURIComponent(token)}:acknowledge`;

  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${bearer}`, "Content-Type": "application/json" },
    body: "{}",
  });

  // 200 is success; 400 with alreadyAcknowledged is also fine, and racing
  // two acknowledgements is a normal outcome of a retry.
  if (response.ok || response.status === 400) return;
  throw new Error(`acknowledge failed with ${response.status}`);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true }, 200, env);
    }

    if (request.method !== "POST" || url.pathname !== "/acknowledge") {
      return json({ error: "not found" }, 404, env);
    }

    // Only our own page may call this from a browser.
    const origin = request.headers.get("Origin");
    if (origin && origin !== env.ALLOWED_ORIGIN) {
      return json({ error: "origin not allowed" }, 403, env);
    }

    let purchaseToken: unknown;
    try {
      ({ purchaseToken } = (await request.json()) as { purchaseToken?: unknown });
    } catch {
      return json({ error: "expected JSON" }, 400, env);
    }

    if (!looksLikeToken(purchaseToken)) {
      return json({ error: "purchaseToken missing or malformed" }, 400, env);
    }

    try {
      const bearer = await accessToken(env.GOOGLE_SERVICE_ACCOUNT_JSON);
      const subscription = await fetchSubscription(env, purchaseToken, bearer);

      if (!subscription) {
        return json({ active: false, state: "unknown", acknowledged: false }, 200, env);
      }

      const pending =
        subscription.acknowledgementState === "ACKNOWLEDGEMENT_STATE_PENDING";
      if (pending) await acknowledge(env, purchaseToken, bearer);

      const active =
        subscription.subscriptionState === "SUBSCRIPTION_STATE_ACTIVE" ||
        subscription.subscriptionState === "SUBSCRIPTION_STATE_IN_GRACE_PERIOD";

      return json(
        {
          active,
          state: subscription.subscriptionState ?? "unknown",
          acknowledged: true,
        },
        200,
        env,
      );
    } catch {
      // Never leak Google's error text to the page; the app retries.
      return json({ error: "upstream failure" }, 502, env);
    }
  },
};
