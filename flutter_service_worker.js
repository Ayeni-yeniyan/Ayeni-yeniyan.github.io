'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5cd50d76f1865572ccf868c45e6bab64",
".git/config": "3c7f78242aa8c1b19b54ca4ead97f757",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5fb90b8b258dc623b2578af581390d88",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e68231e59287dd9143c6f3ed0a671fd9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4981e2d115759282676149fa14c2aea9",
".git/logs/refs/heads/main": "4493bdb02e7d10167974aba148ceefa7",
".git/logs/refs/remotes/origin/main": "72a666faaf256e5c6342a5dfa38cae08",
".git/objects/02/5222bd924ebd4786d57824c61fa46e09efe8c3": "14031c6192659ba82a7cc3260f955fe4",
".git/objects/04/24aa4ffda24a189ed8487dddd63626bceff0f8": "dbcacb703ed25e53e02bf3be56fbc1a3",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/9e4ba7ff792c3316e29d3d3fa8c8bff3b67f21": "64d7eb785352d7157d817fef962a3ac5",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/16/48d67d4d5a33acbf2c6eeb202f8610b9caf776": "95ae0e1659a23e973bb79588ea62e2b1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2a/e2bdf6298c43dce4c1380c5bf55fc4286797ff": "c6eba5491a4c61471365b69b65bc5172",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/c7d5f0acc626da25c9bbe72a2f5c856b349c4a": "ba7c7a96b92163d12d34e2740ac6d0f2",
".git/objects/31/c13b90ddad2a142b518fa360cc6d70488d5859": "9a976a5aa818fcc5b84d2402c3934b8d",
".git/objects/36/5168ef934db4cb6cafde63cd3c1d956ef3cbec": "afecd0386f204eb9b0d432120d5e1756",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/4470861b62e708a1e4b49a950f3c9928486997": "ae55243677c0593b1b7cdea58e26d33f",
".git/objects/4f/61313c6b227010c93da47ed304b41abcc992b9": "79c668beee0e20fe77db8dd0e760f895",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/ace02c3cad09e269e9565e552329f33382a78c": "7fb762b8995a9977dbd4f3e6867b371b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/d8617f7674af17feed9af7dd9fa8244d251aa7": "c30f488cc62e25accc578068d0114f3f",
".git/objects/62/2a85fc5bb9b3d49ec6083645b650c91b498fbc": "6e24d4da20281e9c1941af6023fedf78",
".git/objects/63/144e55d208af6b7dd8ca8e4fdd9cd22ea2de03": "3f84215cad45bdabab6f3612a703df05",
".git/objects/65/eb6eabac049ed50c99331c2777fcda983edd17": "c1d930e3bf69429ea1541651c042b818",
".git/objects/67/dbe4ff1062eb895c4d190b488a2e337deaf7bb": "bfc87ad267766c50ab9217ea1d01e513",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6e/115b9c003449784978f444dff32ba517d649e9": "b6843903adbf267e7d84127246ca95f5",
".git/objects/6e/5e2f074d53de971c44767b6493dc2bc8b24a1b": "e18b67d2d26037eb06ea5c17d305ef0a",
".git/objects/6f/67a992f0bfea5c2809f582b1d958c2e58c370d": "9ced207d39b1ee9752152f7b922bb7bf",
".git/objects/7a/490235e74104d20b0db13cebc19c793cc16800": "fe60f172d13e8ebb018c101ee635fc83",
".git/objects/7b/c99ef5955a5ed726f48c832e4e3625ccd6be9e": "70410ddfa3c69d23cdbd9f2886ebf423",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/94ebaa289bfe9c4675512c942562167e4c6251": "9422e7cc11d16432709e77584dcdbfe7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d1699a538a7e7cd34282e7ad4f139827fd5c27": "bd738f832283666910e793a69b9b0ca7",
".git/objects/8b/409da47a148c63accd5eba0ab4abbf0dbb7a59": "b546579befa84bb19b9c100a09c56232",
".git/objects/8f/3e2533386210442cf78ac93a23d5f56ab53827": "f3824f1f561be425ae82656598fa91d2",
".git/objects/8f/d403267c54da58c1b5eb178f143534af662a97": "2c2a450d7c97f0588eb22059d3bdb8ca",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/c7b8666f6f77a4e2b3a38165bd055a80ac890c": "1c181c30e34452eee7b7ac7ead643cb9",
".git/objects/9c/7bb209fcb1fccbfbacd99b6e13e989d3eb64dc": "bfc2deac64be599ea8d9a548e5d3c6d4",
".git/objects/a5/eab2a88dbeb178ff9f801b3866e2a3ecb38314": "8fe0dc4bd44fa15387d163e217ab3806",
".git/objects/a9/0902447d2fa45c53e2c6a5d60375858c4a6188": "108216498d3d26ddb85d05aeeb42b961",
".git/objects/a9/1c1f13af43faedc91c7bb56b0d1bdbed0e8ed2": "2da48b81858328dbd9db52a0912280be",
".git/objects/ab/b05fce0038dad1ccd43c133f01e17c172704a5": "7c05b50532a387232ab256c5325e3e1d",
".git/objects/b3/bb2d3f6c3d47a7a9dfe7aa293c06a3963988e2": "187e36a9bcc0092b2b11ef5b72147446",
".git/objects/b5/4a331b2a82db894389c98b30a68ebe73f997ac": "eacd497e543529e487a327c4c5279ad1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/0a871391fcee6b6520858ae22c0756b1d64fc9": "d2d6fc32aae18012579dc636dfa29c7f",
".git/objects/be/508a941e65b353ccc597e005b98ad8f7a6ed56": "a2554914464067e075343310687a5084",
".git/objects/c4/b8ee12458a3ea49901ded2b41ccb07266b275b": "72b78dd2591119bc8ae470b3b2ec13b7",
".git/objects/c5/fd48a77f9b6be02ea9c091e46e22dd8736881e": "ba86e18b87e73222ae54ac7ebb3f8344",
".git/objects/c8/9394d92f4d4d674b8ed841ccf822182321514d": "71ac333e3f621e4c2ada078dbfb2d293",
".git/objects/c9/cd8e50214e9f71496acc0ffd4184f43280fa30": "44d11d9d4b7e1883c41cb9e4c5d5c230",
".git/objects/d6/56396ff5ace04ebc72dfe97f8efa9a4c3b6866": "50de09631937a106ef61a66f21789bf6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/272f965d8c3ec64a12e1ccf83e881031177108": "b39716c494bf5d19470e2ab01d7eae2b",
".git/objects/da/683b1eb87a95ea7e34f3143a95c30ad5e82a98": "86a7c268aa3b1d0fafb167ac7b3dd7e7",
".git/objects/e1/c1fcf4746c595f16ae6863b51353c377ddbf53": "d9c1d339d8be5ff4d719197b8d80073f",
".git/objects/e4/7038ca9b4e762fe48639a28812a47134e3ba34": "ba8e6d2df5cacdeb0914b0d19b212717",
".git/objects/e5/579d8e3fcc166cafdd4bae4b63ed56e29a8ce4": "82ded338edc243bdc7f2d23d6ec3b857",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/f8e4f4874d16839951e7208c4f586a2fe1d73c": "59d636e174fc5b0ce0fa7e7630aa19d5",
".git/objects/f4/d3386ce2c5419e4e8469b74b18667dc067799e": "be5581749fd8d3bc98f838a19b936bda",
".git/objects/f5/f69244d5d84e54ac41489c1f43800705bdbf9b": "f02d2a7a71b45b7dd3d5af5b9d31c737",
".git/objects/f6/2c8661023eea9379d3ead6bb38a458951e3dff": "495472e706c03cc7332b00ed0a0c47d8",
".git/ORIG_HEAD": "b2feb193948f55667c03bf5b8e6cf3b1",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "b2feb193948f55667c03bf5b8e6cf3b1",
".git/refs/remotes/origin/main": "b2feb193948f55667c03bf5b8e6cf3b1",
"assets/AssetManifest.bin": "cc1f498551f027f4f4f2b236cdb49c01",
"assets/AssetManifest.bin.json": "84c663de27b8f0109c04b6af838cb222",
"assets/AssetManifest.json": "b46425f573bd0f64292193084adceb24",
"assets/assets/DancingScript-Bold.ttf": "6c5b41b0622681bb6aafb3d4ed2a1171",
"assets/assets/fiver.png": "f937684854f2a3105aad914de6fa8263",
"assets/assets/kwork.png": "fe565a443dac613feebf736d8e83878b",
"assets/assets/loading.gif": "8a7630caadfb15dbd13cb469853ab004",
"assets/assets/Sam.jpg": "d5dda627560856ac16e4899883429ec8",
"assets/assets/upwork.png": "e7a8919ace385cf8a267b23006320618",
"assets/FontManifest.json": "d276d573dd23b2a71e36c66d3db7c771",
"assets/fonts/MaterialIcons-Regular.otf": "c7cbd98b1180f6d587262533cc276675",
"assets/NOTICES": "9a5dc1eac8c200d86e602d68ad061104",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1d76239e656d2a89707c0b8787a6c6e0",
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
"index.html": "de83cc2f01c919f9556f30ba180a7082",
"/": "de83cc2f01c919f9556f30ba180a7082",
"main.dart.js": "adc635ab5147547285894b5ac84dd0d4",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"paystack_interop.js": "ee4185551714276c62f6475e07ae5209",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
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
    .then((cache) =>  {
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
