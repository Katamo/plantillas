import { ac as openBlock, r as createElementBlock } from "./vendor-DbHuLTxc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "c-close-button",
  props: {
    label: { type: String, default: "Cerrar" }
  },
  emits: ["click"],
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = ["aria-label"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: "c-close-button",
    "aria-label": $props.label,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }, "✕", 8, _hoisted_1);
}
_sfc_main.__file = "src/components/nav/close-button/c-close-button.vue";
const CCloseButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/nav/close-button/c-close-button.vue"]]);
export {
  CCloseButton as C
};
