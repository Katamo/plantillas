import { ar as resolveComponent, ac as openBlock, n as createBlock, aX as withCtx, z as createVNode, l as createBaseVNode, x as createTextVNode, ay as toDisplayString, ak as ref, J as defineComponent } from "./vendor-DbHuLTxc.js";
import { u as useOptionalModel } from "./useOptionalModel-CSCs5AM0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const docs = "# useOptionalModel\n\nEstado \"opcionalmente controlado\" para componentes con `v-model` opcional: si el consumidor pasa la prop, el componente funciona en modo controlado (la prop manda y cada cambio se emite como `update:<name>`); si no la pasa, el componente mantiene su propio estado interno.\n\n## API\n\n```js\nconst model = useOptionalModel(props, name, emit, initial)\n```\n\n| Parámetro | Tipo | Descripción |\n|---|---|---|\n| `props` | `Object` | Props reactivas del componente |\n| `name` | `String` | Nombre de la prop / model (ej. `'sortKey'`) |\n| `emit` | `Function` | Función `emit` del componente |\n| `initial` | `*` | Valor inicial del estado interno en modo no controlado |\n\nDevuelve un `WritableComputedRef`: leerlo da la prop (si está pasada) o el estado interno; escribirlo actualiza el interno y emite `update:<name>`.\n\n## Requisito\n\nLa prop debe declararse con `default: undefined` para poder distinguir \"no pasada\" de cualquier valor legítimo (incluido `null`):\n\n```js\ndefineProps({\n  sortKey: { type: String, default: undefined },\n})\n```\n\n## Uso\n\n```js\nimport { useOptionalModel } from 'plantillas/composables/use-optional-model'\n\nconst props = defineProps({\n  selectedKeys: { type: Array, default: undefined },\n})\nconst emit = defineEmits(['update:selectedKeys'])\n\nconst selected = useOptionalModel(props, 'selectedKeys', emit, [])\n\n// Lectura y escritura transparentes en ambos modos\nselected.value = [...selected.value, nuevaClave]\n```\n\nEl consumidor puede entonces elegir:\n\n```html\n<!-- Controlado -->\n<CDataTable v-model:selected-keys=\"claves\" ... />\n\n<!-- No controlado: el componente gestiona su propio estado -->\n<CDataTable ... />\n```\n";
const _sfc_main = {
  __name: "useOptionalModel.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const Counter = defineComponent({
      props: {
        count: { type: Number, default: void 0 }
      },
      emits: ["update:count"],
      setup(props, { emit }) {
        const count = useOptionalModel(props, "count", emit, 0);
        return { count };
      },
      template: `
    <button
      style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
      @click="count = count + 1"
    >
      Contador: {{ count }}
    </button>
  `
    });
    const externo = ref(10);
    const __returned__ = { Counter, externo, defineComponent, ref, get useOptionalModel() {
      return useOptionalModel;
    }, get docs() {
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
    title: "Composables/useOptionalModel",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "No controlado — estado interno" }, {
        default: withCtx(() => [
          createVNode($setup["Counter"]),
          _cache[2] || (_cache[2] = createBaseVNode(
            "p",
            { style: { "margin-top": "8px", "font-size": "12px", "color": "#888" } },
            " Sin prop: el componente gestiona su propio estado. ",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Controlado — v-model del padre" }, {
        default: withCtx(() => [
          createVNode($setup["Counter"], {
            count: $setup.externo,
            "onUpdate:count": _cache[0] || (_cache[0] = ($event) => $setup.externo = $event)
          }, null, 8, ["count"]),
          createBaseVNode("p", _hoisted_1, [
            createTextVNode(
              " Estado del padre: " + toDisplayString($setup.externo) + " ",
              1
              /* TEXT */
            ),
            createBaseVNode("button", {
              style: { "margin-left": "8px" },
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.externo = 0)
            }, "Reset externo")
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
_sfc_main.__file = "src/composables/use-optional-model/useOptionalModel.story.vue";
const useOptionalModel_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/composables/use-optional-model/useOptionalModel.story.vue"]]);
export {
  useOptionalModel_story as default
};
