'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "76ab7267dc2eb82ea80733d473f22ea0",
"version.json": "3eadbac2b3e07e7c774bff95060a393e",
"index.html": "dec4c4735f745835f01786726c55c485",
"/": "dec4c4735f745835f01786726c55c485",
"main.dart.js": "08044e4e49059c71a0034a1bb0bf6af2",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "740a0e53c7c3f78f35cd5a66a616aa86",
".git/ORIG_HEAD": "e54f16a444d2aa8723b844a4f99fb2a1",
".git/config": "5b961e50cee34a9c786985561231d72c",
".git/objects/59/637c520c3ff3a169f31b63bfaba8d00000d2c2": "f6411677a183c5325df162f477ec8d83",
".git/objects/68/3ead8c3072a440862a6b9327d9ae9cc7bf7492": "2088813a20ddc2d0a7d2c0f2cebfea68",
".git/objects/57/2499424af1e53521230a2617bec448ecf9a109": "b5b54b352c125526c2c42904404e238f",
".git/objects/6f/995cb17c2d51ec332dd938d0f3b7c4e5a5e3a0": "d4f93e2efc9a472f8907dd1ce1417d9d",
".git/objects/03/90e16ac04890b7c0de5ee9e5d1345c159166d4": "3e8d014c956e5995eeb76aaca1940d3d",
".git/objects/9b/f0a399a66b5eae74f0df1104037f3e1f32892a": "e4956547ef01da4f7d007e1089697bf9",
".git/objects/35/4bdb65b6e1f2d1ff99275925c84b5310cc9a99": "95323cbf653c26036d6a71e5bdaf8c85",
".git/objects/56/a2f6738debda7a89f692817eb04da98ae2f1eb": "7f7c9dbcbe8d347bc5b0d3c208d78f52",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/4c368790b529dc8b1ca37f9dfb9ec67417bd47": "f1cb2c9db25d36808751cbeacfe939e6",
".git/objects/33/18b17da06ad46ffa802fbaf3b9976844afd016": "e3298fbacd5e91f18d98c03475f91a0c",
".git/objects/b2/7822baea48062bf11617ce763e8d623c3a9769": "c5b9e0f1b9ad3cf97e43c2702903275f",
".git/objects/ac/834cb069c6510ede58653e63158d222590b789": "a9de306c2a495d1078e2da543f5ca101",
".git/objects/bb/d930e9a0ccbddd9328fc663ebdfe04428cd414": "e13f69c5b7b34411e16e495096c1a9cb",
".git/objects/d7/4a842d4b932a5e0d6817e09460264ded46d599": "53150f559ea3aa7a463fb2b1ebdd89e8",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/30b0487b88a421dddccd04baa8075857eb61ab": "4d905c7461e4007a8943f8194b01a052",
".git/objects/b4/dc097b55b1a05b845f927a4b32ed868785e984": "b94e00ebb5a990dc7d2514b539713e78",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/062669765d849d5af00a952c4e2a4adaea1bd1": "aaebcea922cd0f56d0472905f42a62be",
".git/objects/ab/3f8a7b75e36fc0f8db46d6d69522dfec74bb7f": "cb6ae7062f51ebb8b692d12048903103",
".git/objects/e2/b2cf399f17ac2f8fe703e6c6152af06bac0cfe": "ad205eb6be1f9e112a83984fe0a970e6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/93e82216cd9b62f025c441fb65b7b7ccf2f96e": "9605e075088d634aafdfa3a6e73dda6c",
".git/objects/fc/fca092826bd914b3b12646aa0217c67aa6cb07": "0c21e17823ae361ba4b8db180c725a2a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/c77d520f571783563fe1997f18df9940ef0ad9": "11b92a5f6e12539f2e6d6c095057e483",
".git/objects/ca/14623821326bdf32825646d5af09b941662fc5": "e96e9be9d2e5dafcfd89772df23180de",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/objects/fe/77243fc7ae5f860243c768fc7bc659839988a5": "3b1c75299f25f48fcfed8983e7d8b1d4",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/42/a61a5183624cf8ba1ea1caf30a16f122c0e27c": "a4d6fa57a65802c5c7d55a3ce16b0dd9",
".git/objects/89/9d4008fa7be50b3742f1eab6ea3fe3efb9950f": "005cf006dd58334b5dadd294414ffaed",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/4b1b0dd7c63f46240530a710ccd503d58d866d": "0da78f91e2108665baeb94f43f846938",
".git/objects/87/3fafaa2efc37ee9d4c7adeb5d8940eef6379f3": "3173b921e61ce939ec9d80c9c332b393",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/3249ec9efbb21679ed1596ebbf16e784d63659": "a81b9ebf0ce8bdb70fa38ce227ecae28",
".git/objects/4c/d015c63c8e2e8379f562c59f817be115505279": "862604aba028aa2eb48895e0abf0eef5",
".git/objects/21/dc07c97503793be3f93b56315ccc144e8a8696": "eb2397f9dc07dd685ea45c3fba93bba9",
".git/objects/86/02d03c5f9f018fc850cd7f67f1b983f57a0fca": "cfb5b4679db97ca6d83ddbcd872788de",
".git/objects/72/41171f84fb3cd196a78f9d113d60e24b0ab2a7": "8df2e023f856a6470098ac0e89b40dfe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/3baa75b4a00de1a665e3b81bfe49567b378984": "42ab988fed83c189757945cfc8826a68",
".git/objects/96/1b16548816aa17eb72011b63c59c5980d64c94": "9fbd7fe89a42e02091945e9e277c2eec",
".git/objects/98/5d07920e026aecaf83a7bac53e52d00414a541": "e5463712bb9e3f9bc8613fbffe266e36",
".git/objects/53/f85c97d3ca11af398c9822b37dc0183444ddf7": "82d65b1620c8bcfef1b62fee1b528e8c",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/39/3cb94a89583a8647d62755f44302b9ff9475db": "471487d4f66db423c879d8dc0b5c0809",
".git/objects/39/897bdf5265ff2ea21066e17fd8b71611ae99b5": "e36a4e7be9a0d02dce80520022f7f90c",
".git/objects/99/f17b1b6c59f6130a9ffafaf9a3e6d830515cd8": "c6792c6d7d20b02fd8e4b771f68c80e6",
".git/objects/99/34d841f65c6cbaad0927976140c0132b5f46fa": "4885ada682d4cd0db44707592692ad2c",
".git/objects/55/7d082f98ca5acbbb149e442ea9f40196912753": "d3018c0ac9339f0ce9f27346fc7de832",
".git/objects/bf/c226a1811e9a1866e2d0ba91eb25769c56f9b9": "c6a559c9855ec57f7b242119e9a185e2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/b6/26c5daa12a8e10a71fabf97313b900865d14a0": "d4c3c8c9413b4dacc96900bf899df746",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/ca6b9a32aabf5003e324b8c1f6398e96178f92": "da044221bb13215173a0c4677a2e81b3",
".git/objects/b0/1cd1968fc9dd6852385ca5c37eb71a448e2e3d": "7561c4b9f2324b05cc9940cc8813a437",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/67a0ca24cccff8f65365a1eeb1839ea4079c0d": "ad463bfc25afdda23553f7660b72990d",
".git/objects/e7/74c67e9ccaa0f4863e5b1ce2be88b36ab9e4e1": "880057b61b09d6efc218db240ad171bd",
".git/objects/ce/6c48a6ea20b054fab9d8072d720d41bbebb423": "1cf712782f95b6dc4ad0bb76173ee3d8",
".git/objects/79/219d130a90e17b1f035eae5031b34765a5736f": "ecc061ab9d58b4eec8294f42296b6c9e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/188f5cb2815547a5fb785f220910324ad8aa65": "4158e15d340e315750b92098952bd603",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/44be1b8f327f136da1f2a0cd0cd6af22319f72": "48d0e3442b8c4446b55718fccac39327",
".git/objects/47/69f3711bdf1772d4621b3805f41d23d6ea7fe5": "28df9c1ca7775a1db9bde548687253cf",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8deab8ee9bfc8f03562785427d69ab09",
".git/logs/refs/heads/master": "d0d97ea7a514d7b92fc8f720f57a03be",
".git/logs/refs/remotes/origin/master": "0f23a2977b4b22ec0ffbe8898acc925a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e54f16a444d2aa8723b844a4f99fb2a1",
".git/refs/remotes/origin/master": "e54f16a444d2aa8723b844a4f99fb2a1",
".git/index": "61a2803e46e061663143d16b0651a98e",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "4dcc6148a06927bc5f3690820afcc0b5",
"assets/AssetManifest.json": "97a5db485c4d44fbf80fbb31a3530b17",
"assets/NOTICES": "1f7c8a5aadad9da00bd30415bbee99e7",
"assets/FontManifest.json": "9be7013eec97227b74835fad8cff8738",
"assets/AssetManifest.bin.json": "d7d69e0eec1c8cd734a4818c9e2a8fc8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7b619c889964e8354b573c1076fd6068",
"assets/fonts/MaterialIcons-Regular.otf": "0a2b411f5d301b727a23ab182669a498",
"assets/assets/icons/draw.svg": "ed9193b03d09b5712bbf7fecf9792ee5",
"assets/assets/icons/text-Italic.svg": "4c2d75572eada3ec0e4a46b938ad7f40",
"assets/assets/icons/books.svg": "4f1872c8de57786c765837608350c790",
"assets/assets/icons/text-clear-style.svg": "48faf15d4e4a55ffa9eac7883ddffd41",
"assets/assets/icons/text-bold.svg": "aba4c129ca3b26a932a399a2dd20b997",
"assets/assets/icons/list-bullet.svg": "f2d13ef0726e3552cfb90faf312c3134",
"assets/assets/icons/add.svg": "86e068f160c91c87aa6977dc5fb91108",
"assets/assets/icons/google.svg": "72218b5c4602261f64bd1f1ee91b6060",
"assets/assets/icons/more.svg": "9e597193e4f1e29f355fbc8d4d7f5ecf",
"assets/assets/icons/text-underline.svg": "232517ba835b749471adc5b4176b9e4a",
"assets/assets/icons/write.svg": "6ebb87378c3b3685e4b24dab43e21380",
"assets/assets/icons/list-paragraph.svg": "fdab7ad23a3ecff948657a23aab20a5f",
"assets/assets/icons/text-alinment.svg": "2f25979a2e9d753a46bcc69471bb034c",
"assets/assets/fonts/inter/800.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/inter/900.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/inter/300.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/inter/100.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/fonts/inter/500.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/inter/700.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/inter/200.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/inter/600.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/inter/400.ttf": "ea5879884a95551632e9eb1bba5b2128",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
