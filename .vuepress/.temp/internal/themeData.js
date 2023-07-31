export const themeData = JSON.parse("{\"style\":\"@vuepress-reco/style-default\",\"author\":\"microseyuyu\",\"authorAvatar\":\"/shinoaki.JPG\",\"docsRepo\":\"https://github.com/microseyuyu/microseyuyu-wiki\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"Last Updated\",\"autoSetBlogCategories\":true,\"autoAddCategoryToNavbar\":{\"location\":1,\"categoryText\":\"Categories\",\"tagText\":\"Tags\"},\"plugins\":[\"backToTopPlugin\",\"activeHeaderLinksPlugin\"],\"series\":{\"/docs/MBP/\":[{\"text\":\"Management by Projects\",\"children\":[\"MBP\",\"1\",\"2\",\"3\",\"project_charte\",\"mba\",\"Requirements_Document\",\"Requirements_Management_Plan\",\"Requirements_Traceability_Matrix\",\"Project_Scope_Statement\"]}],\"/blogs/TP/\":[{\"text\":\"Test Paper\",\"children\":[\"README\",\"T-Search\",\"TP00001\"],\"collapsible\":true}],\"/blogs/TR/\":[{\"text\":\"Test Report\",\"children\":[\"TR1\"],\"collapsible\":true}],\"/blogs/FL/\":[{\"text\":\"Fleet notes\",\"children\":[\"\"],\"collapsible\":true}],\"/blogs/PN/\":[{\"text\":\"Permanent notes\",\"children\":[\"\"],\"collapsible\":true}],\"/blogs/GKQ\":[{\"text\":\"Gaokao question\",\"children\":[\"\"],\"collapsible\":true}],\"/blogs/GKR\":[{\"text\":\"Gaokao report\",\"children\":[\"\"],\"collapsible\":true}],\"/blogs/LN/\":[{\"text\":\" Literature notes\",\"children\":[\"LN1\",\"LN2\"],\"collapsible\":true}]},\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Management by Projects\",\"link\":\"/docs/MBP/\"}]}")

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
