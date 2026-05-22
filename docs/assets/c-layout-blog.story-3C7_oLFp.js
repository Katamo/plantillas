import { B as BGridArea, a as BGridLayout } from "./BGridArea-B31OR_2t.js";
import { a1 as openBlock, k as createBlock, aI as withCtx, u as createVNode, ae as renderSlot, i as createBaseVNode, ag as resolveComponent, o as createElementBlock, a as Fragment, ac as renderList, am as toDisplayString } from "./vendor-DxZlYKFk.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "c-layout-blog",
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
const _hoisted_1$1 = { class: "c-layout-blog__footer" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["BGridLayout"], { layout: "blog" }, {
    default: withCtx(() => [
      createVNode($setup["BGridArea"], {
        area: "header",
        tag: "header"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "header")
        ]),
        _: 3
        /* FORWARDED */
      }),
      createVNode($setup["BGridArea"], {
        area: "main",
        tag: "main"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default"),
          createBaseVNode("footer", _hoisted_1$1, [
            renderSlot(_ctx.$slots, "footer")
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/components/layout/blog/c-layout-blog.vue";
const CLayoutBlog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/layout/blog/c-layout-blog.vue"]]);
const docs = '# c-layout-blog\n\nShell de página para blogs. El header es sticky (siempre visible al hacer scroll). El footer vive dentro del área `main` y se empuja al final del contenido, no queda anclado al viewport.\n\n## Diferencia con `c-layout-default`\n\n| | `c-layout-default` | `c-layout-blog` |\n|---|---|---|\n| Header | Estático | Sticky (`position: sticky; top: 0`) |\n| Footer | Área grid propia, anclada al viewport | Dentro de `main`, sigue al contenido |\n| Grid areas | `header` + `main` + `footer` | `header` + `main` |\n\n## Dependencias Bedrock\n\nRequiere `BGridLayout` y `BGridArea` de `@bedrock/core`.\n\n## Props\n\nEste componente no tiene props.\n\n## Slots\n\n| Slot | Descripción |\n|---|---|\n| `header` | Contenido del `<header>` sticky |\n| *(default)* | Contenido del artículo o página |\n| `footer` | Footer al final del contenido scrollable |\n\n## Estructura HTML generada\n\n```html\n<div data-grid-layout="blog" class="b-grid-layout">\n  <header data-grid-area="header" class="b-grid-area"><!-- slot header --></header>\n  <main data-grid-area="main" class="b-grid-area">\n    <!-- slot default -->\n    <footer class="c-layout-blog__footer"><!-- slot footer --></footer>\n  </main>\n</div>\n```\n\n## Ejemplo de uso\n\n```vue\n<CLayoutBlog>\n  <template #header>\n    <MHeader />\n  </template>\n\n  <RouterView />\n\n  <template #footer>\n    <MFooter />\n  </template>\n</CLayoutBlog>\n```\n';
const _sfc_main = {
  __name: "c-layout-blog.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { CLayoutBlog, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { style: { "padding": "24px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/c-layout-blog",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default — contenido corto" }, {
        default: withCtx(() => [
          createVNode($setup["CLayoutBlog"], null, {
            header: withCtx(() => [..._cache[0] || (_cache[0] = [
              createBaseVNode(
                "div",
                { style: { "padding": "16px", "background": "#1a1a1a", "color": "white" } },
                "Header (sticky)",
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
                { style: { "padding": "24px" } },
                [
                  createBaseVNode("p", null, "Contenido del artículo...")
                ],
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
      }),
      createVNode(_component_Variant, { title: "Contenido largo — footer fuera del viewport" }, {
        default: withCtx(() => [
          createVNode($setup["CLayoutBlog"], null, {
            header: withCtx(() => [..._cache[3] || (_cache[3] = [
              createBaseVNode(
                "div",
                { style: { "padding": "16px", "background": "#1a1a1a", "color": "white" } },
                "Header (sticky)",
                -1
                /* CACHED */
              )
            ])]),
            footer: withCtx(() => [..._cache[4] || (_cache[4] = [
              createBaseVNode(
                "div",
                { style: { "padding": "16px", "background": "#e0e0e0" } },
                "Footer — visible al llegar al final",
                -1
                /* CACHED */
              )
            ])]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(20, (n) => {
                    return createBaseVNode(
                      "p",
                      {
                        key: n,
                        style: { "margin-bottom": "16px" }
                      },
                      " Párrafo " + toDisplayString(n) + " del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                      1
                      /* TEXT */
                    );
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
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
_sfc_main.__file = "src/components/layout/blog/c-layout-blog.story.vue";
const cLayoutBlog_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/layout/blog/c-layout-blog.story.vue"]]);
export {
  cLayoutBlog_story as default
};
