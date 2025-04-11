'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c60b6e0f65e71b4b5774be5a44773770",
"version.json": "41e05720c564c2f3ac5ccb3e79ea22bf",
"index.html": "056927883a14ca8353275e681d981c46",
"/": "056927883a14ca8353275e681d981c46",
"main.dart.js": "14fc9b4bc48117c8878fc36f0686d7d0",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "32dd2828d72c4eb03a3e0cae633fa61a",
"assets/AssetManifest.json": "f767f1e4516ff5a0bb2ea15722c54c94",
"assets/NOTICES": "f95067744421a6fcd0b60c68401afcab",
"assets/FontManifest.json": "ee8309659f46b645de0f08df2ec8ba2e",
"assets/AssetManifest.bin.json": "b613a7dd70d713da6e46c52193785d65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cdfa019e8c9c912b55d8b99befb435a9",
"assets/fonts/MaterialIcons-Regular.otf": "9ebfc6bfa04506ca078a0099895c0174",
"assets/assets/images/compliance.png": "b3409e2127e27799e611c57440a8bc63",
"assets/assets/images/realState.png": "8d3bdfe572e84130b8e4fdb6725be0ad",
"assets/assets/images/leadership.png": "97c8c3d023f8f2910d45411772a08d53",
"assets/assets/images/cLogo.png": "57de186b1665ea61ecb155830b46d513",
"assets/assets/images/smallIcon.png": "2c424519a334d647f4f2fbd3fedb3b83",
"assets/assets/images/personalized.png": "cfd0218f8a37d908de666af32fcc5335",
"assets/assets/images/space.png": "bb24ee05ec362af5a5ce6da9abc551e2",
"assets/assets/images/reliableService.png": "e72cea9c13690be128132e787efcf8ae",
"assets/assets/images/dservices.jpg": "8894451877818c5e4a572f0f66253c77",
"assets/assets/images/ourFirm.png": "16eeaeaaded8b0f6a2130d05f32fdd7a",
"assets/assets/images/dservices.png": "36e50eb5af7bfbbec171ef7fe58f9d2b",
"assets/assets/images/mobileMap.png": "2e1c4dd4341c2ab22cba9180db9f5b1b",
"assets/assets/images/curvShape.png": "4394692410aa450f5dbb3a248bd5176a",
"assets/assets/images/arrowDown.png": "4a875a858274639b71e1c4000da92738",
"assets/assets/images/mobileAboutUsPeople.png": "57c96c18e3c72845ad25f1b4bc56228e",
"assets/assets/images/accounting.png": "f550c8b7a4b51e1c6cb14ce7bbce10a1",
"assets/assets/images/services.png": "df9d9f74f9e6a13fa5f0767f5a2ceab7",
"assets/assets/images/map.png": "1dd661157389f046c6d94e0ad8451be8",
"assets/assets/images/closeDrawer.png": "102748b67c42004af6dbaffd3b96e18a",
"assets/assets/images/ccwLogo.png": "ff2c050d169416f11463ef9267c48f63",
"assets/assets/images/parham.png": "36657cbac945578579582134dfc00ac6",
"assets/assets/images/arrow.png": "7118150d2b4ee7cf2bb68969a69ecd30",
"assets/assets/images/individualIcon.png": "106b3b16668dd4381590f372f6e5ab40",
"assets/assets/images/mobileSpace.png": "322d23206fbc334de6fab87913f259ae",
"assets/assets/images/decadesIcon.png": "abaff6e57e12616dbb4c6e6c5fb0375d",
"assets/assets/images/corporate.png": "81afca2891f75a49f78084fe28c21382",
"assets/assets/images/greenBlur.png": "d8d737bfa147dde5e2670cb16f072392",
"assets/assets/images/ownerIcon.png": "c39e4fc74b59065cf704395b7af443a7",
"assets/assets/images/expertAccounting.png": "e505e7039154e36570de3c7b19b81595",
"assets/assets/images/menu.png": "f7776e51af8bbf6d474d9dfb8a1880c4",
"assets/assets/images/commitment.png": "1aec8273b19b3d0e50cafdcf1ff54a0a",
"assets/assets/images/smoothConnectivity.png": "3fd82dc9d3968de054f9552c6f3bf0e6",
"assets/assets/images/seamless.png": "1fa176297c12a85150d7d66b451a3303",
"assets/assets/images/circularArrow.png": "84a95874870148ebe9d154af852b543e",
"assets/assets/images/eyeIcon.png": "9c8cb5158956fce0b080f17b419b8d75",
"assets/assets/images/clientFocused.png": "d07c162e49a903757127d7892da8fc60",
"assets/assets/images/operationIcon.png": "f3bb5059cf2c0e52a078c758acc1c466",
"assets/assets/images/trust.png": "0c27b86f943ce682d37502bb9a409139",
"assets/assets/images/peapole.png": "3bf8c5e9a580ca693631c5c7d239dc4e",
"assets/assets/images/aboutusPeople.png": "779a9a439f1c01e14629e01745a467c6",
"assets/assets/images/selfEmploydIcon.png": "235322c9de05cd417852bd3da26f7e0d",
"assets/assets/images/advisory.png": "02ca486c68c6b0976e4a0c5b18e42c1f",
"assets/assets/images/greenBlur2.png": "b4075f2eb9c8929f3000f88b8fe129a6",
"assets/assets/images/personal.png": "bc087bea7513e28636cd392856f8e342",
"assets/assets/images/excellence.png": "08d935d74b4a0c3d6c548342e9b99801",
"assets/assets/fonts/inter.ttf": "32204736a4290ec41200abe91e5190d1",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
