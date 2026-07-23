const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-docs-data-DuglITBb.js","assets/vendor-DbHuLTxc.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./GenericMountStory.vue2-B7ZGr74m.js";
import { aj as ref, aS as watch, h as computed, H as defineComponent, ab as openBlock, q as createElementBlock, ao as renderSlot, aZ as withKeys, $ as normalizeClass, m as createBlock, aC as unref, I as Icon, y as createVNode, k as createBaseVNode, w as createTextVNode, ax as toDisplayString, F as Fragment, am as renderList, o as createCommentVNode, aD as useCssVars, aA as toRefs, aK as useRouter, aW as withCtx, W as markRaw, aG as useFocus, al as refDebounced, aY as withDirectives, aQ as vModelText, a_ as withModifiers, L as flexsearch_bundleExports } from "./vendor-DbHuLTxc.js";
import { u as useStoryStore } from "./story-DksUWbPM.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-DtQTcYWo.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-BtfshOID.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-GD1JuFoH.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2114f510"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          ((_a = _ctx.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "ddaae392": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d75a2748"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"t":[0,1],"to":[0,1],"tok":[0,1],"toke":[0,1],"tokem":[0,1],"tokems":[0,1],"o":[2,3,4,5,6,7,8,9],"os":[2,3,4,5,6,7,8,9],"ose":[2,3,4,5,6,7,8,9],"m":[10,11,12,13,14,15,42,43,44,45,46,47],"k":[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68]},{"te":[1],"tes":[1],"tese":[1],"tesek":[1],"tesekm":[1],"m":[2,3],"mo":[2,3],"mol":[2,3],"molt":[2,3],"molte":[2,3],"s":[4,5,6,48,49,50,51,52],"sk":[4,5,6],"skr":[4,5,6],"skro":[4,5,6],"skrol":[4,5,6],"op":[7,8,9],"opt":[7,8,9],"opte":[7,8,9],"opteo":[7,8,9],"opteom":[7,8,9],"opteoma":[7,8,9],"opteomal":[7,8,9],"e":[10,11,12,13],"ea":[10,11,12,13],"eat":[10,11,12,13],"eate":[10,11,12,13],"eater":[10,11,12,13],"ma":[14,15],"maf":[14,15],"p":[16,17,18,19,20,21,22,23],"pr":[16,17,18,19,20,21,22,23],"pra":[16,17,18,19,20,21,22,23],"pram":[16,17,18,19,20,21,22,23],"pramt":[16,17,18,19,20,21,22,23],"t":[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"ta":[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"tat":[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"tata":[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"se":[48,49,50,51,52],"sek":[48,49,50,51,52],"sekt":[48,49,50,51,52],"sekte":[48,49,50,51,52],"sekteo":[48,49,50,51,52],"sekteom":[48,49,50,51,52],"l":[53,54,55,56,57,58,59,60,61],"la":[53,54,55,56,57,58,59,60,61],"lao":[53,54,55,56,57,58,59,60,61],"laot":[53,54,55,56,57,58,59,60,61],"kl":[62,63,64],"klo":[62,63,64],"klos":[62,63,64],"klose":[62,63,64],"a":[65,66,67,68],"am":[65,66,67,68],"amp":[65,66,67,68],"ampo":[65,66,67,68],"ampor":[65,66,67,68],"ampork":[65,66,67,68],"amporke":[65,66,67,68],"amporker":[65,66,67,68]},{"s":[2,3],"se":[2,3],"sel":[2,3],"sele":[2,3],"selek":[2,3],"selekt":[2,3],"selekte":[2,3],"selekteo":[2,3],"selekteom":[2,3],"sr":[4,5,6],"sre":[4,5,6],"srem":[4,5,6],"sremk":[4,5,6],"m":[7,8,9],"mo":[7,8,9],"mot":[7,8,9],"mote":[7,8,9],"motel":[7,8,9],"l":[10,11,12,13,16,17,18,19,20,21,22,23],"lo":[10,11,12,13,16,17,18,19,20,21,22,23],"lok":[10,11,12,13,16,17,18,19,20,21,22,23],"loko":[10,11,12,13,16,17,18,19,20,21,22,23],"t":[14,15,60,61,66],"tr":[14,15],"tra":[14,15],"traf":[14,15],"trafe":[14,15],"trafer":[14,15],"tap":[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"tapl":[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"taple":[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"e":[48,49,50,51,52,68],"ea":[48,49,50,51,52],"eat":[48,49,50,51,52],"eate":[48,49,50,51,52],"eatem":[48,49,50,51,52],"eatemk":[48,49,50,51,52],"p":[53,54,55,62,63,64],"pl":[53,54,55],"plo":[53,54,55],"plok":[53,54,55],"f":[56,57,58,59],"fl":[56,57,58,59],"flo":[56,57,58,59],"floa":[56,57,58,59],"float":[56,57,58,59],"floate":[56,57,58,59],"floatem":[56,57,58,59],"floatemk":[56,57,58,59],"te":[60,61,66],"tef":[60,61,66],"tefa":[60,61,66],"tefao":[60,61,66],"tefaol":[60,61,66],"tefaolt":[60,61,66],"po":[62,63,64],"pot":[62,63,64],"poto":[62,63,64],"potom":[62,63,64],"o":[67],"op":[67],"ope":[67],"opem":[67],"em":[68],"emt":[68],"emte":[68],"emter":[68],"emtera":[68],"emterak":[68],"emterakt":[68],"emterakte":[68],"emteraktef":[68],"emteraktefo":[68]},{"l":[3,35,64],"le":[3],"les":[3],"lest":[3],"lesta":[3],"t":[5,17,20,22,49,54,63],"te":[5,17,20,22,25,31,38,49,54,63],"tef":[5,17,25,49,54,63],"tefa":[5,17,25,49,54,63],"tefao":[5,17,25,49,54,63],"tefaol":[5,17,25,49,54,63],"tefaolt":[5,17,25,49,54,63],"k":[6,9,46],"ko":[6,9,23,29,46,50,51,55],"kom":[6,9,23,46,50,51,55],"st":[6,37,39],"sta":[6],"star":[6],"start":[6],"komt":[9,55],"komtr":[9],"komtro":[9],"komtrol":[9],"komtrola":[9],"komtrolat":[9],"komtrolato":[9],"ma":[10,11,12,13],"maf":[10,11,12,13],"e":[15,18,19,21,36,47,56,57,58,59],"em":[15,18,19,21,36,47],"emt":[15],"emte":[15],"emter":[15],"emtera":[15],"emterak":[15],"emterakt":[15],"emterakte":[15],"emteraktef":[15],"emteraktefo":[15],"ema":[18,19,21],"emak":[18,19,21],"emake":[18,19,21],"tes":[20,22],"test":[20,22],"komo":[23],"o":[26,27],"or":[26,27],"ort":[26,27],"orte":[26,27],"ortem":[26,27],"ortema":[26,27],"ortemak":[26,27],"ortemake":[26,27],"s":[28,33,37,39],"se":[28],"sel":[28],"sele":[28],"selek":[28],"seleke":[28],"kol":[29],"kolo":[29],"kolom":[29],"koloma":[29],"r":[30],"re":[30],"res":[30],"rese":[30],"reses":[30],"resese":[30],"p":[31,40,41,45],"po":[31,40],"pop":[31],"popo":[31],"popof":[31],"popofe":[31],"popofer":[31],"tr":[32],"tra":[32],"trak":[32],"sl":[33],"slo":[33],"slot":[33],"slots":[33],"m":[34],"me":[34],"mem":[34],"lo":[35],"loa":[35],"loat":[35],"loate":[35],"loatem":[35],"loatemk":[35],"emp":[36,47],"empt":[36,47],"empte":[36,47],"ste":[37],"stek":[37],"steke":[37],"tem":[38],"tems":[38],"temse":[38],"temset":[38],"temsete":[38],"str":[39],"stre":[39],"strep":[39],"strepe":[39],"strepet":[39],"por":[40],"port":[40],"porte":[40],"porter":[40],"portere":[40],"porteret":[40],"pe":[41],"per":[41],"pers":[41],"perse":[41],"perses":[41],"persest":[41],"perseste":[41],"persestem":[41],"persestemk":[41],"persestemke":[41],"persestemkea":[41],"mo":[43,44],"mot":[43,44],"moto":[43,44],"pa":[45],"pak":[45],"pake":[45],"sem":[52],"komte":[55],"komtem":[55],"komteme":[55],"komtemet":[55],"komtemeto":[55],"ea":[56,57,58,59],"eat":[56,57,58,59],"eate":[56,57,58,59],"eater":[56,57,58,59],"la":[64],"lap":[64],"lape":[64],"lapel":[64],"ke":[66],"ker":[66],"kera":[66],"kerat":[66],"kerato":[66],"ap":[67],"ape":[67],"aper":[67],"apert":[67],"aperto":[67]},{"k":[3,8,43],"ko":[3,8,31,34,38,54],"kom":[3,8,34,38,54],"of":[6],"ofs":[6],"ofse":[6],"ofset":[6],"komt":[8,34,54],"komtr":[8],"komtro":[8],"komtrol":[8],"komtrola":[8],"komtrolat":[8],"komtrolato":[8],"f":[9],"t":[11,21,57],"te":[11,29,33,36,57],"tef":[11,57],"tefa":[11,57],"tefao":[11,57],"tefaol":[11,57],"tefaolt":[11,57],"p":[12,49,52],"pa":[12,49,52],"pak":[12],"pakr":[12],"pakro":[12],"pakrom":[12],"pakromt":[12],"s":[13,41,44,45,46],"sr":[13],"sre":[13],"srem":[13],"sremk":[13],"e":[17,20,23,37],"em":[17,20,23],"ema":[17,20],"emak":[17,20],"emake":[17,20],"emakem":[17],"o":[18,19],"om":[18,19],"oml":[18,19],"omle":[18,19],"to":[21,22],"top":[21,22],"eml":[23],"emla":[23],"emlak":[23],"emlake":[23],"m":[26,27,28,50],"reo":[30],"reor":[30],"reort":[30],"reorte":[30],"reortem":[30],"reortema":[30],"reortemar":[30],"kol":[31],"kolo":[31],"kolom":[31],"koloma":[31],"kolomas":[31],"tro":[32],"trop":[32],"komte":[34,54],"komtes":[34],"komtest":[34],"komtesto":[34],"komtestoa":[34],"komtestoal":[34],"tes":[36],"test":[36],"testo":[36],"ea":[37],"eat":[37],"eate":[37],"eater":[37],"komp":[38],"kompa":[38],"kompak":[38],"kompakt":[38],"st":[41],"sto":[41],"stor":[41],"stora":[41],"storak":[41],"storake":[41],"kl":[43],"kle":[43],"klem":[43],"klemt":[43],"klemte":[43],"se":[44,45,46],"ser":[44],"serf":[44],"serfe":[44],"serfet":[44],"serfeto":[44],"serfetor":[44],"ses":[45],"sese":[45],"sel":[46],"sele":[46],"selek":[46],"seleke":[46],"par":[49,52],"para":[49,52],"mt":[50],"mte":[50],"mtek":[50],"mteke":[50],"a":[51],"ak":[51],"ake":[51],"akeo":[51],"akeom":[51],"akeome":[51],"akeomes":[51],"komtem":[54],"komteme":[54],"komtemet":[54],"komtemeto":[54],"lar":[55],"lark":[55],"larko":[55],"fa":[58],"far":[58],"fare":[58],"farea":[58],"faream":[58],"fareamt":[58],"pe":[64],"per":[64],"pers":[64],"perso":[64],"persom":[64],"persoma":[64],"persomal":[64],"persomale":[64],"persomales":[64],"persomalesa":[64],"persomalesat":[64],"persomalesato":[64]},{"1":[43],"13":[43],"137":[43],"kt":[3],"ktr":[3],"ktrl":[3],"e":[6,8,26],"em":[6,26],"emp":[6],"empe":[6],"empes":[6],"empesa":[6],"a":[6,58],"es":[8],"est":[8],"esta":[8],"estat":[8],"estato":[8],"t":[12,59],"ta":[12],"tar":[12],"tark":[12],"tes":[17],"test":[17],"testo":[17,20,22],"s":[18,19,29],"se":[18,29],"sem":[18],"sl":[19],"slo":[19],"slot":[19],"emakem":[21],"emt":[26],"emte":[26],"emter":[26],"emterm":[26],"emterma":[26],"ko":[27,30],"kom":[27],"komt":[27],"komtr":[27],"komtro":[27],"komtrol":[27],"komtrola":[27],"komtrolat":[27],"komtrolata":[27],"l":[28],"lt":[28],"lte":[28],"ltep":[28],"ltepl":[28],"lteple":[28],"ke":[29,33,41],"kek":[29],"kekp":[29],"kekpo":[29],"kekpos":[29],"kekpose":[29],"kekposes":[29],"sel":[29],"sele":[29],"selek":[29],"seleke":[29],"selekeo":[29],"selekeom":[29],"selekeoma":[29],"selekeomar":[29],"kol":[30],"kolo":[30],"kolom":[30],"koloma":[30],"kolomas":[30],"pot":[31],"te":[32,34],"kel":[33],"kelt":[33],"kelta":[33],"f":[34,44,55],"fe":[34,44],"fel":[34],"fela":[34],"p":[36],"pe":[36],"per":[36],"pers":[36],"perso":[36],"persom":[36],"persoma":[36],"persomal":[36],"persomale":[36],"persomales":[36],"persomalesa":[36],"persomalesat":[36],"persomalesato":[36],"sk":[37],"skr":[37],"skro":[37],"skrol":[37],"to":[37],"fet":[44],"fetk":[44],"o":[45],"op":[45],"opt":[45],"opte":[45],"opteo":[45],"opteom":[45],"opteoms":[45],"m":[52],"me":[52],"mef":[52],"mefe":[52],"mefel":[52],"kor":[54],"kort":[54],"korto":[54],"fo":[55],"fot":[55],"fote":[55],"foter":[55],"ap":[58],"aps":[58],"apso":[58],"apsol":[58],"apsolo":[58],"apsolot":[58],"apsolote":[58],"tr":[59],"tra":[59],"tram":[59],"trams":[59],"tramsp":[59],"tramspa":[59],"tramspar":[59],"tramspare":[59],"tramsparem":[59],"tramsparemt":[59],"tramsparemte":[59]},{"3":[52],"sef":[3],"seft":[3],"l":[6],"lo":[6],"los":[6],"em":[8,46],"emt":[8,46],"emte":[8,46],"emter":[8],"emterm":[8],"emtermo":[8],"t":[9,18],"te":[9,18],"tel":[9],"tes":[18],"test":[18],"testo":[18],"ek":[19],"ekm":[19],"ekmo":[19],"ekmor":[19],"ekmora":[19],"ekmorat":[19],"ekmorato":[19],"es":[20],"esk":[20],"esko":[20],"eskor":[20],"eskort":[20],"eskorta":[20],"a":[21,22],"ar":[21,22],"are":[21,22],"arep":[21,22],"arepa":[21,22],"s":[26,27,34],"so":[26,27],"sor":[26,27],"sort":[26,27],"sorta":[26],"sortap":[26],"sortapl":[26],"sortaple":[26],"kt":[28],"ktr":[28],"ktrl":[28],"to":[29,49],"tot":[29],"toto":[29],"tr":[30],"tra":[30],"trak":[30],"m":[31],"ter":[31],"tere":[31],"terek":[31],"tereko":[31],"f":[32,43],"fe":[32,43],"fel":[32,43],"fela":[32,43],"felas":[32,43],"e":[33,46],"sl":[34],"slo":[34],"slot":[34],"top":[37],"sem":[44],"semo":[44],"semol":[44],"semola":[44],"semolat":[44],"semolato":[44],"pe":[45],"per":[45],"pers":[45],"perso":[45],"persom":[45],"persoma":[45],"persomal":[45],"persomale":[45],"persomales":[45],"persomalesa":[45],"persomalesat":[45],"persomalesata":[45],"persomalesatas":[45],"emtek":[46],"emtekr":[46],"emtekra":[46],"emtekrat":[46],"emtekrata":[46],"tol":[49],"tolo":[49],"for":[55],"fora":[55]},{"1":[6],"2":[37],"10":[6],"20":[37],"10p":[6],"10ps":[6],"t":[6,55],"te":[6,55],"p":[9],"pa":[9],"pat":[9],"patr":[9],"patre":[9],"mo":[27],"mot":[27],"mote":[27],"sef":[28],"seft":[28],"selekt":[29],"selekte":[29],"selekteo":[29],"selekteom":[29],"tro":[30],"trop":[30],"e":[31],"em":[31],"r":[32,34],"ro":[32,34],"rof":[32,34],"rofs":[32],"ka":[33],"kap":[33],"kape":[33],"kapek":[33],"kapeke":[33],"kapeker":[33],"kapekera":[33],"tel":[55]},{"e":[27],"es":[27],"est":[27],"este":[27],"ester":[27],"esterm":[27],"esterma":[27],"estermal":[27],"selekt":[28],"selekta":[28],"selektap":[28],"selektapl":[28],"selektaple":[28],"ka":[31],"kap":[31],"kape":[31],"kapek":[31],"kapeke":[31],"kapeker":[31],"kapekera":[31],"traka":[32],"trakap":[32],"trakapl":[32],"trakaple":[32],"memo":[34],"f":[37],"fe":[37,55],"fel":[37],"fela":[37],"felas":[37],"fef":[55],"fefp":[55],"fefpo":[55],"fefpor":[55],"fefport":[55]}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-reference-tokens-story-vue", "kind": "story" }, "1": { "id": "src-reference-tokens-story-vue:src-reference-tokens-story-vue-0", "kind": "variant" }, "2": { "id": "src-composables-use-multi-selection-usemultiselection-story-vue", "kind": "story" }, "3": { "id": "src-composables-use-multi-selection-usemultiselection-story-vue:src-composables-use-multi-selection-usemultiselection-story-vue-0", "kind": "variant" }, "4": { "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue", "kind": "story" }, "5": { "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue:src-composables-use-scroll-shrink-usescrollshrink-story-vue-0", "kind": "variant" }, "6": { "id": "src-composables-use-scroll-shrink-usescrollshrink-story-vue:src-composables-use-scroll-shrink-usescrollshrink-story-vue-1", "kind": "variant" }, "7": { "id": "src-composables-use-optional-model-useoptionalmodel-story-vue", "kind": "story" }, "8": { "id": "src-composables-use-optional-model-useoptionalmodel-story-vue:src-composables-use-optional-model-useoptionalmodel-story-vue-0", "kind": "variant" }, "9": { "id": "src-composables-use-optional-model-useoptionalmodel-story-vue:src-composables-use-optional-model-useoptionalmodel-story-vue-1", "kind": "variant" }, "10": { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue", "kind": "story" }, "11": { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue:src-modules-header-logo-nav-m-header-logo-nav-story-vue-0", "kind": "variant" }, "12": { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue:src-modules-header-logo-nav-m-header-logo-nav-story-vue-1", "kind": "variant" }, "13": { "id": "src-modules-header-logo-nav-m-header-logo-nav-story-vue:src-modules-header-logo-nav-m-header-logo-nav-story-vue-2", "kind": "variant" }, "14": { "id": "src-modules-nav-drawer-m-nav-drawer-story-vue", "kind": "story" }, "15": { "id": "src-modules-nav-drawer-m-nav-drawer-story-vue:src-modules-nav-drawer-m-nav-drawer-story-vue-0", "kind": "variant" }, "16": { "id": "src-components-brand-logo-c-brand-logo-story-vue", "kind": "story" }, "17": { "id": "src-components-brand-logo-c-brand-logo-story-vue:src-components-brand-logo-c-brand-logo-story-vue-0", "kind": "variant" }, "18": { "id": "src-components-brand-logo-c-brand-logo-story-vue:src-components-brand-logo-c-brand-logo-story-vue-1", "kind": "variant" }, "19": { "id": "src-components-brand-logo-c-brand-logo-story-vue:src-components-brand-logo-c-brand-logo-story-vue-2", "kind": "variant" }, "20": { "id": "src-components-brand-logo-c-brand-logo-story-vue:src-components-brand-logo-c-brand-logo-story-vue-3", "kind": "variant" }, "21": { "id": "src-components-brand-logo-c-brand-logo-story-vue:src-components-brand-logo-c-brand-logo-story-vue-4", "kind": "variant" }, "22": { "id": "src-components-brand-logo-c-brand-logo-story-vue:src-components-brand-logo-c-brand-logo-story-vue-5", "kind": "variant" }, "23": { "id": "src-components-brand-logo-c-brand-logo-story-vue:src-components-brand-logo-c-brand-logo-story-vue-6", "kind": "variant" }, "24": { "id": "src-components-data-data-table-c-data-table-story-vue", "kind": "story" }, "25": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-0", "kind": "variant" }, "26": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-1", "kind": "variant" }, "27": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-2", "kind": "variant" }, "28": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-3", "kind": "variant" }, "29": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-4", "kind": "variant" }, "30": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-5", "kind": "variant" }, "31": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-6", "kind": "variant" }, "32": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-7", "kind": "variant" }, "33": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-8", "kind": "variant" }, "34": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-9", "kind": "variant" }, "35": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-10", "kind": "variant" }, "36": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-11", "kind": "variant" }, "37": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-12", "kind": "variant" }, "38": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-13", "kind": "variant" }, "39": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-14", "kind": "variant" }, "40": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-15", "kind": "variant" }, "41": { "id": "src-components-data-data-table-c-data-table-story-vue:src-components-data-data-table-c-data-table-story-vue-16", "kind": "variant" }, "42": { "id": "src-modules-data-data-table-m-data-table-story-vue", "kind": "story" }, "43": { "id": "src-modules-data-data-table-m-data-table-story-vue:src-modules-data-data-table-m-data-table-story-vue-0", "kind": "variant" }, "44": { "id": "src-modules-data-data-table-m-data-table-story-vue:src-modules-data-data-table-m-data-table-story-vue-1", "kind": "variant" }, "45": { "id": "src-modules-data-data-table-m-data-table-story-vue:src-modules-data-data-table-m-data-table-story-vue-2", "kind": "variant" }, "46": { "id": "src-modules-data-data-table-m-data-table-story-vue:src-modules-data-data-table-m-data-table-story-vue-3", "kind": "variant" }, "47": { "id": "src-modules-data-data-table-m-data-table-story-vue:src-modules-data-data-table-m-data-table-story-vue-4", "kind": "variant" }, "48": { "id": "src-components-content-section-heading-c-section-heading-story-vue", "kind": "story" }, "49": { "id": "src-components-content-section-heading-c-section-heading-story-vue:src-components-content-section-heading-c-section-heading-story-vue-0", "kind": "variant" }, "50": { "id": "src-components-content-section-heading-c-section-heading-story-vue:src-components-content-section-heading-c-section-heading-story-vue-1", "kind": "variant" }, "51": { "id": "src-components-content-section-heading-c-section-heading-story-vue:src-components-content-section-heading-c-section-heading-story-vue-2", "kind": "variant" }, "52": { "id": "src-components-content-section-heading-c-section-heading-story-vue:src-components-content-section-heading-c-section-heading-story-vue-3", "kind": "variant" }, "53": { "id": "src-components-layout-blog-c-layout-blog-story-vue", "kind": "story" }, "54": { "id": "src-components-layout-blog-c-layout-blog-story-vue:src-components-layout-blog-c-layout-blog-story-vue-0", "kind": "variant" }, "55": { "id": "src-components-layout-blog-c-layout-blog-story-vue:src-components-layout-blog-c-layout-blog-story-vue-1", "kind": "variant" }, "56": { "id": "src-components-layout-floating-header-c-layout-floating-header-story-vue", "kind": "story" }, "57": { "id": "src-components-layout-floating-header-c-layout-floating-header-story-vue:src-components-layout-floating-header-c-layout-floating-header-story-vue-0", "kind": "variant" }, "58": { "id": "src-components-layout-floating-header-c-layout-floating-header-story-vue:src-components-layout-floating-header-c-layout-floating-header-story-vue-1", "kind": "variant" }, "59": { "id": "src-components-layout-floating-header-c-layout-floating-header-story-vue:src-components-layout-floating-header-c-layout-floating-header-story-vue-2", "kind": "variant" }, "60": { "id": "src-components-layout-default-c-layout-default-story-vue", "kind": "story" }, "61": { "id": "src-components-layout-default-c-layout-default-story-vue:src-components-layout-default-c-layout-default-story-vue-0", "kind": "variant" }, "62": { "id": "src-components-nav-close-button-c-close-button-story-vue", "kind": "story" }, "63": { "id": "src-components-nav-close-button-c-close-button-story-vue:src-components-nav-close-button-c-close-button-story-vue-0", "kind": "variant" }, "64": { "id": "src-components-nav-close-button-c-close-button-story-vue:src-components-nav-close-button-c-close-button-story-vue-1", "kind": "variant" }, "65": { "id": "src-components-nav-hamburger-c-hamburger-story-vue", "kind": "story" }, "66": { "id": "src-components-nav-hamburger-c-hamburger-story-vue:src-components-nav-hamburger-c-hamburger-story-vue-0", "kind": "variant" }, "67": { "id": "src-components-nav-hamburger-c-hamburger-story-vue:src-components-nav-hamburger-c-hamburger-story-vue-1", "kind": "variant" }, "68": { "id": "src-components-nav-hamburger-c-hamburger-story-vue:src-components-nav-hamburger-c-hamburger-story-vue-2", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-DuglITBb.js"), true ? __vite__mapDeps([0,1]) : void 0);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
