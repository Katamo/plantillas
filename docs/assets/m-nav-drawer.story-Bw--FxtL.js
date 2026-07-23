import { ac as openBlock, r as createElementBlock, z as createVNode, aX as withCtx, p as createCommentVNode, c as Transition, ap as renderSlot, a as Fragment, ar as resolveComponent, n as createBlock, l as createBaseVNode, ak as ref } from "./vendor-DbHuLTxc.js";
import { C as CCloseButton } from "./c-close-button-DDTDXimW.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "m-nav-drawer",
  props: {
    open: { type: Boolean, default: false }
  },
  emits: ["close"],
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get CCloseButton() {
      return CCloseButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = {
  key: 0,
  class: "m-nav-drawer"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createVNode(Transition, { name: "m-nav-drawer-fade" }, {
        default: withCtx(() => [
          $props.open ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "m-nav-drawer__backdrop",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          })) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(Transition, { name: "m-nav-drawer-slide" }, {
        default: withCtx(() => [
          $props.open ? (openBlock(), createElementBlock("nav", _hoisted_1, [
            createVNode($setup["CCloseButton"], {
              class: "m-nav-drawer__close",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
            }),
            renderSlot(_ctx.$slots, "default")
          ])) : createCommentVNode("v-if", true)
        ]),
        _: 3
        /* FORWARDED */
      })
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
_sfc_main$1.__file = "src/modules/nav/drawer/m-nav-drawer.vue";
const MNavDrawer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/modules/nav/drawer/m-nav-drawer.vue"]]);
const docs = '# m-nav-drawer\n\nDrawer de navegación móvil con backdrop. Gestiona las transiciones de entrada/salida (fade para el backdrop, slide desde la derecha para el panel). El estado `open` es controlado por el padre.\n\n## Props\n\n| Prop | Tipo | Default | Descripción |\n|---|---|---|---|\n| `open` | `Boolean` | `false` | Muestra u oculta el drawer y el backdrop |\n\n## Eventos\n\n| Evento | Descripción |\n|---|---|\n| `close` | Emitido al pulsar el botón de cierre o al hacer click en el backdrop |\n\n## Slot\n\nEl slot default es el contenido del drawer — habitualmente una lista de enlaces de navegación.\n\n```html\n<MNavDrawer :open="isMenuOpen" @close="isMenuOpen = false">\n  <a href="/" class="link">Inicio</a>\n  <a href="/about" class="link">Sobre mí</a>\n</MNavDrawer>\n```\n\nEl módulo no asume ningún framework de routing. Los enlaces pueden ser `<a>`, `<NuxtLink>`, `<RouterLink>` o cualquier elemento.\n\n## Gestión del estado\n\nEl módulo es completamente controlado — no gestiona el estado internamente. El consumidor decide cuándo abrir y cerrar:\n\n```javascript\nconst isMenuOpen = ref(false)\nconst route = useRoute()\n\n// Cerrar al navegar\nwatch(route, () => { isMenuOpen.value = false })\n```\n\n## CSS Custom Properties\n\n| Propiedad | Default | Descripción |\n|---|---|---|\n| `--m-nav-drawer-width` | `spacing(60)` | Ancho del panel |\n| `--m-nav-drawer-background` | `color(surface, alt)` | Color de fondo del panel |\n| `--m-nav-drawer-padding` | `spacing(6)` | Padding interior del panel |\n| `--m-nav-drawer-backdrop-color` | `rgba(0,0,0,0.3)` | Color del backdrop |\n\n## Dependencias\n\n- `CCloseButton` — botón de cierre incluido automáticamente dentro del drawer\n';
const _sfc_main = {
  __name: "m-nav-drawer.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const isOpen = ref(false);
    const __returned__ = { isOpen, ref, MNavDrawer, get docs() {
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
    title: "Modules/m-nav-drawer",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Interactivo" }, {
        default: withCtx(() => [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.isOpen = true),
            style: { "padding": "8px 16px", "cursor": "pointer" }
          }, " Abrir drawer "),
          createVNode($setup["MNavDrawer"], {
            open: $setup.isOpen,
            onClose: _cache[1] || (_cache[1] = ($event) => $setup.isOpen = false)
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createBaseVNode(
                "a",
                {
                  href: "#",
                  style: { "padding": "12px 0", "border-bottom": "1px solid #eee", "text-decoration": "none", "color": "inherit" }
                },
                "Inicio",
                -1
                /* CACHED */
              ),
              createBaseVNode(
                "a",
                {
                  href: "#",
                  style: { "padding": "12px 0", "border-bottom": "1px solid #eee", "text-decoration": "none", "color": "inherit" }
                },
                "Sobre mí",
                -1
                /* CACHED */
              ),
              createBaseVNode(
                "a",
                {
                  href: "#",
                  style: { "padding": "12px 0", "border-bottom": "1px solid #eee", "text-decoration": "none", "color": "inherit" }
                },
                "Archivo",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["open"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/modules/nav/drawer/m-nav-drawer.story.vue";
const mNavDrawer_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/modules/nav/drawer/m-nav-drawer.story.vue"]]);
export {
  mNavDrawer_story as default
};
