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
    "revision": "6ca0edb250b276b737b0f62cd93ed0f2"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "c076a77f4bac65457cf81a3363836bdf"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "c867aea48ee4315043514c8c950ed5c9"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "342877c71182e8be3616ff38fa2c0233"
  }, {
    "url": "assets/api_QrcodeCapture.md.0e392115.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeCapture.md.0e392115.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.0bd1f7d7.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.0bd1f7d7.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.6d49627e.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.6d49627e.lean.js",
    "revision": null
  }, {
    "url": "assets/app.fbece594.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.2dd1751a.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.9a6548f5.js",
    "revision": null
  }, {
    "url": "assets/chunks/index.90c5ebaf.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.e02d9c5e.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.dce4eb2d.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.8ea41b7b.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.f6a40222.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.f6a40222.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.ccb1c598.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.ccb1c598.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.7f6bd1d1.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.7f6bd1d1.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.8e8ea295.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.8e8ea295.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.527e0c25.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.527e0c25.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.b3a2a941.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.b3a2a941.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.759e2fb3.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.759e2fb3.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.b0b9e218.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.b0b9e218.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.bddf6668.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.bddf6668.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.e6c90a22.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.e6c90a22.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.d483b851.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.d483b851.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.ff716424.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.ff716424.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.e642f0fd.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.e642f0fd.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.dd642809.js",
    "revision": null
  }, {
    "url": "assets/index.md.dd642809.lean.js",
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
    "url": "assets/style.ac1366dc.css",
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
    "revision": "6b8b6a34d76bc120c9d80e793148d2e4"
  }, {
    "url": "demos/CustomTrackingWithFormats.html",
    "revision": "ea7d0d4d2dd7bc7bb315741990055aa1"
  }, {
    "url": "demos/DeviceId.html",
    "revision": "072692e07284951ae4fe7746899af681"
  }, {
    "url": "demos/DragDrop.html",
    "revision": "dbef731971a194c1e3eeb324ef5d543a"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "8cc44daa9d59e767e6d8fbf21fba742f"
  }, {
    "url": "demos/HandleErrors.html",
    "revision": "7d43ec5d4eb63f0d6082413b8af578cd"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "358bb51a46a9c127bbf95a9a232a9e61"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "207f58738ef9ca1e8fc1530f8ad35041"
  }, {
    "url": "demos/Simple.html",
    "revision": "55a1582fa5a01f90d2a83175c74b03a2"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "2ce5905f58fac467f34633ca9e6f61a7"
  }, {
    "url": "demos/Torch.html",
    "revision": "e319243e2a657a12300fafc11392c204"
  }, {
    "url": "demos/Upload.html",
    "revision": "e2dd45f92d8873aa55175d2bc933fef5"
  }, {
    "url": "demos/Validate.html",
    "revision": "69298e9f3acda6d265ac162c770466b0"
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
    "revision": "811de025a44e3128f599cbf30e58668c"
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
