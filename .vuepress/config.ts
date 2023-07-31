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
    lastUpdatedText: "Last Updated",
     // 自动设置分类
     autoSetBlogCategories: true,
     // 自动将分类和标签添加至头部导航条
     autoAddCategoryToNavbar: {
       location: 1, // 默认 0
       categoryText: 'Categories', // 默认 categories
       tagText: 'Tags' // 默认 tags
     },
    plugins:[
      'backToTopPlugin',
      'activeHeaderLinksPlugin',
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
      "/blogs/TP/":[
        {
          text: "Test Paper",
          children: ["README","T-Search","TP00001"],
          collapsible: true,
        },
      ],
      "/blogs/TR/": [
        {
          text: "Test Report",
          children: ["TR1"],
          collapsible: true,
        },
      ],
      "/blogs/FL/": [
        {
          text: "Fleet notes",
          children:[""],
          collapsible: true,
        },
      ],
      "/blogs/PN/":[
        {
          text: "Permanent notes",
          children:[""],
          collapsible: true,
        }
      ],
      "/blogs/GKQ":[
        {
          text: "Gaokao question",
          children: [""],
          collapsible: true,
        }
      ],
      "/blogs/GKR":[
        {
          text:"Gaokao report",
          children: [""],
          collapsible: true,
        }
      ],
      "/blogs/LN/": [
        {
          text: " Literature notes",
          children: ["LN1","LN2"],
          collapsible: true,
        },
  
      ],
    },

    navbar: [
      { text: "Home", link: "/" },
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
