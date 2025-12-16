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
    "revision": "af413a9891fd0da6d70376535e05e60e"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "b6840807cf0dc51070ed649bc132d4d8"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "c8ea5911c1455ccc2985d9c1f362e320"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "911c3b53fbacc0223740f6eb32b302f3"
  }, {
    "url": "assets/api_QrcodeCapture.md.bZhsK1BQ.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeCapture.md.bZhsK1BQ.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.Di7fS2zU.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.Di7fS2zU.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.Xcb7Nkys.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.Xcb7Nkys.lean.js",
    "revision": null
  }, {
    "url": "assets/app.dx793Crd.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.oNtW3Yxq.js",
    "revision": null
  }, {
    "url": "assets/chunks/camera.tNqVZ9MC.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.ESQuMJT-.js",
    "revision": null
  }, {
    "url": "assets/chunks/QrcodeStream.vue_vue_type_script_setup_true_lang.5othEivG.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.yJUh4Fxj.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.yJlnjJMT.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.068dPddq.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.L3GYhJ3P.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTracking.md.L3GYhJ3P.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.1I9pshWd.js",
    "revision": null
  }, {
    "url": "assets/demos_CustomTrackingWithFormats.md.1I9pshWd.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.O-KaIhDa.js",
    "revision": null
  }, {
    "url": "assets/demos_DeviceId.md.O-KaIhDa.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.yQ3N5VNW.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.yQ3N5VNW.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.Zi5jLW6p.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.Zi5jLW6p.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.LhEpD2QG.js",
    "revision": null
  }, {
    "url": "assets/demos_HandleErrors.md.LhEpD2QG.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.tW_y4tSO.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.tW_y4tSO.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.kwsWFzgD.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.kwsWFzgD.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.LgMQY1T2.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.LgMQY1T2.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.DqP67uDH.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.DqP67uDH.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.WIyGxf-y.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.WIyGxf-y.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.18LlR1sS.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.18LlR1sS.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.bu_-L2zl.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.bu_-L2zl.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.T6KGgXZ6.js",
    "revision": null
  }, {
    "url": "assets/index.md.T6KGgXZ6.lean.js",
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
    "url": "assets/style.8673J2sb.css",
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
    "revision": "bdb1bf4e7b287d812800012166aa9306"
  }, {
    "url": "demos/CustomTrackingWithFormats.html",
    "revision": "ad817ec6d32c2b5f480aa861f2ec412f"
  }, {
    "url": "demos/DeviceId.html",
    "revision": "3a237cfe0dea5e9cf1782b7ccdd82b05"
  }, {
    "url": "demos/DragDrop.html",
    "revision": "33b8e550b648c4c2d102bbd00bf41305"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "bb9a51b298d0ba3fcfa12b05304c69ed"
  }, {
    "url": "demos/HandleErrors.html",
    "revision": "631f93bd0fc814372deeed057fc9c619"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "e4266e73fec04b49b44aae991c4b4767"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "efe72aa40bfe6bc6cbb6c587766fc4b0"
  }, {
    "url": "demos/Simple.html",
    "revision": "73867ee809e2a95d7bc21277cf7fb4a0"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "1ff6cc5176c77fa19e3164f432b3db94"
  }, {
    "url": "demos/Torch.html",
    "revision": "30994d5beb67983bfa1b7c3ae7c640fd"
  }, {
    "url": "demos/Upload.html",
    "revision": "df45117c04716b31efcf2b5bea09cedf"
  }, {
    "url": "demos/Validate.html",
    "revision": "745726af42d0765374d344aac398d66d"
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
    "revision": "881d97adec9cd90f95117b1a8fe9ad7f"
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
    "revision": "8220604414985a41ead8e83180fa1c1c"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
