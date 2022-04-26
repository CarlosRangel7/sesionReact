const staticDevDogs = "dev-dogs-v.1.0.0.8";

const assets = [
    "/static/js/main.chunk.js",
    "/static/js/0.chunk.js",
    "/static/js/bundle.js",
    "/index.html",
    "/"
]


self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevDogs).then(cache => {
            cache.addAll(assets);
            console.log('coipado');
        })
    )
});

self.addEventListener("fetch", (fetchEvent) => {
    if (!navigator.onLine) {
        console.log(fetchEvent);
        fetchEvent.respondWith(
            caches.match(fetchEvent.request).then(res => {
                return res || fetch(fetchEvent.request)
            })
        )
    }
});


