import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Balkan Echo",
  description:
    "What Balkan Echo does and does not collect. No accounts, no analytics, and location never leaves your device.",
};

// Google Play requires a reachable privacy policy URL for every listing, and
// the Data safety form has to match what this page says. Keep the two in
// step: if the app starts collecting something, both change together.
const updated = "10 September 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          ← Balkan Echo
        </Link>

        <h1 className="mt-8 font-heading text-4xl font-semibold leading-tight">
          Privacy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated {updated}</p>

        <div className="mt-10 space-y-8 leading-7">
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold">The short version</h2>
            <p className="text-muted-foreground">
              Balkan Echo has no user accounts, runs no analytics, and sets no
              advertising or tracking cookies. We do not build a profile of you,
              and we have nothing to sell to anyone else.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold">Your location</h2>
            <p className="text-muted-foreground">
              The tour can show how close you are to the next stop. That is
              optional — nothing on the walk depends on it, and the app asks
              only when you press the location button.
            </p>
            <p className="text-muted-foreground">
              When you turn it on, your coordinates are read by your own browser
              and compared to the stop coordinates on your device. They are not
              sent to us, not stored, and not shared. Close the page and they
              are gone.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold">Narration</h2>
            <p className="text-muted-foreground">
              The stories are read aloud by the speech feature built into your
              browser or phone. Depending on your device, that speech engine may
              process the text on-device or through its maker&apos;s service
              (Google or Apple, for example) under their own privacy terms. The
              text is the published tour script — it never contains anything
              about you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold">Maps</h2>
            <p className="text-muted-foreground">
              Map images are served by the OpenStreetMap Foundation. Loading
              them reveals your IP address and which map squares you looked at
              to OpenStreetMap, as any website image would. See the{" "}
              <a
                className="font-medium text-primary hover:underline"
                href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
                target="_blank"
                rel="noreferrer"
              >
                OpenStreetMap Foundation privacy policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold">Purchases</h2>
            <p className="text-muted-foreground">
              If you buy access through the Android app, the purchase is handled
              entirely by Google Play. We never see your card details, name or
              address — only whether the device in front of you holds a valid
              entitlement. Billing questions, cancellations and refunds go
              through your Google Play account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold">Offline storage</h2>
            <p className="text-muted-foreground">
              So the walk keeps working without a signal, the app stores its own
              pages, scripts and the map squares you have already seen in your
              browser&apos;s cache. This stays on your device. Clearing your
              browser data or uninstalling the app removes it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold">Children</h2>
            <p className="text-muted-foreground">
              Balkan Echo is a general-audience travel guide. It is not directed
              at children and collects no personal data from anyone.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-semibold">Who to contact</h2>
            <p className="text-muted-foreground">
              Balkan Echo is published by Pena Studio, Belgrade, Serbia. For
              anything on this page, write to{" "}
              <a
                className="font-medium text-primary hover:underline"
                href="mailto:penastudio@proton.me"
              >
                penastudio@proton.me
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
