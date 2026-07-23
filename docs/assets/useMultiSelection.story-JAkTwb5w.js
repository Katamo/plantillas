import { ar as resolveComponent, ac as openBlock, n as createBlock, aX as withCtx, z as createVNode, l as createBaseVNode, r as createElementBlock, a as Fragment, an as renderList, a2 as normalizeStyle, ay as toDisplayString, x as createTextVNode, ak as ref, i as computed } from "./vendor-DbHuLTxc.js";
import { u as useMultiSelection } from "./useMultiSelection-CmChJsos.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const docs = '# useMultiSelection\n\nSelección múltiple sobre una lista ordenada de claves, con los modificadores de teclado habituales de los exploradores de archivos. Lógica pura sin DOM: sirve para tablas, listas, galerías o árboles.\n\n- **clic** → selección única\n- **Ctrl/Cmd + clic** → alterna el elemento sin tocar el resto\n- **Shift + clic** → añade el rango entre el ancla (último clic) y el elemento pulsado\n\n## API\n\n```js\nconst selection = useMultiSelection(orderedKeys, selectedKeys)\n```\n\n| Parámetro | Tipo | Descripción |\n|---|---|---|\n| `orderedKeys` | `Ref<Array>` | Claves en el orden en que se presentan (los rangos con Shift se calculan sobre este orden) |\n| `selectedKeys` | `Ref<Array>` | Ref escribible con las claves seleccionadas (puede ser un modelo de `useOptionalModel`) |\n\nDevuelve:\n\n| Miembro | Tipo | Descripción |\n|---|---|---|\n| `isSelected(key)` | `Function` | Si la clave está seleccionada |\n| `handleClick(key, event)` | `Function` | Gestiona un clic leyendo `shiftKey` / `ctrlKey` / `metaKey` del evento |\n| `toggle(key)` | `Function` | Alterna un elemento sin modificadores (checkboxes) |\n| `selectOnly(key)` | `Function` | Deja como única selección el elemento indicado |\n| `selectAll()` / `clear()` | `Function` | Selecciona todo / vacía la selección |\n| `allSelected` | `ComputedRef<Boolean>` | Todas las claves están seleccionadas |\n| `someSelected` | `ComputedRef<Boolean>` | Hay selección pero no es completa (checkbox tri-estado) |\n| `anchor` | `Ref` | Clave ancla del último clic |\n\n## Uso\n\n```js\nimport { computed } from \'vue\'\nimport { useMultiSelection } from \'plantillas/composables/use-multi-selection\'\n\nconst orderedKeys = computed(() => filas.value.map((f) => f.id))\nconst selectedKeys = ref([])\n\nconst { isSelected, handleClick } = useMultiSelection(orderedKeys, selectedKeys)\n```\n\n```html\n<li\n  v-for="fila in filas"\n  :data-selected="isSelected(fila.id) || undefined"\n  @click="handleClick(fila.id, $event)"\n>\n```\n';
const _sfc_main = {
  __name: "useMultiSelection.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const items = ref(Array.from({ length: 10 }, (_, i) => ({ id: i + 1, nombre: `Elemento ${i + 1}` })));
    const orderedKeys = computed(() => items.value.map((i) => i.id));
    const selectedKeys = ref([]);
    const { isSelected, handleClick, allSelected, someSelected, selectAll, clear } = useMultiSelection(orderedKeys, selectedKeys);
    const __returned__ = { items, orderedKeys, selectedKeys, isSelected, handleClick, allSelected, someSelected, selectAll, clear, ref, computed, get useMultiSelection() {
      return useMultiSelection;
    }, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { style: { "list-style": "none", "padding": "0", "margin": "0", "max-width": "240px", "user-select": "none" } };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { style: { "font-size": "12px", "color": "#888", "margin-top": "8px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Composables/useMultiSelection",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Lista con Ctrl/Shift" }, {
        default: withCtx(() => [
          _cache[3] || (_cache[3] = createBaseVNode(
            "p",
            { style: { "font-size": "12px", "color": "#888", "margin-bottom": "8px" } },
            " Clic = única · Ctrl+clic = alternar · Shift+clic = rango ",
            -1
            /* CACHED */
          )),
          createBaseVNode("ul", _hoisted_1, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.items, (item) => {
                return openBlock(), createElementBlock("li", {
                  key: item.id,
                  style: normalizeStyle({
                    padding: "6px 12px",
                    cursor: "pointer",
                    borderRadius: "4px",
                    background: $setup.isSelected(item.id) ? "#dbeafe" : "transparent"
                  }),
                  onClick: ($event) => $setup.handleClick(item.id, $event)
                }, toDisplayString(item.nombre), 13, _hoisted_2);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          createBaseVNode("p", _hoisted_3, [
            createTextVNode(
              " Seleccionados: " + toDisplayString($setup.selectedKeys.join(", ") || "—"),
              1
              /* TEXT */
            ),
            _cache[2] || (_cache[2] = createBaseVNode(
              "br",
              null,
              null,
              -1
              /* CACHED */
            )),
            createTextVNode(
              " Todos: " + toDisplayString($setup.allSelected) + " · Parcial: " + toDisplayString($setup.someSelected),
              1
              /* TEXT */
            )
          ]),
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.selectAll())
          }, "Seleccionar todo"),
          createBaseVNode("button", {
            style: { "margin-left": "8px" },
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.clear())
          }, "Limpiar")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/composables/use-multi-selection/useMultiSelection.story.vue";
const useMultiSelection_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/composables/use-multi-selection/useMultiSelection.story.vue"]]);
export {
  useMultiSelection_story as default
};
