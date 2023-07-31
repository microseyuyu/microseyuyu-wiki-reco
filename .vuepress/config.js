import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    logo: '/logo.png',
    authorAvatar: '/shinoaki.JPG',
    author: 'yuyu',
    docsRepo: 'https://github.com/microseyuyu/microseyuyu-wiki',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: 'Last Updated',
    autoSetBlogCategories: true,
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: 'categories', // 默认 categories
      tagText: 'tags' // 默认 tags
    },
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
      "/blogs/Test pages/":[
        {
          text: "Test pages",
          children: ["README","T-Search","TP00001"],
          collapsible: true,
        },
      ],
      "/blogs/Test reports/": [
        {
          text: "Test reports",
          children: ["TR1"],
          collapsible: true,
        },
      ],
      "/blogs/Fleet notes/": [
        {
          text: "Fleet notes",
          children:[""],
          collapsible: true,
        },
      ],
      "/blogs/Permanent Notes/":[
        {
          text: "Permanent Notes",
          children:[""],
          collapsible: true,
        }
      ],
      "/blogs/Gaokao reports":[
        {
          text: "Gaokao reports",
          children: [""],
          collapsible: true,
        }
      ],
      "/blogs/Gaokao pages":[
        {
          text:"Gaokao pages",
          children: [""],
          collapsible: true,
        }
      ],
      "/blogs/Literature notes/": [
        {
          text: "Literature notes",
          children: ["LN1","LN2"],
          collapsible: true,
        },

      ],
    },
    navbar: [
          { text: "Home", link: "/" },
          { text: "Management by Projects", link:"/docs/MBP/"},
    ],
    autoSetBlogCategories: true,
    autoSetSeries: true,
    // vuePreviewsDir: './example/.vuepress/vue-previews',
   //  componentsDir: './example/.vuepress/components',
    password: ['14e1b600b1fd579f47433b88e8d85291'],
    // primaryColor: '#3aa675',
  }),
  debug: true,
})
