import { ah as resolveComponent, a2 as openBlock, k as createBlock, aJ as withCtx, v as createVNode, i as createBaseVNode, m as createCommentVNode, o as createElementBlock, a as Fragment, ad as renderList, U as normalizeStyle, an as toDisplayString, t as createTextVNode } from "./vendor-DOvsOfdG.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "tokens.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const colors = {
      primary: [
        { token: "primary", hex: "#2563eb" },
        { token: "primary light", hex: "#dbeafe" },
        { token: "primary dark", hex: "#1d4ed8" }
      ],
      text: [
        { token: "text", hex: "#1a1a1a" },
        { token: "text muted", hex: "#666666" },
        { token: "text light", hex: "#f5f5f5" }
      ],
      surface: [
        { token: "surface", hex: "#ffffff" },
        { token: "surface alt", hex: "#f5f5f5" },
        { token: "surface dark", hex: "#1a1a1a" }
      ],
      grey: [
        { token: "grey", hex: "#888888" },
        { token: "grey light", hex: "#f5f5f5" },
        { token: "grey mid", hex: "#cccccc" },
        { token: "grey dark", hex: "#444444" }
      ],
      line: [
        { token: "line", hex: "#e0e0e0" },
        { token: "line dark", hex: "#333333" }
      ]
    };
    const spacing = Array.from({ length: 20 }, (_, i) => ({
      n: i + 1,
      px: (i + 1) * 4
    }));
    const weights = [
      { token: "thin", value: 100 },
      { token: "extra-light", value: 200 },
      { token: "light", value: 300 },
      { token: "regular", value: 400 },
      { token: "medium", value: 500 },
      { token: "semi-bold", value: 600 },
      { token: "bold", value: 700 },
      { token: "extra-bold", value: 800 },
      { token: "black", value: 900 }
    ];
    const __returned__ = { colors, spacing, weights };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { class: "ref" };
const _hoisted_2 = { class: "ref-section" };
const _hoisted_3 = { class: "ref-swatches" };
const _hoisted_4 = { class: "ref-swatch__token" };
const _hoisted_5 = { class: "ref-swatch__hex" };
const _hoisted_6 = { class: "ref-swatches" };
const _hoisted_7 = { class: "ref-swatch__token" };
const _hoisted_8 = { class: "ref-swatch__hex" };
const _hoisted_9 = { class: "ref-swatches" };
const _hoisted_10 = { class: "ref-swatch__token" };
const _hoisted_11 = { class: "ref-swatch__hex" };
const _hoisted_12 = { class: "ref-swatches" };
const _hoisted_13 = { class: "ref-swatch__token" };
const _hoisted_14 = { class: "ref-swatch__hex" };
const _hoisted_15 = { class: "ref-swatches" };
const _hoisted_16 = { class: "ref-swatch__token" };
const _hoisted_17 = { class: "ref-swatch__hex" };
const _hoisted_18 = { class: "ref-section" };
const _hoisted_19 = { class: "ref-spacing" };
const _hoisted_20 = { class: "ref-spacing__label" };
const _hoisted_21 = { class: "ref-spacing__value" };
const _hoisted_22 = { class: "ref-section" };
const _hoisted_23 = { class: "ref-weights" };
const _hoisted_24 = { class: "ref-weight__label" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Reference/Tokens",
    layout: { type: "single", iframe: false }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Design tokens" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createCommentVNode(" COLORES "),
            createBaseVNode("section", _hoisted_2, [
              _cache[0] || (_cache[0] = createBaseVNode(
                "h2",
                { class: "ref-heading" },
                "Colores",
                -1
                /* CACHED */
              )),
              _cache[1] || (_cache[1] = createBaseVNode(
                "h3",
                { class: "ref-subheading" },
                "Primary",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_3, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.colors.primary, (s) => {
                    return openBlock(), createElementBlock("div", {
                      class: "ref-swatch",
                      key: s.token
                    }, [
                      createBaseVNode(
                        "div",
                        {
                          class: "ref-swatch__color",
                          style: normalizeStyle({ background: s.hex, borderColor: s.hex === "#ffffff" ? "#e0e0e0" : s.hex })
                        },
                        null,
                        4
                        /* STYLE */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_4,
                        toDisplayString(s.token),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_5,
                        toDisplayString(s.hex),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _cache[2] || (_cache[2] = createBaseVNode(
                "h3",
                { class: "ref-subheading" },
                "Text",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_6, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.colors.text, (s) => {
                    return openBlock(), createElementBlock("div", {
                      class: "ref-swatch",
                      key: s.token
                    }, [
                      createBaseVNode(
                        "div",
                        {
                          class: "ref-swatch__color",
                          style: normalizeStyle({ background: s.hex, borderColor: s.hex === "#ffffff" || s.hex === "#f5f5f5" ? "#e0e0e0" : s.hex })
                        },
                        null,
                        4
                        /* STYLE */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_7,
                        toDisplayString(s.token),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_8,
                        toDisplayString(s.hex),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _cache[3] || (_cache[3] = createBaseVNode(
                "h3",
                { class: "ref-subheading" },
                "Surface",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_9, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.colors.surface, (s) => {
                    return openBlock(), createElementBlock("div", {
                      class: "ref-swatch",
                      key: s.token
                    }, [
                      createBaseVNode(
                        "div",
                        {
                          class: "ref-swatch__color",
                          style: normalizeStyle({ background: s.hex, borderColor: s.hex === "#ffffff" ? "#e0e0e0" : s.hex })
                        },
                        null,
                        4
                        /* STYLE */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_10,
                        toDisplayString(s.token),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_11,
                        toDisplayString(s.hex),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _cache[4] || (_cache[4] = createBaseVNode(
                "h3",
                { class: "ref-subheading" },
                "Grey",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_12, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.colors.grey, (s) => {
                    return openBlock(), createElementBlock("div", {
                      class: "ref-swatch",
                      key: s.token
                    }, [
                      createBaseVNode(
                        "div",
                        {
                          class: "ref-swatch__color",
                          style: normalizeStyle({ background: s.hex, borderColor: s.hex === "#f5f5f5" ? "#e0e0e0" : s.hex })
                        },
                        null,
                        4
                        /* STYLE */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_13,
                        toDisplayString(s.token),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_14,
                        toDisplayString(s.hex),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _cache[5] || (_cache[5] = createBaseVNode(
                "h3",
                { class: "ref-subheading" },
                "Line",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_15, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.colors.line, (s) => {
                    return openBlock(), createElementBlock("div", {
                      class: "ref-swatch",
                      key: s.token
                    }, [
                      createBaseVNode(
                        "div",
                        {
                          class: "ref-swatch__color",
                          style: normalizeStyle({ background: s.hex, borderColor: s.hex })
                        },
                        null,
                        4
                        /* STYLE */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_16,
                        toDisplayString(s.token),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_17,
                        toDisplayString(s.hex),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            createCommentVNode(" ESPACIADO "),
            createBaseVNode("section", _hoisted_18, [
              _cache[6] || (_cache[6] = createBaseVNode(
                "h2",
                { class: "ref-heading" },
                "Espaciado",
                -1
                /* CACHED */
              )),
              _cache[7] || (_cache[7] = createBaseVNode(
                "p",
                { class: "ref-note" },
                [
                  createTextVNode("spacing-base: 4px — "),
                  createBaseVNode("code", null, "spacing(n)"),
                  createTextVNode(" = n × 4px")
                ],
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_19, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.spacing, (s) => {
                    return openBlock(), createElementBlock("div", {
                      class: "ref-spacing__row",
                      key: s.n
                    }, [
                      createBaseVNode(
                        "span",
                        _hoisted_20,
                        "spacing(" + toDisplayString(s.n) + ")",
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "div",
                        {
                          class: "ref-spacing__bar",
                          style: normalizeStyle({ width: s.px + "px", minWidth: "2px" })
                        },
                        null,
                        4
                        /* STYLE */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_21,
                        toDisplayString(s.px) + "px",
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            createCommentVNode(" TIPOGRAFÍA "),
            createBaseVNode("section", _hoisted_22, [
              _cache[8] || (_cache[8] = createBaseVNode(
                "h2",
                { class: "ref-heading" },
                "Tipografía",
                -1
                /* CACHED */
              )),
              _cache[9] || (_cache[9] = createBaseVNode(
                "h3",
                { class: "ref-subheading" },
                "Familias",
                -1
                /* CACHED */
              )),
              _cache[10] || (_cache[10] = createBaseVNode(
                "div",
                { class: "ref-families" },
                [
                  createBaseVNode("div", { class: "ref-family" }, [
                    createBaseVNode("span", { class: "ref-family__label" }, "font(base)"),
                    createBaseVNode("span", {
                      class: "ref-family__sample",
                      style: { "font-family": "system-ui, -apple-system, sans-serif" }
                    }, "The quick brown fox"),
                    createBaseVNode("span", { class: "ref-family__stack" }, "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif")
                  ]),
                  createBaseVNode("div", { class: "ref-family" }, [
                    createBaseVNode("span", { class: "ref-family__label" }, "font(heading)"),
                    createBaseVNode("span", {
                      class: "ref-family__sample",
                      style: { "font-family": "system-ui, -apple-system, sans-serif", "font-weight": "700" }
                    }, "The quick brown fox"),
                    createBaseVNode("span", { class: "ref-family__stack" }, "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif")
                  ]),
                  createBaseVNode("div", { class: "ref-family" }, [
                    createBaseVNode("span", { class: "ref-family__label" }, "font(mono)"),
                    createBaseVNode("span", {
                      class: "ref-family__sample",
                      style: { "font-family": "ui-monospace, 'SFMono-Regular', Menlo, monospace" }
                    }, "const foo = 'bar'"),
                    createBaseVNode("span", { class: "ref-family__stack" }, "ui-monospace, SFMono-Regular, Menlo, monospace")
                  ])
                ],
                -1
                /* CACHED */
              )),
              _cache[11] || (_cache[11] = createBaseVNode(
                "h3",
                { class: "ref-subheading" },
                "Pesos",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_23, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.weights, (w) => {
                    return createBaseVNode("div", {
                      class: "ref-weight",
                      key: w.token
                    }, [
                      createBaseVNode(
                        "span",
                        _hoisted_24,
                        "weight(" + toDisplayString(w.token) + ") · " + toDisplayString(w.value),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "span",
                        {
                          class: "ref-weight__sample",
                          style: normalizeStyle({ fontWeight: w.value })
                        },
                        "Plantillas · The quick brown fox jumps over the lazy dog",
                        4
                        /* STYLE */
                      )
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _cache[12] || (_cache[12] = createBaseVNode(
                "h3",
                { class: "ref-subheading" },
                "Jerarquía",
                -1
                /* CACHED */
              )),
              _cache[13] || (_cache[13] = createBaseVNode(
                "div",
                { class: "ref-type-scale" },
                [
                  createBaseVNode("div", { class: "ref-type-row" }, [
                    createBaseVNode("span", { class: "ref-type-row__label" }, "h1"),
                    createBaseVNode("h1", { class: "ref-h1" }, "Título de primer nivel")
                  ]),
                  createBaseVNode("div", { class: "ref-type-row" }, [
                    createBaseVNode("span", { class: "ref-type-row__label" }, "h2"),
                    createBaseVNode("h2", { class: "ref-h2" }, "Título de segundo nivel")
                  ]),
                  createBaseVNode("div", { class: "ref-type-row" }, [
                    createBaseVNode("span", { class: "ref-type-row__label" }, "h3"),
                    createBaseVNode("h3", { class: "ref-h3" }, "Título de tercer nivel")
                  ]),
                  createBaseVNode("div", { class: "ref-type-row" }, [
                    createBaseVNode("span", { class: "ref-type-row__label" }, "h4"),
                    createBaseVNode("h4", { class: "ref-h4" }, "Título de cuarto nivel")
                  ]),
                  createBaseVNode("div", { class: "ref-type-row" }, [
                    createBaseVNode("span", { class: "ref-type-row__label" }, "body"),
                    createBaseVNode("p", { class: "ref-body" }, "El cuerpo del texto es el typeset más importante. La line-height es el parámetro que más afecta a la sensación de espacio: demasiado corta agobia, demasiado larga rompe la cohesión del texto.")
                  ]),
                  createBaseVNode("div", { class: "ref-type-row" }, [
                    createBaseVNode("span", { class: "ref-type-row__label" }, "small"),
                    createBaseVNode("p", { class: "ref-small" }, "Texto de apoyo, metadatos, etiquetas y elementos secundarios de la interfaz.")
                  ]),
                  createBaseVNode("div", { class: "ref-type-row" }, [
                    createBaseVNode("span", { class: "ref-type-row__label" }, "mono"),
                    createBaseVNode("code", { class: "ref-mono" }, "const spacing = (n) => n * 4 + 'px'")
                  ])
                ],
                -1
                /* CACHED */
              )),
              _cache[14] || (_cache[14] = createBaseVNode(
                "h3",
                { class: "ref-subheading" },
                "Elementos inline",
                -1
                /* CACHED */
              )),
              _cache[15] || (_cache[15] = createBaseVNode(
                "p",
                { class: "ref-body ref-inline-sample" },
                [
                  createTextVNode(" Texto con "),
                  createBaseVNode("strong", null, "negrita"),
                  createTextVNode(", "),
                  createBaseVNode("em", null, "cursiva"),
                  createTextVNode(", "),
                  createBaseVNode("strong", null, [
                    createBaseVNode("em", null, "negrita cursiva")
                  ]),
                  createTextVNode(", "),
                  createBaseVNode("a", {
                    href: "#",
                    style: { "color": "#2563eb" }
                  }, "un enlace"),
                  createTextVNode(" y "),
                  createBaseVNode("code", {
                    class: "ref-mono",
                    style: { "font-size": "0.875em" }
                  }, "código en línea"),
                  createTextVNode(". ")
                ],
                -1
                /* CACHED */
              ))
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/reference/tokens.story.vue";
const tokens_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-065d91db"], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/reference/tokens.story.vue"]]);
export {
  tokens_story as default
};
