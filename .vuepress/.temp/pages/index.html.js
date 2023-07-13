export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"modules\":[\"BannerBrand\",\"Blog\",\"MdContent\",\"Footer\"],\"bannerBrand\":{\"bgImage\":\"/bg.svg\",\"title\":\"Herzlich willkommen\",\"description\":\"Welcome to yuyu's personal wiki\",\"tagline\":null,\"buttons\":[{\"text\":\"About\",\"link\":\"/docs/About/1\"}],\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/microseyuyu/microseyuyu-wiki-source\"}]},\"blog\":{\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/microseyuyu\"}]},\"isShowTitleInHome\":true},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

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
