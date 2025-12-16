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
    "revision": "2120b57589c6913cf2c2881402ee1662"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "40f0dda952c132c4b93745e92058bdd4"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "bdb5257963307e7763ea8845d2b129e1"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "b896f77ca84e3bfe7caf4fad31e5b825"
  }, {
    "url": "assets/api_QrcodeCapture.md.PsTfZWQV.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeCapture.md.PsTfZWQV.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.dyQ8viWZ.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.dyQ8viWZ.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.e6YkpBu9.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.e6YkpBu9.lean.js",
    "revision": null
  }, {
    "url": "assets/app.yxvXI2jY.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.TYq_wVf7.js",
    "revision": null
  }, {
    "url": "assets/chunks/camera.3utEv5Aa.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.mHXEP_CY.js",
    "revision": null
  }, {
    "url": "assets/chunks/QrcodeStream.vue_vue_type_script_setup_true_lang.ZhUkZzfP.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.yJUh4Fxj.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.7QMy6jt3.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.ZpVaDZXY.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.vLZS-9KG.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.vLZS-9KG.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_FullDemo.md.GCuXOojn.js",
    "revision": null
  }, {
    "url": "assets/demos_FullDemo.md.GCuXOojn.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.1hOK2EC7.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.1hOK2EC7.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.78Rc_cZN.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.78Rc_cZN.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.Ff63C96q.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.Ff63C96q.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.th0oC-oC.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.th0oC-oC.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.anYt9C35.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.anYt9C35.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.u3c7hJzP.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.u3c7hJzP.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.VwHN4or-.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.VwHN4or-.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.ogdMXs9R.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.ogdMXs9R.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.IyM1TcnC.js",
    "revision": null
  }, {
    "url": "assets/index.md.IyM1TcnC.lean.js",
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
    "url": "assets/style.M3vSBS25.css",
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
    "url": "demos/DragDrop.html",
    "revision": "a6b45ee688059b81cf67ba9f81198d27"
  }, {
    "url": "demos/FullDemo.html",
    "revision": "fe482a929d29cea238992615b2c1df6b"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "0d4d55929ae685d7faf530a44065220c"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "957a702c8afd176cc404c8c3fb563f87"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "4224ac2a922b2527ed80961a1b471e7f"
  }, {
    "url": "demos/Simple.html",
    "revision": "40176da51e4b02c20ae6c15569a5c8c6"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "9f61416f2ee86942a720a4f56df6fa3e"
  }, {
    "url": "demos/Torch.html",
    "revision": "3ee5d89878277b069a0cec2c074d6ff0"
  }, {
    "url": "demos/Upload.html",
    "revision": "370c6c70445ecfa3b18d28d7c170af10"
  }, {
    "url": "demos/Validate.html",
    "revision": "573ab75b29bab7e5f2038c769ef91bba"
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
    "revision": "d4731bd3be5b721308c0f7a5006ca94a"
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
