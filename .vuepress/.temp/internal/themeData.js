export const themeData = JSON.parse("{\"style\":\"@vuepress-reco/style-default\",\"author\":\"microseyuyu\",\"authorAvatar\":\"/shinoaki.JPG\",\"docsRepo\":\"https://github.com/microseyuyu/microseyuyu-wiki-source\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"2023/07/11\",\"plugins\":[\"backToTopPlugin\",\"activeHeaderLinksPlugin\"],\"series\":{\"/docs/Inbox/HT/G1/\":[{\"text\":\"历史教案\",\"children\":[\"5\",\"6\",\"7\",\"8\"]}],\"/docs/wiki's_project/\":[{\"text\":\"About this project\",\"children\":[\"1\",\"2\",\"3\"]}],\"/docs/theme-reco/\":[{\"text\":\"module one\",\"children\":[\"home\",\"theme\"]},{\"text\":\"module two\",\"children\":[\"api\",\"plugin\"]}]},\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Categories\",\"link\":\"/categories/Japanese/1/\"},{\"text\":\"wiki's project\",\"link\":\"/docs/wiki's_project/1\"}]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
