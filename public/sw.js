/* QuotationMaker.in service worker — offline-first shell caching. */
const CACHE = 'qm-cache-v2';
const PRECACHE = ['/', '/create', '/templates', '/offline'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || !request.url.startsWith('http')) return;

  // Navigation requests: network-first, fall back to cache, then offline page.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Only persist successful responses. Caching a 404/500 here would pin
          // an error page into the cache for good — CACHE has a fixed name, so
          // nothing would ever evict it.
          if (response && response.ok && response.type === 'basic') {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => undefined);
          }
          return response;
        })
        .catch(async () => {
          // `caches.match` returns a Promise, which is always truthy — these
          // fallbacks have to be awaited individually rather than chained with `||`.
          return (
            (await caches.match(request)) ||
            (await caches.match('/offline')) ||
            (await caches.match('/')) ||
            Response.error()
          );
        })
    );
    return;
  }

  // Static assets: cache-first.
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request)
          .then((response) => {
            if (response && response.status === 200 && response.type === 'basic') {
              const copy = response.clone();
              caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => undefined);
            }
            return response;
          })
          .catch(() => cached)
    )
  );
});
