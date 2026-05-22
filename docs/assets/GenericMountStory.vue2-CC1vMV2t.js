const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tokens.story-BfoEevI_.js","assets/vendor-DOvsOfdG.js","assets/_plugin-vue_export-helper-1tPrXgE0.js","assets/useScrollShrink.story-pWLmDSEs.js","assets/useScrollShrink-ngi48j70.js","assets/c-brand-logo.story-BBNNrl4x.js","assets/c-layout-blog.story-CqOPVB_h.js","assets/BGridArea-DDEGt7x3.js","assets/c-layout-default.story-CL79Twg4.js","assets/m-header-logo-nav.story-DJBM_F12.js","assets/HomeView.vue-CGr6EdBQ.js","assets/story-D72WtQxJ.js","assets/StoryView.vue-BBNdpDr6.js","assets/MobileOverlay.vue2-CyiNg1BZ.js","assets/BaseEmpty.vue-DbSqllGj.js","assets/state-DZ539noN.js"])))=>i.map(i=>d[i]);
import { z as defineAsyncComponent, q as createRouter, x as createWebHistory, w as createWebHashHistory, at as useDark, aD as useToggle, aG as watch, O as markRaw, a7 as reactive, B as defineComponent, a9 as ref, aH as watchEffect, a1 as openBlock, j as createBlock, P as mergeProps, aj as resolveDynamicComponent, l as createCommentVNode } from "./vendor-DOvsOfdG.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/plantillas/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./tokens.story-BfoEevI_.js"), true ? __vite__mapDeps([0,1,2]) : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./useScrollShrink.story-pWLmDSEs.js"), true ? __vite__mapDeps([3,1,4,2]) : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./c-brand-logo.story-BBNNrl4x.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./c-layout-blog.story-CqOPVB_h.js"), true ? __vite__mapDeps([6,7,1,2]) : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./c-layout-default.story-CL79Twg4.js"), true ? __vite__mapDeps([8,7,1,2]) : void 0));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./m-header-logo-nav.story-DJBM_F12.js"), true ? __vite__mapDeps([9,1,7,4,2]) : void 0));
let files = [
  { "id": "src-reference-tokens-story-vue", "path": ["Reference", "Tokens"], "filePath": "src/reference/tokens.story.vue", "story": { "id": "src-reference-tokens-story-vue", "title": "Tokens", "layout": { "type": "single", "iframe": false }, "docsOnly": false, "variants": [{ "id": "src-reference-tokens-story-vue-0", "title": "Design tokens" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-reference-tokens-story-vue-ndLKApfD.js"), true ? [] : void 0) },
  { "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue", "path": ["Composables", "useScrollShrink"], "filePath": "src/composables/use-scroll-shrink/useScrollShrink.story.vue", "story": { "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue", "title": "useScrollShrink", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue-0", "title": "Default" }, { "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue-1", "title": "Con start offset (empieza a los 100px de scroll)" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-composables-use-scroll-shrink-usescrollshrink-story-vue-YvTz8MmY.js"), true ? [] : void 0) },
  { "id": "src-components-brand-logo-c-brand-logo-story-vue", "path": ["Components", "c-brand-logo"], "filePath": "src/components/brand/logo/c-brand-logo.story.vue", "story": { "id": "src-components-brand-logo-c-brand-logo-story-vue", "title": "c-brand-logo", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-brand-logo-c-brand-logo-story-vue-0", "title": "Default — imagen + texto" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-1", "title": "image-only — sin texto" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-2", "title": "image-only — slot ignorado" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-3", "title": "text-image — texto izquierda" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-4", "title": "image-top — imagen arriba" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-5", "title": "text-top — texto arriba" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-6", "title": "Como enlace" }] }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-brand-logo-c-brand-logo-story-vue-C09u6oCt.js"), true ? [] : void 0) },
  { "id": "src-components-layout-blog-c-layout-blog-story-vue", "path": ["Components", "c-layout-blog"], "filePath": "src/components/layout/blog/c-layout-blog.story.vue", "story": { "id": "src-components-layout-blog-c-layout-blog-story-vue", "title": "c-layout-blog", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-layout-blog-c-layout-blog-story-vue-0", "title": "Default — contenido corto" }, { "id": "src-components-layout-blog-c-layout-blog-story-vue-1", "title": "Contenido largo — footer fuera del viewport" }] }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-layout-blog-c-layout-blog-story-vue-D3q0dYjp.js"), true ? [] : void 0) },
  { "id": "src-components-layout-default-c-layout-default-story-vue", "path": ["Components", "c-layout-default"], "filePath": "src/components/layout/default/c-layout-default.story.vue", "story": { "id": "src-components-layout-default-c-layout-default-story-vue", "title": "c-layout-default", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-layout-default-c-layout-default-story-vue-0", "title": "Default" }] }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-layout-default-c-layout-default-story-vue-x_beOOXP.js"), true ? [] : void 0) },
  { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue", "path": ["Modules", "m-header-logo-nav"], "filePath": "src/modules/header/logo-nav/m-header-logo-nav.story.vue", "story": { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue", "title": "m-header-logo-nav", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue-0", "title": "Default" }, { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue-1", "title": "background dark" }, { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue-2", "title": "shrink" }] }, "supportPluginId": "vue3", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-modules-header-logo-nav-m-header-logo-nav-story-vue-CPMktWVf.js"), true ? [] : void 0) }
];
let tree = [{ "title": "Components", "children": [{ "title": "c-brand-logo", "index": 2 }, { "title": "c-layout-blog", "index": 3 }, { "title": "c-layout-default", "index": 4 }] }, { "title": "Composables", "children": [{ "title": "useScrollShrink", "index": 1 }] }, { "title": "Modules", "children": [{ "title": "m-header-logo-nav", "index": 5 }] }, { "title": "Reference", "children": [{ "title": "Tokens", "index": 0 }] }];
const Logo_landscape = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CiAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNiIgZmlsbD0iIzFhMWExYSIvPgogIDx0ZXh0IHg9IjE2IiB5PSIyMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIj5QPC90ZXh0Pgo8L3N2Zz4K";
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "C:/Users/oscar/Documents/__WORK/plantillas/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "C:/Users/oscar/Documents/__WORK/plantillas/docs", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Plantillas", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "/src/logo.svg", "landscape": "/src/logo.svg" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [], "setupFile": "/src/histoire-setup.js", "base": "/plantillas/" };
const logos = { square: Logo_landscape };
const histoireConfig = config;
const customLogos = logos;
const base = "/plantillas/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-CGr6EdBQ.js"), true ? __vite__mapDeps([10,11,1]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-BBNdpDr6.js"), true ? __vite__mapDeps([12,1,11,13,14,15]) : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
function mapFile(file, existingFile) {
  let result;
  {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-DOvsOfdG.js").then((n) => n.c), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-DOvsOfdG.js").then((n) => n.d), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  _sfc_main as a,
  base as b,
  clientSupportPlugins as c,
  customLogos as d,
  tree as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
