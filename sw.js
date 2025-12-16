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
    "revision": "e1302df539a1cae24eb4ce4b3279fa4f"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "69dda82f6ea1c494de462bebe47a81e3"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "d62010527c3e9c71d932872d0f856d1b"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "bab1ae40c659f4e73aba90b59e5d20b9"
  }, {
    "url": "assets/api_QrcodeCapture.md.iwH53kMe.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeCapture.md.iwH53kMe.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.x3vJz86C.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.x3vJz86C.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.0yd6rbui.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.0yd6rbui.lean.js",
    "revision": null
  }, {
    "url": "assets/app.q1G5vEUp.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.nwL2Oa1e.js",
    "revision": null
  }, {
    "url": "assets/chunks/camera.jRlxdp9g.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.KXtzUc-v.js",
    "revision": null
  }, {
    "url": "assets/chunks/QrcodeStream.vue_vue_type_script_setup_true_lang.ZK9ZA_-L.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.yJUh4Fxj.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.TyEYLWuV.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox._g8MWMQs.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.0ZllG1Il.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.0ZllG1Il.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.Sr6AISz2.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.Sr6AISz2.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.iwg-lMtB.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.iwg-lMtB.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.QOt6WJCP.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.QOt6WJCP.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.K3uFnkNB.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.K3uFnkNB.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.klW8xR1r.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.klW8xR1r.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.9eiRM12p.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.9eiRM12p.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.vbTVNOAp.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.vbTVNOAp.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.uL9gPjw1.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.uL9gPjw1.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.jJhgBuiv.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.jJhgBuiv.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.5fMpk4XO.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.5fMpk4XO.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md._UBcAWcQ.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md._UBcAWcQ.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.yFXS2yXA.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.yFXS2yXA.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.UpZ6T0we.js",
    "revision": null
  }, {
    "url": "assets/index.md.UpZ6T0we.lean.js",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic-ext.OVycGSDq.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic.-nLMcIwj.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek-ext.hznxWNZO.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek.PSfer2Kc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin-ext.RnFly65-.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin.27E69YJn.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-vietnamese.xzQHe1q1.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic-ext.8T9wMG5w.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic.jIZ9REo5.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek-ext.9JiNzaSO.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek.Cb5wWeGA.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin-ext.GZWE-KO4.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin.bvIUbFQP.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-vietnamese.paY3CzEB.woff2",
    "revision": null
  }, {
    "url": "assets/style.BcCF0g33.css",
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
    "revision": "f8bf1a7b4c6d346b540e325ceb09e103"
  }, {
    "url": "demos/CustomTrackingWithFormats.html",
    "revision": "d98d35a54bb705095324fedad5bd8295"
  }, {
    "url": "demos/DeviceId.html",
    "revision": "fbc1be31db793bab819c0876fe1b6ec2"
  }, {
    "url": "demos/DragDrop.html",
    "revision": "d8169a111de7a9e11db9bc534318035d"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "68e2b643c405b258a89434f79a911967"
  }, {
    "url": "demos/HandleErrors.html",
    "revision": "fdc8bca1866930a2c5795262aaec9085"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "a5b61cf044b5eb46c9f2789ae31fb285"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "a8a6103b82f91864ac73b2ff3c0878c6"
  }, {
    "url": "demos/Simple.html",
    "revision": "1272e41728e16ce4b9b3bce3648c5960"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "161a87428f6c7c3c1603b7d6b051e3a4"
  }, {
    "url": "demos/Torch.html",
    "revision": "d7bc132d68148cc737b30bf93eab31f3"
  }, {
    "url": "demos/Upload.html",
    "revision": "16a635081505883c1ce1a01ad1fe19df"
  }, {
    "url": "demos/Validate.html",
    "revision": "25bcd040905dba73dca4a97fe4fcddb0"
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
    "revision": "f000061f4a1cb414f08bcc246c5c6485"
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
    "revision": "caa12e13f97000bc06e565e64bb8bd0f"
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
