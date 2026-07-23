import { B as BGridArea, a as BGridLayout } from "./BGridArea-C4OJQXLP.js";
import { ac as openBlock, n as createBlock, aX as withCtx, z as createVNode, ap as renderSlot, ar as resolveComponent, l as createBaseVNode } from "./vendor-DbHuLTxc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "c-layout-default",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get BGridLayout() {
      return BGridLayout;
    }, get BGridArea() {
      return BGridArea;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["BGridLayout"], { layout: "default" }, {
    default: withCtx(() => [
      createVNode($setup["BGridArea"], { area: "header" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "header")
        ]),
        _: 3
        /* FORWARDED */
      }),
      createVNode($setup["BGridArea"], { area: "main" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }),
      createVNode($setup["BGridArea"], { area: "footer" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "footer")
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/components/layout/default/c-layout-default.vue";
const CLayoutDefault = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/layout/default/c-layout-default.vue"]]);
const docs = '# c-layout-default\n\nShell de página con tres áreas: `header`, `main` y `footer`. Usa CSS Grid para que el main ocupe todo el espacio disponible y la página alcance como mínimo el alto del viewport.\n\n## Dependencias Bedrock\n\nRequiere `BGridLayout` y `BGridArea` de `@bedrock/core`. El layout CSS se define mediante los mixins `grid-layout` y `grid-area` de Bedrock.\n\n## Props\n\nEste componente no tiene props. Su configuración es estructural y se controla mediante slots.\n\n## Slots\n\n| Slot | Descripción |\n|---|---|\n| `header` | Contenido del área `<header>` |\n| *(default)* | Contenido del área `<main>` |\n| `footer` | Contenido del área `<footer>` |\n\n## Estructura HTML generada\n\n```html\n<div class="c-layout-default">\n  <div data-grid-layout="default" class="b-grid-layout">\n    <header data-grid-area="header" class="b-grid-area"><!-- slot header --></header>\n    <main data-grid-area="main" class="b-grid-area"><!-- slot default --></main>\n    <footer data-grid-area="footer" class="b-grid-area"><!-- slot footer --></footer>\n  </div>\n</div>\n```\n\n## Ejemplo de uso\n\n```vue\n<CLayoutDefault>\n  <template #header>\n    <MHeader />\n  </template>\n\n  <RouterView />\n\n  <template #footer>\n    <MFooter />\n  </template>\n</CLayoutDefault>\n```\n';
const _sfc_main = {
  __name: "c-layout-default.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { CLayoutDefault, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/c-layout-default",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["CLayoutDefault"], null, {
            header: withCtx(() => [..._cache[0] || (_cache[0] = [
              createBaseVNode(
                "div",
                { style: { "padding": "16px", "background": "#e0e0e0" } },
                "Header",
                -1
                /* CACHED */
              )
            ])]),
            footer: withCtx(() => [..._cache[1] || (_cache[1] = [
              createBaseVNode(
                "div",
                { style: { "padding": "16px", "background": "#e0e0e0" } },
                "Footer",
                -1
                /* CACHED */
              )
            ])]),
            default: withCtx(() => [
              _cache[2] || (_cache[2] = createBaseVNode(
                "div",
                { style: { "padding": "16px" } },
                "Main content",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/components/layout/default/c-layout-default.story.vue";
const cLayoutDefault_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/layout/default/c-layout-default.story.vue"]]);
export {
  cLayoutDefault_story as default
};
