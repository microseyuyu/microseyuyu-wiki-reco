import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode, a as createBaseVNode } from "./app-d0563074.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="试卷" tabindex="-1"><a class="header-anchor" href="#试卷" aria-hidden="true">#</a> 试卷</h1><p>试卷这里是指在学习完成后对知识点掌握情况的一种检测工具</p><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><p>每一张上传至该 Wiki 的试卷都必须以 markdown 的形式进行上传, 以及在进行测试的时候也需要使用 markdown 的形式去进行</p><p>而对应的源文件需要放至 github 中, 以及对应的链接需要在试卷的最后进行标注</p><h2 id="编号" tabindex="-1"><a class="header-anchor" href="#编号" aria-hidden="true">#</a> 编号</h2><p>这里的编号涉及到了两种编号 :</p><ul><li>试题</li><li>试卷</li></ul>', 8);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 24 24"
    }, [
      /* @__PURE__ */ createBaseVNode("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, [
        /* @__PURE__ */ createBaseVNode("circle", {
          cx: "12",
          cy: "12",
          r: "9"
        }),
        /* @__PURE__ */ createBaseVNode("path", { d: "M12 8h.01" }),
        /* @__PURE__ */ createBaseVNode("path", { d: "M11 12h1v4h1" })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "试题编号"),
    /* @__PURE__ */ createBaseVNode("p", null, "试题的代号为 : T -> Test"),
    /* @__PURE__ */ createBaseVNode("p", null, "编号格式 : T[00000num]"),
    /* @__PURE__ */ createBaseVNode("p", null, "正确的编号 : T000001; T001923; T011123;"),
    /* @__PURE__ */ createBaseVNode("p", null, "错误的编号 : T1; T0002; t233;")
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 24 24"
    }, [
      /* @__PURE__ */ createBaseVNode("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, [
        /* @__PURE__ */ createBaseVNode("circle", {
          cx: "12",
          cy: "12",
          r: "9"
        }),
        /* @__PURE__ */ createBaseVNode("path", { d: "M12 8h.01" }),
        /* @__PURE__ */ createBaseVNode("path", { d: "M11 12h1v4h1" })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "试卷编号"),
    /* @__PURE__ */ createBaseVNode("p", null, "试卷的代号为 : TP -> Test paper"),
    /* @__PURE__ */ createBaseVNode("p", null, "编号格式 : TP[0000num]"),
    /* @__PURE__ */ createBaseVNode("p", null, "正确的编号 : TP00001; TP01829 ; TP18629;"),
    /* @__PURE__ */ createBaseVNode("p", null, "错误的编号 : TP1; TP002; tp233;")
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = [
  _hoisted_1,
  _hoisted_9,
  _hoisted_10
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
