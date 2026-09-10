// Serves the exported `out/` directory the way GitHub Pages will: the app
// under /balkan-echo/, directory URLs resolving to index.html. Lets us test
// the production build — service worker, manifest, basePath — before deploy.
import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = new URL("../out/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const port = Number(process.env.PORT ?? 3200);
const prefix = "/balkan-echo";

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function resolve(urlPath) {
  let path = decodeURIComponent(urlPath.split("?")[0]);
  if (path.startsWith(prefix)) path = path.slice(prefix.length) || "/";
  // Refuse to climb out of out/ — this server is local-only, but a traversal
  // bug here would happily read the rest of the disk.
  const safe = normalize(path).replace(/^([.][.](\/|\\))+/, "");
  const candidate = join(root, safe);

  for (const attempt of [candidate, join(candidate, "index.html"), `${candidate}.html`]) {
    try {
      if (statSync(attempt).isFile()) return attempt;
    } catch {
      // try the next shape
    }
  }
  return null;
}

createServer((req, res) => {
  const file = resolve(req.url ?? "/");
  if (!file) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }
  res.writeHead(200, {
    "Content-Type": types[extname(file)] ?? "application/octet-stream",
    "Cache-Control": "no-cache",
  });
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`Serving out/ at http://localhost:${port}${prefix}/`);
});
