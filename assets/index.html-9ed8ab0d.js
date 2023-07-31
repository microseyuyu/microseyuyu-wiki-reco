import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode, a as createBaseVNode, b as createTextVNode } from "./app-d0563074.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="试题报告" tabindex="-1"><a class="header-anchor" href="#试题报告" aria-hidden="true">#</a> 试题报告</h1><p>试题报告是指在完成了试卷之后所产生的一个报告, 主要用途如下 :</p><ul><li>反馈考试的结果</li><li>对该知识点的掌握情况</li><li>对知识点的补充</li><li>反馈学习状态</li></ul><h2 id="编号" tabindex="-1"><a class="header-anchor" href="#编号" aria-hidden="true">#</a> 编号</h2><p>试题报告的代号为 : TR -&gt; Test report</p>', 5);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
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
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "如何编号"),
    /* @__PURE__ */ createBaseVNode("p", null, "正确的编号 : TR#1; TR#23; TR#98"),
    /* @__PURE__ */ createBaseVNode("p", null, "错误的编号 : TR1; tr2; TR#000001")
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container warning" },
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
        /* @__PURE__ */ createBaseVNode("path", { d: "M12 8v4" }),
        /* @__PURE__ */ createBaseVNode("path", { d: "M12 16h.01" })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "其他说明"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("由于在 "),
      /* @__PURE__ */ createBaseVNode("code", null, "config.ts"),
      /* @__PURE__ */ createTextVNode(" 中输入带有 "),
      /* @__PURE__ */ createBaseVNode("code", null, "#"),
      /* @__PURE__ */ createTextVNode(" 的内容会导致无法识别的情况, 所以在文件夹内需要使用其他的命名方式")
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, "例如 : TR#1 -> TR1; TR#23 -> TR23"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("但是显示在该 Wiki 中的内容必须是严格按照以上 "),
      /* @__PURE__ */ createBaseVNode("code", null, "如何编号"),
      /* @__PURE__ */ createTextVNode(" 中的规则进行展示")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "模板",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#模板",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 模板")
  ],
  -1
  /* HOISTED */
);
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
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "模板"),
    /* @__PURE__ */ createBaseVNode("h2", {
      id: "测试基本情况",
      tabindex: "-1"
    }, [
      /* @__PURE__ */ createBaseVNode("a", {
        class: "header-anchor",
        href: "#测试基本情况",
        "aria-hidden": "true"
      }, "#"),
      /* @__PURE__ */ createTextVNode(" 测试基本情况")
    ]),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "日期："),
      /* @__PURE__ */ createBaseVNode("li", null, "测试内容："),
      /* @__PURE__ */ createBaseVNode("li", null, "测试形式："),
      /* @__PURE__ */ createBaseVNode("li", null, "测试目标：")
    ]),
    /* @__PURE__ */ createBaseVNode("h2", {
      id: "测试结果",
      tabindex: "-1"
    }, [
      /* @__PURE__ */ createBaseVNode("a", {
        class: "header-anchor",
        href: "#测试结果",
        "aria-hidden": "true"
      }, "#"),
      /* @__PURE__ */ createTextVNode(" 测试结果")
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, "正确率："),
    /* @__PURE__ */ createBaseVNode("p", null, "结果："),
    /* @__PURE__ */ createBaseVNode("h2", {
      id: "测试反馈与分析",
      tabindex: "-1"
    }, [
      /* @__PURE__ */ createBaseVNode("a", {
        class: "header-anchor",
        href: "#测试反馈与分析",
        "aria-hidden": "true"
      }, "#"),
      /* @__PURE__ */ createTextVNode(" 测试反馈与分析")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "custom-container warning" }, [
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
          /* @__PURE__ */ createBaseVNode("path", { d: "M12 8v4" }),
          /* @__PURE__ */ createBaseVNode("path", { d: "M12 16h.01" })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "WARNING"),
      /* @__PURE__ */ createBaseVNode("p", null, "题目"),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "正确选项 :"),
        /* @__PURE__ */ createBaseVNode("li", null, "错误原因 :"),
        /* @__PURE__ */ createBaseVNode("li", null, "解析 :"),
        /* @__PURE__ */ createBaseVNode("li", null, "建议与改进 :"),
        /* @__PURE__ */ createBaseVNode("li", null, "知识点分布 :")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><table><thead><tr><th>错误原因</th><th>占比</th><th>原因</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table>', 2);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
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
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "状态"),
    /* @__PURE__ */ createBaseVNode("p", null, "是否需要重新测试")
  ],
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<h2 id="改进" tabindex="-1"><a class="header-anchor" href="#改进" aria-hidden="true">#</a> 改进</h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 需要对一下的知识点进行补充</li></ul><ol><li>知识点 1</li><li>知识点 2</li><li>知识点 3</li><li>知识点 4</li></ol><p>:::</p>', 4);
const _hoisted_17 = [
  _hoisted_1,
  _hoisted_6,
  _hoisted_7,
  _hoisted_8,
  _hoisted_9,
  _hoisted_10,
  _hoisted_12,
  _hoisted_13
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
