import { ac as openBlock, r as createElementBlock, l as createBaseVNode, ar as resolveComponent, n as createBlock, aX as withCtx, z as createVNode, ay as toDisplayString, ak as ref } from "./vendor-DbHuLTxc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "c-hamburger",
  props: {
    open: { type: Boolean, default: false },
    labelOpen: { type: String, default: "Abrir menú" },
    labelClose: { type: String, default: "Cerrar menú" }
  },
  emits: ["click"],
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1$1 = ["data-open", "aria-label", "aria-expanded"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: "c-hamburger",
    "data-open": $props.open || void 0,
    "aria-label": $props.open ? $props.labelClose : $props.labelOpen,
    "aria-expanded": $props.open,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }, [..._cache[1] || (_cache[1] = [
    createBaseVNode(
      "span",
      null,
      null,
      -1
      /* CACHED */
    ),
    createBaseVNode(
      "span",
      null,
      null,
      -1
      /* CACHED */
    ),
    createBaseVNode(
      "span",
      null,
      null,
      -1
      /* CACHED */
    )
  ])], 8, _hoisted_1$1);
}
_sfc_main$1.__file = "src/components/nav/hamburger/c-hamburger.vue";
const CHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/nav/hamburger/c-hamburger.vue"]]);
const docs = "# c-hamburger\n\nBotón de menú tipo hamburger para activar navegaciones móviles. Gestiona `aria-label` y `aria-expanded` automáticamente según el estado `open`.\n\n## Props\n\n| Prop | Tipo | Default | Descripción |\n|---|---|---|---|\n| `open` | `Boolean` | `false` | Estado abierto/cerrado. Cambia el aria-label y el aria-expanded |\n| `labelOpen` | `String` | `'Abrir menú'` | Aria-label cuando el menú está cerrado |\n| `labelClose` | `String` | `'Cerrar menú'` | Aria-label cuando el menú está abierto |\n\n## Eventos\n\n| Evento | Descripción |\n|---|---|\n| `click` | Se emite al pulsar el botón |\n\n## Uso\n\n```html\n<CHamburger :open=\"isMenuOpen\" @click=\"isMenuOpen = true\" />\n```\n\nEl componente no gestiona el estado internamente — el consumidor controla `open` y reacciona al evento `click`.\n\n## CSS Custom Properties\n\n| Propiedad | Default | Descripción |\n|---|---|---|\n| `--c-hamburger-size` | `spacing(10)` | Tamaño del botón (ancho y alto) |\n| `--c-hamburger-padding` | `spacing(2)` | Padding interior |\n| `--c-hamburger-bar-gap` | `5px` | Espacio entre las barras |\n| `--c-hamburger-bar-height` | `2px` | Grosor de cada barra |\n| `--c-hamburger-bar-color` | `color(text)` | Color de las barras |\n\nSobrescribibles por contexto:\n\n```css\n.mi-header {\n  --c-hamburger-bar-color: white;\n  --c-hamburger-size: 48px;\n}\n```\n";
const _sfc_main = {
  __name: "c-hamburger.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const isOpen = ref(false);
    const __returned__ = { isOpen, ref, CHamburger, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { style: { "margin-top": "8px", "font-size": "12px", "color": "#888" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/c-hamburger",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default — cerrado" }, {
        default: withCtx(() => [
          createVNode($setup["CHamburger"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Open — abierto" }, {
        default: withCtx(() => [
          createVNode($setup["CHamburger"], { open: true })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Interactivo" }, {
        default: withCtx(() => [
          createVNode($setup["CHamburger"], {
            open: $setup.isOpen,
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.isOpen = !$setup.isOpen)
          }, null, 8, ["open"]),
          createBaseVNode(
            "p",
            _hoisted_1,
            "Estado: " + toDisplayString($setup.isOpen ? "abierto" : "cerrado"),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/components/nav/hamburger/c-hamburger.story.vue";
const cHamburger_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/nav/hamburger/c-hamburger.story.vue"]]);
export {
  cHamburger_story as default
};
