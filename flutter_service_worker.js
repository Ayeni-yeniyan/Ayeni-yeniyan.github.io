'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {
  "assets/AssetManifest.bin": "e471bee56cfae172c612032f2fc1a214",
  "assets/AssetManifest.bin.json": "f8687e820244312f5a4468ca4ed83120",
  "assets/AssetManifest.json": "2cbcfbeb2d48b96684e4fdd347d45631",
  "assets/assets/ayenitech.png": "9bbc458a9cd7df13bf55b84c29e3d374",
  "assets/assets/DancingScript-Bold.ttf": "6c5b41b0622681bb6aafb3d4ed2a1171",
  "assets/assets/loading.gif": "8a7630caadfb15dbd13cb469853ab004",
  "assets/FontManifest.json": "d276d573dd23b2a71e36c66d3db7c771",
  "assets/fonts/MaterialIcons-Regular.otf": "f21ab9a1289f419c4761bb257224a794",
  "assets/NOTICES": "e0f53eb894b340ff0678687329043240",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
  "assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3009a56a1b160f04a4128756207dbae0",
  "assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
  "assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1f6b4834c789f9678d6c4adf35b4ef73",
  "assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
  "canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
  "canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
  "canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
  "canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
  "canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
  "canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
  "canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
  "flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
  "icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
  "index.html": "ae16c853e8f3b232b0e6be3f5479257c",
  "/": "ae16c853e8f3b232b0e6be3f5479257c",
  "main.dart.js": "0cc3938349756f88c0b982ebf7490625",
  "manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
  "paystack_interop.js": "ee4185551714276c62f6475e07ae5209",
  "splash/img/dark-1x.png": "4c114d2ae34681faa61c9e1047690dad",
  "splash/img/dark-2x.png": "d89eabfdf941dc58a7affd86ef480e80",
  "splash/img/dark-3x.png": "be74a52d7c6c2084074709b4cec43b9e",
  "splash/img/dark-4x.png": "f0e4034ee485857c1deb929c8cbbc4a0",
  "splash/img/light-1x.png": "4c114d2ae34681faa61c9e1047690dad",
  "splash/img/light-2x.png": "d89eabfdf941dc58a7affd86ef480e80",
  "splash/img/light-3x.png": "be74a52d7c6c2084074709b4cec43b9e",
  "splash/img/light-4x.png": "f0e4034ee485857c1deb929c8cbbc4a0",
  "version.json": "9b818ca9511483c901bed1545384376c"
};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
  "index.html",
  "assets/AssetManifest.json",
  "assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, { 'cache': 'reload' })));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(async function () {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) => {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
