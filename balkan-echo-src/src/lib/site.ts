/**
 * Where the app lives. Balkan Echo is served from a subdirectory of
 * penastudio.cc rather than a domain root, so anything that builds a URL by
 * hand — the manifest, the service worker registration, raw <link> tags —
 * has to carry this prefix. Next.js only prefixes what it generates itself.
 *
 * Keep this in sync with `basePath` in next.config.ts.
 */
export const basePath = "/balkan-echo";

export const siteUrl = "https://penastudio.cc/balkan-echo";

/** Prefixes a path that Next.js will not prefix for us. */
export function asset(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Brand colours the browser chrome and the Android splash screen need. */
export const themeColor = "#2E7D52";
export const backgroundColor = "#F7F9F7";
