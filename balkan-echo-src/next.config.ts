import type { NextConfig } from "next";

/**
 * Balkan Echo ships as a fully static site: no server, no database, no
 * per-request compute. `next build` writes plain HTML/JS/CSS into `out/`,
 * which the penastudio.cc GitHub Pages workflow copies to /balkan-echo/.
 *
 * Because the site lives in a subdirectory rather than at a domain root,
 * `basePath` has to be set — otherwise every asset URL resolves one level
 * too high and the deployed page loads nothing.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/balkan-echo",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
