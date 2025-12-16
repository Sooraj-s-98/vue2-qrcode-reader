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
    "revision": "1798e9e16cbf9cfd314495e61eedf903"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "4fd940e2102f18c6d687441d71ae9c93"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "65f22abdc7310eb4483b89dc1fcbbdc3"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "eb6606101d724afe8d77051222007299"
  }, {
    "url": "assets/api_QrcodeCapture.md.3082f91d.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeCapture.md.3082f91d.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.87efb291.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.87efb291.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.70e89d95.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.70e89d95.lean.js",
    "revision": null
  }, {
    "url": "assets/app.f10f2896.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.242d499d.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.830fc92d.js",
    "revision": null
  }, {
    "url": "assets/chunks/index.05283337.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.e02d9c5e.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.fab0e938.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.de68ef56.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.aaa261d5.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.aaa261d5.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.2cad22f0.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.2cad22f0.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.bf47377e.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.bf47377e.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.7073a001.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.7073a001.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.7f129f8f.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.7f129f8f.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.6c7610c5.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.6c7610c5.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.04be3698.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.04be3698.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.3ce8bdaa.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.3ce8bdaa.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.978fb091.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.978fb091.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.8746e76f.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.8746e76f.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.cfcdda26.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.cfcdda26.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.2386e50e.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.2386e50e.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.9876eda2.js",
    "revision": null
  }, {
    "url": "assets/index.md.9876eda2.lean.js",
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
    "url": "assets/style.cdd93577.css",
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
    "revision": "520e0798847665cba015d021862a15be"
  }, {
    "url": "demos/DeviceId.html",
    "revision": "9ca928bf2e2e3411dfe7cde240dd6462"
  }, {
    "url": "demos/DragDrop.html",
    "revision": "43a655bc403aa6cce441bf06482bcc03"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "70d9d550ef99ac89f5dbc948e945998c"
  }, {
    "url": "demos/HandleErrors.html",
    "revision": "54f2d9c64308c9ad45c9a22a5cf6a7a3"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "52e0f847db6ce89494c295a99e9e839a"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "cd37d361377a6e8d0ad9a84b00b48b3f"
  }, {
    "url": "demos/Simple.html",
    "revision": "4b056554aa5d6d190a1144a3adb993b5"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "f5e04d49bdd8bd80e0552ff83ac0884f"
  }, {
    "url": "demos/Torch.html",
    "revision": "eeb95dc098bb34076377fa57f86d3803"
  }, {
    "url": "demos/Upload.html",
    "revision": "edf1721e7c00a96ef8a8e4edfcc9e1fa"
  }, {
    "url": "demos/Validate.html",
    "revision": "22674f3c4164d646be5123f3a2fa1596"
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
    "revision": "da8e829bd601efc8c016bea08da916cd"
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
