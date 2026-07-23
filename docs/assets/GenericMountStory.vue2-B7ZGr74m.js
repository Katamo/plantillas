const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tokens.story-eMTYF8pg.js","assets/vendor-DbHuLTxc.js","assets/_plugin-vue_export-helper-1tPrXgE0.js","assets/useMultiSelection.story-JAkTwb5w.js","assets/useMultiSelection-CmChJsos.js","assets/useScrollShrink.story-B1UdAhsS.js","assets/useScrollShrink-D1bK8XIA.js","assets/useOptionalModel.story-iaS71XWx.js","assets/useOptionalModel-CSCs5AM0.js","assets/m-header-logo-nav.story-yvq8UMR-.js","assets/BGridArea-C4OJQXLP.js","assets/m-nav-drawer.story-Bw--FxtL.js","assets/c-close-button-DDTDXimW.js","assets/c-brand-logo.story-2wC_5iwR.js","assets/c-data-table.story-CKx8ABbH.js","assets/c-data-table-D7LJlutG.js","assets/m-data-table.story-BsjGCUEx.js","assets/c-section-heading.story-D2Q41zle.js","assets/c-layout-blog.story-DPqKfFJl.js","assets/c-layout-floating-header.story-D87dMxPC.js","assets/c-layout-default.story-GV-ACM38.js","assets/c-close-button.story-BzMw9rqs.js","assets/c-hamburger.story-DE55FBgd.js","assets/HomeView.vue-B9khDv7q.js","assets/story-DksUWbPM.js","assets/StoryView.vue-D8ztsuqw.js","assets/MobileOverlay.vue2-GD1JuFoH.js","assets/BaseEmpty.vue-DtQTcYWo.js","assets/state-BNgT5sZD.js"])))=>i.map(i=>d[i]);
import { G as defineAsyncComponent, t as createRouter, C as createWebHistory, B as createWebHashHistory, aE as useDark, aP as useToggle, aS as watch, W as markRaw, ah as reactive, H as defineComponent, aj as ref, aU as watchEffect, ab as openBlock, m as createBlock, X as mergeProps, at as resolveDynamicComponent, o as createCommentVNode } from "./vendor-DbHuLTxc.js";
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
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./tokens.story-eMTYF8pg.js"), true ? __vite__mapDeps([0,1,2]) : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./useMultiSelection.story-JAkTwb5w.js"), true ? __vite__mapDeps([3,1,4,2]) : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./useScrollShrink.story-B1UdAhsS.js"), true ? __vite__mapDeps([5,1,6,2]) : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./useOptionalModel.story-iaS71XWx.js"), true ? __vite__mapDeps([7,1,8,2]) : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./m-header-logo-nav.story-yvq8UMR-.js"), true ? __vite__mapDeps([9,1,10,6,2]) : void 0));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./m-nav-drawer.story-Bw--FxtL.js"), true ? __vite__mapDeps([11,1,12,2]) : void 0));
const Comp6 = defineAsyncComponent(() => __vitePreload(() => import("./c-brand-logo.story-2wC_5iwR.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const Comp7 = defineAsyncComponent(() => __vitePreload(() => import("./c-data-table.story-CKx8ABbH.js"), true ? __vite__mapDeps([14,1,15,8,4,2]) : void 0));
const Comp8 = defineAsyncComponent(() => __vitePreload(() => import("./m-data-table.story-BsjGCUEx.js"), true ? __vite__mapDeps([16,1,15,8,4,2]) : void 0));
const Comp9 = defineAsyncComponent(() => __vitePreload(() => import("./c-section-heading.story-D2Q41zle.js"), true ? __vite__mapDeps([17,1,2]) : void 0));
const Comp10 = defineAsyncComponent(() => __vitePreload(() => import("./c-layout-blog.story-DPqKfFJl.js"), true ? __vite__mapDeps([18,10,1,2]) : void 0));
const Comp11 = defineAsyncComponent(() => __vitePreload(() => import("./c-layout-floating-header.story-D87dMxPC.js"), true ? __vite__mapDeps([19,1,2]) : void 0));
const Comp12 = defineAsyncComponent(() => __vitePreload(() => import("./c-layout-default.story-GV-ACM38.js"), true ? __vite__mapDeps([20,10,1,2]) : void 0));
const Comp13 = defineAsyncComponent(() => __vitePreload(() => import("./c-close-button.story-BzMw9rqs.js"), true ? __vite__mapDeps([21,12,1,2]) : void 0));
const Comp14 = defineAsyncComponent(() => __vitePreload(() => import("./c-hamburger.story-DE55FBgd.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
let files = [
  { "id": "src-reference-tokens-story-vue", "path": ["Reference", "Tokens"], "filePath": "src/reference/tokens.story.vue", "story": { "id": "src-reference-tokens-story-vue", "title": "Tokens", "layout": { "type": "single", "iframe": false }, "docsOnly": false, "variants": [{ "id": "src-reference-tokens-story-vue-0", "title": "Design tokens" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-reference-tokens-story-vue-ndLKApfD.js"), true ? [] : void 0) },
  { "id": "src-composables-use-multi-selection-usemultiselection-story-vue", "path": ["Composables", "useMultiSelection"], "filePath": "src/composables/use-multi-selection/useMultiSelection.story.vue", "story": { "id": "src-composables-use-multi-selection-usemultiselection-story-vue", "title": "useMultiSelection", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-composables-use-multi-selection-usemultiselection-story-vue-0", "title": "Lista con Ctrl/Shift" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-composables-use-multi-selection-usemultiselection-story-vue-BCNqgwRI.js"), true ? [] : void 0) },
  { "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue", "path": ["Composables", "useScrollShrink"], "filePath": "src/composables/use-scroll-shrink/useScrollShrink.story.vue", "story": { "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue", "title": "useScrollShrink", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue-0", "title": "Default" }, { "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue-1", "title": "Con start offset (empieza a los 100px de scroll)" }] }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-composables-use-scroll-shrink-usescrollshrink-story-vue-YvTz8MmY.js"), true ? [] : void 0) },
  { "id": "src-composables-use-optional-model-useoptionalmodel-story-vue", "path": ["Composables", "useOptionalModel"], "filePath": "src/composables/use-optional-model/useOptionalModel.story.vue", "story": { "id": "src-composables-use-optional-model-useoptionalmodel-story-vue", "title": "useOptionalModel", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-composables-use-optional-model-useoptionalmodel-story-vue-0", "title": "No controlado — estado interno" }, { "id": "src-composables-use-optional-model-useoptionalmodel-story-vue-1", "title": "Controlado — v-model del padre" }] }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-composables-use-optional-model-useoptionalmodel-story-vue-CfoAjF1K.js"), true ? [] : void 0) },
  { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue", "path": ["Modules", "m-header-logo-nav"], "filePath": "src/modules/header/logo-nav/m-header-logo-nav.story.vue", "story": { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue", "title": "m-header-logo-nav", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue-0", "title": "Default" }, { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue-1", "title": "background dark" }, { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue-2", "title": "shrink" }] }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-modules-header-logo-nav-m-header-logo-nav-story-vue-CPMktWVf.js"), true ? [] : void 0) },
  { "id": "src-modules-nav-drawer-m-nav-drawer-story-vue", "path": ["Modules", "m-nav-drawer"], "filePath": "src/modules/nav/drawer/m-nav-drawer.story.vue", "story": { "id": "src-modules-nav-drawer-m-nav-drawer-story-vue", "title": "m-nav-drawer", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-modules-nav-drawer-m-nav-drawer-story-vue-0", "title": "Interactivo" }] }, "supportPluginId": "vue3", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-modules-nav-drawer-m-nav-drawer-story-vue-BhL75hbA.js"), true ? [] : void 0) },
  { "id": "src-components-brand-logo-c-brand-logo-story-vue", "path": ["Components", "c-brand-logo"], "filePath": "src/components/brand/logo/c-brand-logo.story.vue", "story": { "id": "src-components-brand-logo-c-brand-logo-story-vue", "title": "c-brand-logo", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-brand-logo-c-brand-logo-story-vue-0", "title": "Default — imagen + texto" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-1", "title": "image-only — sin texto" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-2", "title": "image-only — slot ignorado" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-3", "title": "text-image — texto izquierda" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-4", "title": "image-top — imagen arriba" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-5", "title": "text-top — texto arriba" }, { "id": "src-components-brand-logo-c-brand-logo-story-vue-6", "title": "Como enlace" }] }, "supportPluginId": "vue3", "index": 6, component: Comp6, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-brand-logo-c-brand-logo-story-vue-C09u6oCt.js"), true ? [] : void 0) },
  { "id": "src-components-data-data-table-c-data-table-story-vue", "path": ["Components", "c-data-table"], "filePath": "src/components/data/data-table/c-data-table.story.vue", "story": { "id": "src-components-data-data-table-c-data-table-story-vue", "title": "c-data-table", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-data-data-table-c-data-table-story-vue-0", "title": "Default" }, { "id": "src-components-data-data-table-c-data-table-story-vue-1", "title": "Ordenación interna (sortable)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-2", "title": "Ordenación controlada (sort-mode external)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-3", "title": "Selección múltiple Ctrl/Shift (selectable)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-4", "title": "Columna de checkboxes + seleccionar todo (selection-column)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-5", "title": "Resize + reordenar columnas (drag&drop)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-6", "title": "Popover de columnas (botón derecho en cabecera)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-7", "title": "Drag&drop de filas (rows-draggable)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-8", "title": "Slots de celda y cabecera" }, { "id": "src-components-data-data-table-c-data-table-story-vue-9", "title": "Menú contextual de fila (slot row-menu)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-10", "title": "Loading" }, { "id": "src-components-data-data-table-c-data-table-story-vue-11", "title": "Empty (texto personalizado)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-12", "title": "Sticky header + scroll-to-top (200 filas)" }, { "id": "src-components-data-data-table-c-data-table-story-vue-13", "title": "[density=compact]" }, { "id": "src-components-data-data-table-c-data-table-story-vue-14", "title": "[striped]" }, { "id": "src-components-data-data-table-c-data-table-story-vue-15", "title": "[bordered]" }, { "id": "src-components-data-data-table-c-data-table-story-vue-16", "title": "Persistencia (storage-key)" }] }, "supportPluginId": "vue3", "index": 7, component: Comp7, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-data-data-table-c-data-table-story-vue-zX5b9JAP.js"), true ? [] : void 0) },
  { "id": "src-modules-data-data-table-m-data-table-story-vue", "path": ["Modules", "m-data-table"], "filePath": "src/modules/data/data-table/m-data-table.story.vue", "story": { "id": "src-modules-data-data-table-m-data-table-story-vue", "title": "m-data-table", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-modules-data-data-table-m-data-table-story-vue-0", "title": "Modo cliente (137 filas)" }, { "id": "src-modules-data-data-table-m-data-table-story-vue-1", "title": "Modo servidor (fetch simulado)" }, { "id": "src-modules-data-data-table-m-data-table-story-vue-2", "title": "pageSizeOptions personalizadas" }, { "id": "src-modules-data-data-table-m-data-table-story-vue-3", "title": "Con selección integrada" }, { "id": "src-modules-data-data-table-m-data-table-story-vue-4", "title": "Empty" }] }, "supportPluginId": "vue3", "index": 8, component: Comp8, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-modules-data-data-table-m-data-table-story-vue-B-kvOVBI.js"), true ? [] : void 0) },
  { "id": "src-components-content-section-heading-c-section-heading-story-vue", "path": ["Components", "c-section-heading"], "filePath": "src/components/content/section-heading/c-section-heading.story.vue", "story": { "id": "src-components-content-section-heading-c-section-heading-story-vue", "title": "c-section-heading", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-content-section-heading-c-section-heading-story-vue-0", "title": "Default — barra + título" }, { "id": "src-components-content-section-heading-c-section-heading-story-vue-1", "title": "Con índice" }, { "id": "src-components-content-section-heading-c-section-heading-story-vue-2", "title": "Con acciones" }, { "id": "src-components-content-section-heading-c-section-heading-story-vue-3", "title": "Sin barra, nivel h3" }] }, "supportPluginId": "vue3", "index": 9, component: Comp9, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-content-section-heading-c-section-heading-story-vue-xhiGOzSA.js"), true ? [] : void 0) },
  { "id": "src-components-layout-blog-c-layout-blog-story-vue", "path": ["Components", "c-layout-blog"], "filePath": "src/components/layout/blog/c-layout-blog.story.vue", "story": { "id": "src-components-layout-blog-c-layout-blog-story-vue", "title": "c-layout-blog", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-layout-blog-c-layout-blog-story-vue-0", "title": "Default — contenido corto" }, { "id": "src-components-layout-blog-c-layout-blog-story-vue-1", "title": "Contenido largo — footer fuera del viewport" }] }, "supportPluginId": "vue3", "index": 10, component: Comp10, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-layout-blog-c-layout-blog-story-vue-D3q0dYjp.js"), true ? [] : void 0) },
  { "id": "src-components-layout-floating-header-c-layout-floating-header-story-vue", "path": ["Components", "c-layout-floating-header"], "filePath": "src/components/layout/floating-header/c-layout-floating-header.story.vue", "story": { "id": "src-components-layout-floating-header-c-layout-floating-header-story-vue", "title": "c-layout-floating-header", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-layout-floating-header-c-layout-floating-header-story-vue-0", "title": "Default" }, { "id": "src-components-layout-floating-header-c-layout-floating-header-story-vue-1", "title": "variant: absolute" }, { "id": "src-components-layout-floating-header-c-layout-floating-header-story-vue-2", "title": "Header transparente" }] }, "supportPluginId": "vue3", "index": 11, component: Comp11, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-layout-floating-header-c-layout-floating-header-story-vue-BR0NHgQA.js"), true ? [] : void 0) },
  { "id": "src-components-layout-default-c-layout-default-story-vue", "path": ["Components", "c-layout-default"], "filePath": "src/components/layout/default/c-layout-default.story.vue", "story": { "id": "src-components-layout-default-c-layout-default-story-vue", "title": "c-layout-default", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-layout-default-c-layout-default-story-vue-0", "title": "Default" }] }, "supportPluginId": "vue3", "index": 12, component: Comp12, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-layout-default-c-layout-default-story-vue-x_beOOXP.js"), true ? [] : void 0) },
  { "id": "src-components-nav-close-button-c-close-button-story-vue", "path": ["Components", "c-close-button"], "filePath": "src/components/nav/close-button/c-close-button.story.vue", "story": { "id": "src-components-nav-close-button-c-close-button-story-vue", "title": "c-close-button", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-nav-close-button-c-close-button-story-vue-0", "title": "Default" }, { "id": "src-components-nav-close-button-c-close-button-story-vue-1", "title": "Label personalizado" }] }, "supportPluginId": "vue3", "index": 13, component: Comp13, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-nav-close-button-c-close-button-story-vue-DymAM8C9.js"), true ? [] : void 0) },
  { "id": "src-components-nav-hamburger-c-hamburger-story-vue", "path": ["Components", "c-hamburger"], "filePath": "src/components/nav/hamburger/c-hamburger.story.vue", "story": { "id": "src-components-nav-hamburger-c-hamburger-story-vue", "title": "c-hamburger", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-nav-hamburger-c-hamburger-story-vue-0", "title": "Default — cerrado" }, { "id": "src-components-nav-hamburger-c-hamburger-story-vue-1", "title": "Open — abierto" }, { "id": "src-components-nav-hamburger-c-hamburger-story-vue-2", "title": "Interactivo" }] }, "supportPluginId": "vue3", "index": 14, component: Comp14, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-nav-hamburger-c-hamburger-story-vue-COduaFTq.js"), true ? [] : void 0) }
];
let tree = [{ "title": "Components", "children": [{ "title": "c-brand-logo", "index": 6 }, { "title": "c-close-button", "index": 13 }, { "title": "c-data-table", "index": 7 }, { "title": "c-hamburger", "index": 14 }, { "title": "c-layout-blog", "index": 10 }, { "title": "c-layout-default", "index": 12 }, { "title": "c-layout-floating-header", "index": 11 }, { "title": "c-section-heading", "index": 9 }] }, { "title": "Composables", "children": [{ "title": "useMultiSelection", "index": 1 }, { "title": "useOptionalModel", "index": 3 }, { "title": "useScrollShrink", "index": 2 }] }, { "title": "Modules", "children": [{ "title": "m-data-table", "index": 8 }, { "title": "m-header-logo-nav", "index": 4 }, { "title": "m-nav-drawer", "index": 5 }] }, { "title": "Reference", "children": [{ "title": "Tokens", "index": 0 }] }];
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
      component: () => __vitePreload(() => import("./HomeView.vue-B9khDv7q.js"), true ? __vite__mapDeps([23,24,1]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-D8ztsuqw.js"), true ? __vite__mapDeps([25,1,24,26,27,28]) : void 0)
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
  "vanilla": () => __vitePreload(() => import("./vendor-DbHuLTxc.js").then((n) => n.e), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-DbHuLTxc.js").then((n) => n.f), true ? [] : void 0)
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
