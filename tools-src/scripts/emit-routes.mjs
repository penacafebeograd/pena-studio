// GitHub Pages serves static files only - there is no SPA rewrite rule. The app
// has three client routes (/tools/demo/salon, /tools/demo/gym, /tools/link), so we copy the
// built shell to those paths. A direct visit or a shared link then loads a real
// file, and the router reads the path and renders the right demo.
//
// 404.html is the safety net for anything else under /tools/.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '..', '..', 'tools');
const shell = resolve(outDir, 'index.html');

const targets = [
  'demo/salon/index.html',
  'demo/gym/index.html',
  'link/index.html',
  '404.html',
];

for (const target of targets) {
  const dest = resolve(outDir, target);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(shell, dest);
  console.log(`emitted tools/${target}`);
}

// The link builder is our own tool. The app also sets noindex at runtime, but
// a crawler that does not run JavaScript only sees this file.
const linkPage = resolve(outDir, 'link/index.html');
const html = readFileSync(linkPage, 'utf8');
const noindex = html.replace(
  /<meta name="robots" content="[^"]*"\s*\/?>/,
  '<meta name="robots" content="noindex, nofollow" />',
);
if (noindex === html) throw new Error('robots meta not found in the built shell');
writeFileSync(linkPage, noindex);
console.log('marked tools/link/index.html noindex');
