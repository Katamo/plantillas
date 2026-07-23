import { ac as openBlock, r as createElementBlock, l as createBaseVNode, p as createCommentVNode, ay as toDisplayString, n as createBlock, aX as withCtx, ap as renderSlot, au as resolveDynamicComponent, ar as resolveComponent, z as createVNode, x as createTextVNode } from "./vendor-DbHuLTxc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "c-section-heading",
  props: {
    index: { type: String, default: null },
    bar: { type: Boolean, default: true },
    level: { type: String, default: "h2" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1$1 = { class: "c-section-heading" };
const _hoisted_2$1 = { class: "heading" };
const _hoisted_3$1 = {
  key: 0,
  class: "bar",
  "aria-hidden": "true"
};
const _hoisted_4$1 = {
  key: 1,
  class: "index"
};
const _hoisted_5 = {
  key: 0,
  class: "actions"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      $props.bar ? (openBlock(), createElementBlock("span", _hoisted_3$1)) : createCommentVNode("v-if", true),
      $props.index ? (openBlock(), createElementBlock(
        "span",
        _hoisted_4$1,
        toDisplayString($props.index),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      (openBlock(), createBlock(resolveDynamicComponent($props.level), { class: "title" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }))
    ]),
    _ctx.$slots.actions ? (openBlock(), createElementBlock("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "actions")
    ])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$1.__file = "src/components/content/section-heading/c-section-heading.vue";
const CSectionHeading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/content/section-heading/c-section-heading.vue"]]);
const docs = '# c-section-heading\r\n\r\nEncabezado de bloque/sección: barra de acento + índice opcional + título + zona de acciones a la derecha ("ver todo", flechas de carrusel, tabs…). Aparece en cualquier página de composición por bloques.\r\n\r\n## Typesets requeridos\r\n\r\nEl consumidor debe definir **`h2`** (título) y **`label`** (índice) en su `bedrock-config.scss`. Usa los grupos de color `primary` y `text`.\r\n\r\n## Props\r\n\r\n| Prop | Tipo | Requerido | Default | Descripción |\r\n|---|---|---|---|---|\r\n| `index` | `String` | No | `null` | Índice de sección (`/01`) pintado en `color(primary)` |\r\n| `bar` | `Boolean` | No | `true` | Muestra la barra de acento delante del título |\r\n| `level` | `String` | No | `\'h2\'` | Etiqueta del título (`h2`, `h3`…) |\r\n\r\n## Slots\r\n\r\n| Slot | Descripción |\r\n|---|---|\r\n| `default` | Texto del título |\r\n| `actions` | Zona derecha: enlaces, botones, controles |\r\n\r\n## CSS Custom Properties\r\n\r\n| Propiedad | Default | Descripción |\r\n|---|---|---|\r\n| `--c-section-heading-gap` | `spacing(3)` | Separación entre piezas |\r\n| `--c-section-heading-bar-width` | `spacing(1)` | Ancho de la barra |\r\n| `--c-section-heading-bar-height` | `spacing(4)` | Alto de la barra |\r\n\r\n## Ejemplo\r\n\r\n```html\r\n<CSectionHeading index="/01">\r\n  Últimos lanzamientos\r\n  <template #actions>\r\n    <a href="/lanzamientos">Ver todo</a>\r\n  </template>\r\n</CSectionHeading>\r\n```\r\n';
const _sfc_main = {
  __name: "c-section-heading.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { CSectionHeading, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { style: { "width": "480px" } };
const _hoisted_2 = { style: { "width": "480px" } };
const _hoisted_3 = { style: { "width": "480px" } };
const _hoisted_4 = { style: { "width": "480px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/c-section-heading",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default — barra + título" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["CSectionHeading"], null, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode(
                  "Título de sección",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Con índice" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["CSectionHeading"], { index: "/01" }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode(
                  "Últimos lanzamientos",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Con acciones" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["CSectionHeading"], { index: "/02" }, {
              actions: withCtx(() => [..._cache[2] || (_cache[2] = [
                createBaseVNode(
                  "a",
                  {
                    href: "#",
                    style: { "font-size": "12px" }
                  },
                  "VER TODO →",
                  -1
                  /* CACHED */
                )
              ])]),
              default: withCtx(() => [
                _cache[3] || (_cache[3] = createTextVNode(
                  " Próximamente ",
                  -1
                  /* CACHED */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Sin barra, nivel h3" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createVNode($setup["CSectionHeading"], {
              bar: false,
              level: "h3"
            }, {
              default: withCtx(() => [..._cache[4] || (_cache[4] = [
                createTextVNode(
                  "Bloque secundario",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/components/content/section-heading/c-section-heading.story.vue";
const cSectionHeading_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/content/section-heading/c-section-heading.story.vue"]]);
export {
  cSectionHeading_story as default
};
