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
    "revision": "f68dfe6e1870f131c8252691c7fb9105"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "e3b20fc5a6e1adecc5fc4c545b96a856"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "e8b1b388795d0bd9d952a78c8a23a22c"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "45f9b47aadaf2692de2b44f338e0fa64"
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
    "url": "assets/api_QrcodeStream.md.oCs7QEQa.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.oCs7QEQa.lean.js",
    "revision": null
  }, {
    "url": "assets/app.tG2EtnVl.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.Mcn76kbd.js",
    "revision": null
  }, {
    "url": "assets/chunks/camera.2lffVkNm.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.mHXEP_CY.js",
    "revision": null
  }, {
    "url": "assets/chunks/QrcodeStream.vue_vue_type_script_setup_true_lang.qt1LUsl7.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.yJUh4Fxj.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.e6YLBt5H.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.AO3xi0Ih.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.PDo8zrjF.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.PDo8zrjF.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_FullDemo.md.6f80TxFO.js",
    "revision": null
  }, {
    "url": "assets/demos_FullDemo.md.6f80TxFO.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.uScGpYsO.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.uScGpYsO.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.Q8fPbPTU.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.Q8fPbPTU.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.dW7lNN2U.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.dW7lNN2U.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.th0oC-oC.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.th0oC-oC.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.OW4rZ-bh.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.OW4rZ-bh.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.DokZXpC3.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.DokZXpC3.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.ERdoM9Zs.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.ERdoM9Zs.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.aj3bcCc0.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.aj3bcCc0.lean.js",
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
    "revision": "a89c2182726607f5a54c6670caf35960"
  }, {
    "url": "demos/FullDemo.html",
    "revision": "90c8f2515bf93d2b1d155a51477cfefc"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "ed361e307b3273c7fc9408634fe87f07"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "4ca316abef0f310c6d85635251f6c9c2"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "a0e19c98c47682de99b9506671f4b6d4"
  }, {
    "url": "demos/Simple.html",
    "revision": "e25da9aeb51ce3e41019d8458ad45b9c"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "afd539296acdf154419ba75239a21176"
  }, {
    "url": "demos/Torch.html",
    "revision": "1d5a54c511234f4c652121e18ee4ff64"
  }, {
    "url": "demos/Upload.html",
    "revision": "4ee01cc53aa2ac69af23f4daa06ead69"
  }, {
    "url": "demos/Validate.html",
    "revision": "ba7fa918fe38fd636f077514ea1f8d95"
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
    "revision": "8ab967eefe7cd77f16293e95f40f2006"
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
