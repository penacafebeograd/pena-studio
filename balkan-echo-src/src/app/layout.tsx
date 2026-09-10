import type { Metadata, Viewport } from "next";

import { ServiceWorker } from "@/components/service-worker";
import { asset, siteUrl, themeColor } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Balkan Echo — narrated Belgrade walking tours",
  description:
    "A narrated walk through Belgrade's old town in six languages, with the whole route on a map. Opens in the browser and keeps working offline.",
  applicationName: "Balkan Echo",
  // Paths are written out with the base path because this app is served from
  // a subdirectory; a bare "/icons/..." would resolve to the domain root.
  manifest: asset("/manifest.webmanifest"),
  icons: {
    icon: [
      { url: asset("/icons/favicon-32.png"), sizes: "32x32", type: "image/png" },
      { url: asset("/icons/icon-192.png"), sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: asset("/icons/apple-touch-icon.png"), sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    title: "Balkan Echo",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "Balkan Echo — narrated Belgrade walking tours",
    description:
      "Six stops through Stari Grad, in six languages, with real walking paths on the map.",
    url: siteUrl,
    siteName: "Balkan Echo",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor,
  width: "device-width",
  initialScale: 1,
  // The tour is read while walking; let people zoom the narration text.
  maximumScale: 5,
};

// Runs before first paint so the page never flashes light before turning
// dark. It has to be inline and blocking: an effect runs after paint, and
// this app is a static export, so the served HTML has no idea which theme
// the walker last chose. Kept deliberately tiny and in step with
// applyTheme() in lib/preferences.ts.
const themeScript = `(function(){try{
var t=localStorage.getItem("balkan-echo.theme");
var dark=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);
var r=document.documentElement;
if(dark)r.classList.add("dark");
r.dataset.theme=t||"system";
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <ServiceWorker />
      </body>
    </html>
  );
}
