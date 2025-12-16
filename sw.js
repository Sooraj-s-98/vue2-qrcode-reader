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
    "revision": "c96b6fba8f097d7c99d3cba167c7674b"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "f526877fb1572f3ad4da14021364d6cd"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "cb7a36ba1d1e15881b94d028ef3ae95f"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "5a726b63b8f82269a644c2d09b2a587c"
  }, {
    "url": "assets/api_QrcodeCapture.md.df55ae48.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeCapture.md.df55ae48.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.8ad7c868.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.8ad7c868.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.186f766e.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.186f766e.lean.js",
    "revision": null
  }, {
    "url": "assets/app.d491afe8.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.d276a456.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.ffe7611b.js",
    "revision": null
  }, {
    "url": "assets/chunks/index.cf60a0d7.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.e02d9c5e.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.15164788.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.a4cdc53a.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.10ef0fa6.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.10ef0fa6.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.43b2d24e.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.43b2d24e.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.6303f8c9.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.6303f8c9.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.0842cac3.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.0842cac3.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.eed9dfc2.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.eed9dfc2.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.17445f0b.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.17445f0b.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.8724aa68.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.8724aa68.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.a89f6787.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.a89f6787.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.bdf2f190.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.bdf2f190.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.78b8df54.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.78b8df54.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.40a3fe4e.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.40a3fe4e.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.dd63426d.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.dd63426d.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.13f1d490.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.13f1d490.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.40bc9a5b.js",
    "revision": null
  }, {
    "url": "assets/index.md.40bc9a5b.lean.js",
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
    "url": "assets/style.264577ca.css",
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
    "revision": "a47d2eb221b454bbb81beefe97fcc316"
  }, {
    "url": "demos/CustomTrackingWithFormats.html",
    "revision": "57598890ab9bd61fe4f51f4ca57cca06"
  }, {
    "url": "demos/DeviceId.html",
    "revision": "59e8ca47b23b5316a9ef3f4b586d5b39"
  }, {
    "url": "demos/DragDrop.html",
    "revision": "5d702cb7ec1cf84582b79a16ba6e9b91"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "326801dca7391fb5598055d662813048"
  }, {
    "url": "demos/HandleErrors.html",
    "revision": "f7e0ab217c3094e2c62178d5a3783f4c"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "854b5cbf6ccb14161acb4e8c102fc556"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "e091415e0c7e1f6d4576ad2fa86f93c8"
  }, {
    "url": "demos/Simple.html",
    "revision": "75cf368d87445bf1c49d709271e52c19"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "db29873a911bbf4a0f3774b651435b72"
  }, {
    "url": "demos/Torch.html",
    "revision": "aa49d7ff859aed20dbf39acaa1bf2bf0"
  }, {
    "url": "demos/Upload.html",
    "revision": "062576b71e06eb46a036e29d5e039f24"
  }, {
    "url": "demos/Validate.html",
    "revision": "41bfcad90a11230f5839a78196b2002a"
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
    "revision": "aa08aaf358f3de23189de16f7927e52e"
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
    "revision": "1872c500de691dce40960bb85481de07"
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
    "revision": "8220604414985a41ead8e83180fa1c1c"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
