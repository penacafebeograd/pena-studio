/*
 * Balkan Echo service worker.
 *
 * The point is a walker halfway up Skadarska with no data left on their
 * roaming plan. Everything the tour needs — the page, the scripts, the route
 * geometry, the narration text — is same-origin and gets cached on first
 * visit. Map tiles come from OpenStreetMap and are cached separately, with a
 * cap, because they are third-party and unbounded.
 *
 * Deliberately hand-written rather than generated: it is short enough to read
 * in one sitting, and a build-time precache manifest would mean adding a
 * plugin to keep working.
 */

const VERSION = "v1";
const SHELL = `balkan-echo-shell-${VERSION}`;
const TILES = `balkan-echo-tiles-${VERSION}`;
const START_URL = "/balkan-echo/";

// Roughly a city's worth of tiles at walking zoom levels. Old entries are
// dropped oldest-first, which for a linear walk is also least-recently-seen.
const TILE_LIMIT = 500;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      .then((cache) => cache.add(new Request(START_URL, { cache: "reload" })))
      .catch(() => {
        // A failed pre-cache must not block activation; the fetch handler
        // fills the cache on first real navigation anyway.
      })
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("balkan-echo-") && key !== SHELL && key !== TILES)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

function isTile(url) {
  return url.hostname.endsWith(".tile.openstreetmap.org");
}

async function trimCache(cacheName, limit) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= limit) return;
  await Promise.all(keys.slice(0, keys.length - limit).map((key) => cache.delete(key)));
}

// Tiles never change for a given z/x/y, so serve from cache whenever we have
// them and only reach the network for the ones we do not.
async function tileFirst(request) {
  const cache = await caches.open(TILES);
  const hit = await cache.match(request);
  if (hit) return hit;

  const response = await fetch(request);

  // `ok` is false for an opaque response (status 0), which is what we get if
  // the tile layer ever stops asking for CORS. Cache those too rather than
  // silently losing the offline map, but never cache a real error.
  const worthKeeping = response.ok || (response.type === "opaque" && response.status === 0);
  if (worthKeeping) {
    await cache.put(request, response.clone());
    trimCache(TILES, TILE_LIMIT);
  }
  return response;
}

// App assets: serve the cached copy immediately, then refresh it in the
// background so the next launch is current. A walker gets speed; a returning
// walker gets the new version one launch later.
async function staleWhileRevalidate(request) {
  const cache = await caches.open(SHELL);
  const hit = await cache.match(request);

  const update = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);

  if (hit) return hit;

  const fresh = await update;
  if (fresh) return fresh;
  throw new Error("offline and not cached");
}

// Navigations go to the network first so a deploy is picked up promptly, and
// fall back to the cached start page when there is nothing to reach.
async function navigate(request) {
  const cache = await caches.open(SHELL);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return (
      (await cache.match(request)) ??
      (await cache.match(START_URL)) ??
      new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain" } })
    );
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (isTile(url)) {
    event.respondWith(tileFirst(request).catch(() => Response.error()));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(navigate(request));
    return;
  }

  if (url.origin === self.location.origin && url.pathname.startsWith("/balkan-echo/")) {
    event.respondWith(staleWhileRevalidate(request).catch(() => Response.error()));
  }
});
