/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-ab7aa862'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "cfc7a4e8475bcb82b549f5236edfffe8"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "d630fa84718ba8efa545ef141e172ba7"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "4b56aa3032095fd046dee22540cf970e"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "0c193451770824c611519921a01c51d6"
  }, {
    "url": "assets/api_QrcodeCapture.md.4a945fa3.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeCapture.md.4a945fa3.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.28c567ff.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.28c567ff.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.67d9fcc5.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.67d9fcc5.lean.js",
    "revision": null
  }, {
    "url": "assets/app.9b540f95.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.5a0919fa.js",
    "revision": null
  }, {
    "url": "assets/chunks/camera.590ea3a8.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.9fcc70a7.js",
    "revision": null
  }, {
    "url": "assets/chunks/QrcodeStream.vue_vue_type_script_setup_true_lang.33523f55.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.e02d9c5e.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.4a29feee.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.5ae282a3.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.f6c0c19b.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.f6c0c19b.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.cfbe0b44.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.cfbe0b44.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.52b7ecae.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.52b7ecae.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.6001bac3.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.6001bac3.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.82c59e6a.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.82c59e6a.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.c768a491.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.c768a491.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.1ba53079.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.1ba53079.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.0d0aafc5.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.0d0aafc5.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.59c07c1a.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.59c07c1a.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.b573ea5d.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.b573ea5d.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.7e71a24d.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.7e71a24d.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.fcfa364b.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.fcfa364b.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.56b13d32.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.56b13d32.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.28833466.js",
    "revision": null
  }, {
    "url": "assets/index.md.28833466.lean.js",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic.ea42a392.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek-ext.4fbe9427.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek.8f4463c4.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin-ext.bd8920cc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin.bd3b6f56.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-vietnamese.6ce511fb.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic-ext.e75737ce.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic.5f2c6c8c.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek-ext.ab0619bc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek.d5a6d92a.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin-ext.0030eebd.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin.2ed14f66.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-vietnamese.14ce25a6.woff2",
    "revision": null
  }, {
    "url": "assets/style.462ead71.css",
    "revision": null
  }, {
    "url": "camera-switch.svg",
    "revision": "c966900237eef848d4aeb18b0ad64371"
  }, {
    "url": "checkmark.svg",
    "revision": "398fc16c5cbd6c20b529b76742c33942"
  }, {
    "url": "debug-memory-leak.html",
    "revision": "baffbefe1bde1d10f0c089b20f0cb9ed"
  }, {
    "url": "demos/CustomTracking.html",
    "revision": "c030cd358893d89fd4bf154018063885"
  }, {
    "url": "demos/CustomTrackingWithFormats.html",
    "revision": "650b055c41b62d31d35c5095e751d735"
  }, {
    "url": "demos/DeviceId.html",
    "revision": "c2026bc9fa0a5b01d06b8faa6abf92b1"
  }, {
    "url": "demos/DragDrop.html",
    "revision": "95ce777b79bf08db2b3e93285446020c"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "c5bf2e4cc0c266e1d7950b9525887fbf"
  }, {
    "url": "demos/HandleErrors.html",
    "revision": "ae1cd4185894a22da77cc7cfdb44529a"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "8a90011d7534e428f6ccec5edfb7a729"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "6708c7d67f32cf06b5347fec244ac3fa"
  }, {
    "url": "demos/Simple.html",
    "revision": "078beaa6bc756ebc1089bc41356ad9df"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "e15e8d6a3f8e7fe4d84c01da32662d9b"
  }, {
    "url": "demos/Torch.html",
    "revision": "b905b2d2d351b5335efa9f2a281bba17"
  }, {
    "url": "demos/Upload.html",
    "revision": "a165517d8bdf8e1364dbfdbd5de7d8a8"
  }, {
    "url": "demos/Validate.html",
    "revision": "f6cb5cdd153f9e8571b119856651648f"
  }, {
    "url": "flash-off.svg",
    "revision": "8b05f5dcd6712992a544b34520ec7262"
  }, {
    "url": "flash-on.svg",
    "revision": "23580871877110ec5e7dcd41efdbd07b"
  }, {
    "url": "fullscreen-exit.svg",
    "revision": "77f8bddd41a7894d1a00324ed9dcb8f9"
  }, {
    "url": "fullscreen.svg",
    "revision": "432c44f09de0b4e0f9e236fad9b8c7f9"
  }, {
    "url": "index.html",
    "revision": "83adbf4548a550cecc5e56cb42e54977"
  }, {
    "url": "logo.png",
    "revision": "5f0c1d6358641bc48207acb9fa0b6182"
  }, {
    "url": "pwa-192x192.png",
    "revision": "05431c417219f6c247a23488366a2b41"
  }, {
    "url": "pwa-512x512.png",
    "revision": "5e0a4893ebdd02af95cf73c7b7759ddd"
  }, {
    "url": "registerSW.js",
    "revision": "2acda7f8afc7fc2d992b71c201491acd"
  }, {
    "url": "select-camera-demo.html",
    "revision": "7317a2464378a9402a9a1051fcab6280"
  }, {
    "url": "simple-demo.html",
    "revision": "d2e0337bc830c36ac24089933500e897"
  }, {
    "url": "pwa-192x192.png",
    "revision": "05431c417219f6c247a23488366a2b41"
  }, {
    "url": "pwa-512x512.png",
    "revision": "5e0a4893ebdd02af95cf73c7b7759ddd"
  }, {
    "url": "manifest.webmanifest",
    "revision": "102717d43422a64c9903adda0fdce9f5"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
