
const CACHE_NAME = "framefolio-v1";
const APP_BASE = "/photographer-gallery-app/";

const APP_FILES = [
  APP_BASE,
  APP_BASE + "manifest.json",
  APP_BASE + "icon-192.png",
  APP_BASE + "icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("framefolio-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Never intercept login, database, or upload requests.
  if (
    request.method !== "GET" ||
    url.origin !== self.location.origin ||
    url.pathname.startsWith("/photographer-gallery-app/__/") ||
    url.pathname.includes("firestore") ||
    url.pathname.includes("cloudinary")
  ) {
    return;
  }

  // Use the network first for app pages so updates appear.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cached = await caches.match(request);
        return cached || caches.match(APP_BASE);
      })
    );
  }
});
