export const data = JSON.parse("{\"key\":\"v-4e8ef699\",\"path\":\"/blogs/About/\",\"title\":\"关于这个 Wiki\",\"lang\":\"en-US\",\"frontmatter\":{\"categories\":[\"About\"]},\"headers\":[{\"level\":2,\"title\":\"知识库模块\",\"slug\":\"知识库模块\",\"link\":\"#知识库模块\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blogs/About/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
