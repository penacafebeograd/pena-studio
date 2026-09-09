import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';

/**
 * Injects the Cloudflare Web Analytics beacon, but only when a token is set.
 *
 * Free, unlimited page views, and it sets no cookies and does no
 * fingerprinting - so it needs no consent banner. With no token the tag is
 * simply not emitted, rather than shipping a broken script.
 *
 * Token: Cloudflare dashboard -> Analytics & Logs -> Web Analytics ->
 * Add a site (penastudio.cc). Then set VITE_CF_BEACON_TOKEN as a repo secret.
 */
function cloudflareAnalytics(token?: string): Plugin {
  return {
    name: 'cloudflare-web-analytics',
    transformIndexHtml() {
      if (!token) return [];
      return [
        {
          tag: 'script',
          attrs: {
            // Matches the snippet Cloudflare hands out verbatim; module scripts
            // are deferred by default.
            type: 'module',
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            'data-cf-beacon': JSON.stringify({ token }),
          },
          injectTo: 'body',
        },
      ];
    },
  };
}

// Served from https://penastudio.cc/tools/ (GitHub Pages, same repo as the
// Pena Studio site), so every emitted asset URL has to carry the /tools/ prefix.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    base: '/tools/',
    plugins: [
      react(),
      tailwindcss(),
      cloudflareAnalytics(env.VITE_CF_BEACON_TOKEN),
    ],
    resolve: {
      alias: { '@': path.resolve(__dirname, '.') },
    },
    build: {
      outDir: '../tools',
      emptyOutDir: true,
    },
  };
});
