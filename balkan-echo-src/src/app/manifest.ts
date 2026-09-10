import type { MetadataRoute } from "next";

import { asset, backgroundColor, basePath, themeColor } from "@/lib/site";

// Bubblewrap reads this file to build the Play Store package, so the fields
// here become the Android app's name, icon and splash screen. `id` pins the
// app's identity so a later change of start_url does not read as a new app.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: `${basePath}/`,
    name: "Balkan Echo — Belgrade walking tours",
    short_name: "Balkan Echo",
    description:
      "Narrated walking tours of Belgrade in six languages, with the whole route on a map. Works offline once opened.",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    orientation: "portrait",
    lang: "en",
    dir: "ltr",
    categories: ["travel", "education", "navigation"],
    background_color: backgroundColor,
    theme_color: themeColor,
    icons: [
      {
        src: asset("/icons/icon-192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: asset("/icons/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: asset("/icons/icon-512-maskable.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
