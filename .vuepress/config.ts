import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    author: "microseyuyu",
    authorAvatar: "/shinoaki.JPG",
    docsRepo: "https://github.com/microseyuyu/microseyuyu-wiki",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "2023/07/11",
    plugins:[
      'backToTopPlugin',
      'activeHeaderLinksPlugin',
      'vuepress-plugin-mermaidjs',
      'vuepress-plugin-mermaidjs@2.0.0-beta.2',
    ],
    // series 为原 sidebar
    series: {
      "/docs/MBP/": [
        {
          text:"Management by Projects",
          children:["MBP","1","2","3",
          "project_charte","mba","Requirements_Document",
          "Requirements_Management_Plan",
          "Requirements_Traceability_Matrix",
          "Project_Scope_Statement"],
        },
      ],
      "/docs/TP/":[
        {
          text: "Test Paper",
          children: ["README","T-Search","TP00001"],
          collapsible: true,
        },
      ],
      "/docs/TR/": [
        {
          text: "Test Report",
          children: ["TR1"],
          collapsible: true,
        },
  
      ],
      "/docs/LN/": [
        {
          text: " Literature notes",
          children: ["LN1","LN2"],
          collapsible: true,
        },
  
      ],
    },

    navbar: [
      { text: "Home", link: "/" },
      { text: "Categories", link: "/categories/" },
      { text: "Management by Projects", link:"/docs/MBP/"},
    ],

   
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
