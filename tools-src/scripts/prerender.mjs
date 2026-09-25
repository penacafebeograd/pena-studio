// Pre-renders the /tools/ landing page into tools/index.html.
//
// The app is client-rendered, so the built shell is an empty <div id="root">.
// Google runs the JavaScript, but most AI search crawlers do not, and they saw
// only the <head>. This fills the root with the Serbian landing page and adds
// the FAQ as FAQPage structured data. main.tsx still calls createRoot, which
// replaces this markup on load, so visitors see exactly what they did before.
//
// Runs after emit-routes.mjs on purpose: the demo, link and 404 copies keep the
// empty shell, so a direct visit to a demo never flashes the landing page.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const ssrDir = resolve(here, '..', '.ssr');
const page = resolve(here, '..', '..', 'tools', 'index.html');

const { render, faq } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);

const body = render();
if (body.length < 2000) throw new Error(`prerendered markup looks empty (${body.length} chars)`);

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'sr',
  mainEntity: faq.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};
// "<" is escaped so no answer text can ever close the script tag.
const faqScript = `<script type="application/ld+json">${JSON.stringify(faqLd).replace(/</g, '\\u003c')}</script>`;

const html = readFileSync(page, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('empty root not found in tools/index.html');
const out = html
  .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  .replace('</head>', `    ${faqScript}\n  </head>`);
writeFileSync(page, out);
rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerendered tools/index.html (${body.length} chars, ${faq.length} FAQ entries)`);
