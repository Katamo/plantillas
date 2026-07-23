import { ac as openBlock, r as createElementBlock, l as createBaseVNode, ap as renderSlot, ar as resolveComponent, n as createBlock, aX as withCtx, z as createVNode, a as Fragment, an as renderList, ay as toDisplayString, p as createCommentVNode } from "./vendor-DbHuLTxc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "c-layout-floating-header",
  props: {
    variant: { type: String, default: "fixed" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1$1 = ["data-variant"];
const _hoisted_2$1 = { class: "c-layout-floating-header__header" };
const _hoisted_3$1 = { class: "c-layout-floating-header__main" };
const _hoisted_4$1 = { class: "c-layout-floating-header__footer" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "c-layout-floating-header",
    "data-variant": $props.variant !== "fixed" ? $props.variant : void 0
  }, [
    createBaseVNode("header", _hoisted_2$1, [
      renderSlot(_ctx.$slots, "header")
    ]),
    createBaseVNode("main", _hoisted_3$1, [
      renderSlot(_ctx.$slots, "default"),
      createBaseVNode("footer", _hoisted_4$1, [
        renderSlot(_ctx.$slots, "footer")
      ])
    ])
  ], 8, _hoisted_1$1);
}
_sfc_main$1.__file = "src/components/layout/floating-header/c-layout-floating-header.vue";
const CLayoutFloatingHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/layout/floating-header/c-layout-floating-header.vue"]]);
const docs = '# c-layout-floating-header\n\nShell de página en el que el header flota sobre el contenido sin ocupar espacio en el flujo del documento. En modo `fixed` (por defecto), el `main` reserva el espacio del header con `margin-top`; en modo `absolute`, el header se superpone al contenido sin reservar espacio.\n\nAdmite dos modos de posicionamiento: `fixed` (por defecto) para headers que permanecen fijos al hacer scroll en toda la página, y `absolute` para headers que flotan dentro de un contenedor específico.\n\n## Dependencias Bedrock\n\nNo requiere `BGridLayout` ni `BGridArea`. El layout se implementa con flexbox.\n\n## Props\n\n| Prop | Tipo | Default | Descripción |\n|---|---|---|---|\n| `variant` | `String` | `\'fixed\'` | Posicionamiento del header: `\'fixed\'` (relativo al viewport) o `\'absolute\'` (relativo al componente). |\n\n## Variantes de atributo\n\n| `data-variant` | Descripción |\n|---|---|\n| *(sin atributo)* | Header `position: fixed`. El main reserva el espacio del header con `margin-top`. |\n| `absolute` | Header `position: absolute`. El root añade `position: relative` para contener el header. El main **no** reserva espacio — el header flota sobre el contenido. |\n\n## Slots\n\n| Slot | Descripción |\n|---|---|\n| `header` | Contenido del header flotante. Ocupa el ancho completo y la altura definida por `--c-layout-floating-header-height`. |\n| *(default)* | Contenido principal de la página. |\n| `footer` | Footer, empujado al final del contenido mediante `margin-top: auto`. |\n\n## CSS Custom Properties\n\n| Propiedad | Default | Descripción |\n|---|---|---|\n| `--c-layout-floating-header-height` | `spacing(20)` (80px) | Altura del header. Controla tanto el `height` del elemento header como el `margin-top` del main. |\n\n## Estructura HTML generada\n\n```html\n<!-- variant: fixed (por defecto) -->\n<div class="c-layout-floating-header">\n  <header class="c-layout-floating-header__header"><!-- slot header --></header>\n  <main class="c-layout-floating-header__main">\n    <!-- slot default -->\n    <footer class="c-layout-floating-header__footer"><!-- slot footer --></footer>\n  </main>\n</div>\n\n<!-- variant: absolute -->\n<div class="c-layout-floating-header" data-variant="absolute">\n  <header class="c-layout-floating-header__header"><!-- slot header --></header>\n  <main class="c-layout-floating-header__main">\n    <!-- slot default -->\n    <footer class="c-layout-floating-header__footer"><!-- slot footer --></footer>\n  </main>\n</div>\n```\n\n## Ejemplo de uso\n\n```vue\n<!-- Header fijo en toda la página -->\n<CLayoutFloatingHeader>\n  <template #header>\n    <MHeaderLogoNav />\n  </template>\n  <RouterView />\n  <template #footer>\n    <MFooter />\n  </template>\n</CLayoutFloatingHeader>\n\n<!-- Header absoluto dentro de una sección -->\n<section>\n  <CLayoutFloatingHeader variant="absolute">\n    <template #header>\n      <MHeaderLogoNav />\n    </template>\n    <HeroContent />\n  </CLayoutFloatingHeader>\n</section>\n```\n\n## Integración con useScrollShrink\n\nSi el header usa `useScrollShrink` para reducir su altura al hacer scroll, sincroniza el custom property del layout con el del módulo de header para que el `margin-top` del main no quede desajustado:\n\n```css\n:root {\n  --c-layout-floating-header-height: var(--m-header-logo-nav-height);\n}\n```\n\nEl `margin-top` del main corresponde a la altura máxima del header. El espacio extra que queda al reducirse el header pasa a ser espacio visible en el scroll inicial, lo cual es el comportamiento esperado.\n';
const _sfc_main = {
  __name: "c-layout-floating-header.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { CLayoutFloatingHeader, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { style: { "padding": "24px" } };
const _hoisted_2 = { style: { "position": "relative", "min-height": "600px", "background": "#f5f5f5" } };
const _hoisted_3 = { style: { "padding": "24px" } };
const _hoisted_4 = { style: { "background": "linear-gradient(to bottom, #2563eb 0%, #2563eb 200px, #f5f5f5 200px)", "min-height": "600px", "padding": "24px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/c-layout-floating-header",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["CLayoutFloatingHeader"], null, {
            header: withCtx(() => [..._cache[0] || (_cache[0] = [
              createBaseVNode(
                "div",
                { style: { "height": "100%", "display": "flex", "align-items": "center", "padding": "0 24px", "background": "#1a1a1a", "color": "#fff" } },
                " Header flotante ",
                -1
                /* CACHED */
              )
            ])]),
            footer: withCtx(() => [..._cache[1] || (_cache[1] = [
              createBaseVNode(
                "div",
                { style: { "padding": "24px", "background": "#f5f5f5", "border-top": "1px solid #e0e0e0" } },
                "Footer",
                -1
                /* CACHED */
              )
            ])]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(20, (i) => {
                    return createBaseVNode(
                      "p",
                      {
                        key: i,
                        style: { "margin-bottom": "16px", "color": "#444" }
                      },
                      " Párrafo de contenido " + toDisplayString(i) + ". El header permanece fijo sobre este contenido mientras se hace scroll. ",
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
      }),
      createVNode(_component_Variant, { title: "variant: absolute" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["CLayoutFloatingHeader"], { variant: "absolute" }, {
              header: withCtx(() => [..._cache[2] || (_cache[2] = [
                createBaseVNode(
                  "div",
                  { style: { "height": "100%", "display": "flex", "align-items": "center", "padding": "0 24px", "background": "#1a1a1a", "color": "#fff" } },
                  " Header absoluto (relativo al contenedor) ",
                  -1
                  /* CACHED */
                )
              ])]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList(15, (i) => {
                      return createBaseVNode(
                        "p",
                        {
                          key: i,
                          style: { "margin-bottom": "16px", "color": "#444" }
                        },
                        " Párrafo " + toDisplayString(i) + ". El header es absoluto, relativo a su contenedor posicionado. ",
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
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Header transparente" }, {
        default: withCtx(() => [
          createVNode($setup["CLayoutFloatingHeader"], null, {
            header: withCtx(() => [..._cache[3] || (_cache[3] = [
              createBaseVNode(
                "div",
                { style: { "height": "100%", "display": "flex", "align-items": "center", "padding": "0 24px", "background": "rgba(255,255,255,0.85)", "backdrop-filter": "blur(8px)", "border-bottom": "1px solid rgba(0,0,0,0.08)" } },
                " Header semitransparente ",
                -1
                /* CACHED */
              )
            ])]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4, [
                _cache[4] || (_cache[4] = createBaseVNode(
                  "p",
                  { style: { "color": "#fff", "margin-bottom": "16px" } },
                  "El header semitransparente permite ver el contenido por debajo.",
                  -1
                  /* CACHED */
                )),
                _ctx.i === 1 ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  renderList(15, (i) => {
                    return createBaseVNode("p", {
                      key: i,
                      style: { "margin-bottom": "16px", "color": "#444", "margin-top": "200px" }
                    }, " Contenido que continúa después del gradiente. ");
                  }),
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true),
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(15, (i) => {
                    return createBaseVNode(
                      "p",
                      {
                        key: "b" + i,
                        style: { "margin-bottom": "16px", "color": "#444" }
                      },
                      " Párrafo " + toDisplayString(i) + " de contenido bajo el header. ",
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
_sfc_main.__file = "src/components/layout/floating-header/c-layout-floating-header.story.vue";
const cLayoutFloatingHeader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/layout/floating-header/c-layout-floating-header.story.vue"]]);
export {
  cLayoutFloatingHeader_story as default
};
