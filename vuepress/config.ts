import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    author: "microseyuyu",
    authorAvatar: "/shinoaki.JPG",
    docsRepo: "https://github.com/microseyuyu/microseyuyu-wiki-source",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "2023/07/11",
    // series 为原 sidebar
    series: {
      "/docs/Inbox/HT/G1/":[
        {
          text:"历史教案",
          children:["5","6","7","8"],
        },
      ],
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Categories", link: "/categories/Japanese/1/" },
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
