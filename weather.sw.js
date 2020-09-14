const staticDevWeather = "presley-weather-app-v2";
const assets = [
    "/",
    "/index.html",
    "/assets/css/theme.css",
    "/assets/css/template.css",
    "/assets/js/init.js",
    "/assets/js/clock.js",
    "/assets/js/weather.api.js",
    "/assets/img/presley-weather-icon.png",
    "/assets/img/android-chrome-192x192.png",
    "/assets/img/android-chrome-512x512.png",
    "/assets/img/apple-touch-icon.png",
    "/assets/img/browserconfig.xml",
    "/assets/img/favicon.ico",
    "/assets/img/favicon-16x16.png",
    "/assets/img/favicon-32x32.png",
    "/assets/img/mstile-150x150.png",
    "/assets/img/safari-pinned-tab.svg",
    "/vendor/fonts/axis/style.css",
    "/vendor/fonts/axis/axis.woff",
    "https://use.fontawesome.com/releases/v5.11.2/css/all.css",
    "https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons.css"
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevWeather).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});

