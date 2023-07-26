export const themeData = JSON.parse("{\"style\":\"@vuepress-reco/style-default\",\"author\":\"microseyuyu\",\"authorAvatar\":\"/shinoaki.JPG\",\"docsRepo\":\"https://github.com/microseyuyu/microseyuyu-wiki\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"2023/07/11\",\"plugins\":[\"backToTopPlugin\",\"activeHeaderLinksPlugin\"],\"series\":{\"/docs/MBP/\":[{\"text\":\"Management by Projects\",\"children\":[\"MBP\",\"1\",\"2\",\"3\",\"project_charte\",\"mba\",\"Requirements_Document\",\"Requirements_Management_Plan\",\"Requirements_Traceability_Matrix\",\"Project_Scope_Statement\"]}],\"/docs/TP/\":[{\"text\":\"Test Paper\",\"children\":[\"README\",\"T-Search\",\"TP00001\"],\"collapsible\":true}]},\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Categories\",\"link\":\"/categories/\"},{\"text\":\"Management by Projects\",\"link\":\"/docs/MBP/\"}]}")

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
