const CACHE_NAME = 'lab-pibic-v1';
const assets = [
  './',
  'index.html',
  'manifest.json',
  'Icons/icon-192.png',
  'Icons/icon-512.png',
  'https://cdn.tailwindcss.com/3.4.17',
  'https://cdn.jsdelivr.net/npm/lucide@0.263.0/dist/umd/lucide.min.js'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Resposta do Cache (Permite funcionar offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
