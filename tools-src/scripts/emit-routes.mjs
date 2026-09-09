// GitHub Pages serves static files only - there is no SPA rewrite rule. The app
// has two client routes (/tools/demo/salon and /tools/demo/gym), so we copy the
// built shell to those paths. A direct visit or a shared link then loads a real
// file, and the router reads the path and renders the right demo.
//
// 404.html is the safety net for anything else under /tools/.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '..', '..', 'tools');
const shell = resolve(outDir, 'index.html');

const targets = ['demo/salon/index.html', 'demo/gym/index.html', '404.html'];

for (const target of targets) {
  const dest = resolve(outDir, target);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(shell, dest);
  console.log(`emitted tools/${target}`);
}
