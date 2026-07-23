import { C as CCloseButton } from "./c-close-button-DDTDXimW.js";
import { ar as resolveComponent, ac as openBlock, n as createBlock, aX as withCtx, z as createVNode } from "./vendor-DbHuLTxc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const docs = '# c-close-button\n\nBotón de cierre genérico para drawers, modales y paneles. Renderiza un símbolo ✕ con estilos mínimos y sin fondo.\n\n## Props\n\n| Prop | Tipo | Default | Descripción |\n|---|---|---|---|\n| `label` | `String` | `\'Cerrar\'` | Aria-label del botón |\n\n## Eventos\n\n| Evento | Descripción |\n|---|---|\n| `click` | Se emite al pulsar el botón |\n\n## Uso\n\n```html\n<CCloseButton @click="closeDrawer" />\n<CCloseButton label="Cerrar panel lateral" @click="closePanel" />\n```\n\n## CSS Custom Properties\n\n| Propiedad | Default | Descripción |\n|---|---|---|\n| `--c-close-button-color` | `color(text, muted)` | Color del símbolo |\n| `--c-close-button-color-hover` | `color(text)` | Color en hover |\n| `--c-close-button-padding` | `spacing(2)` | Padding del botón |\n';
const _sfc_main = {
  __name: "c-close-button.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { CCloseButton, get docs() {
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
    title: "Components/c-close-button",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["CCloseButton"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Label personalizado" }, {
        default: withCtx(() => [
          createVNode($setup["CCloseButton"], { label: "Cerrar panel" })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/components/nav/close-button/c-close-button.story.vue";
const cCloseButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/nav/close-button/c-close-button.story.vue"]]);
export {
  cCloseButton_story as default
};
