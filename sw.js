const assets = [
  "./index.html",
  "./script.js",
  "./fonts/CalSans-Regular.woff",
  "./fonts/CalSans-Regular.woff2",
  "./fonts/Rowdies-Regular.woff",
  "./fonts/Rowdies-Regular.woff2",
  "./images/background.jpg",
  "./images/num1.svg",
  "./images/num2.svg",
];
const cacheName = "cacheStaticAssets1or2";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated", e);
});
