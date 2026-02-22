const CACHE_NAME = 'vacation-v3';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn-icons-png.flaticon.com/512/2370/2370264.png'
];

// 설치 시 자원 저장
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

// 오프라인일 때 저장된 자원 반환
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
