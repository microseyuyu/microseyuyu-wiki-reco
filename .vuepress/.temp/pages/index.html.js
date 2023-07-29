export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"modules\":[\"BannerBrand\",\"Blog\",\"MdContent\",\"Footer\"],\"bannerBrand\":{\"bgImage\":\"/bg.svg\",\"title\":\"Herzlich willkommen\",\"description\":\"Welcome to yuyu's personal wiki\",\"tagline\":null,\"buttons\":[{\"text\":\"About\",\"link\":\"/docs/About/\"},{\"text\":\"Fleet notes\",\"link\":\"/docs/FN/\",\"type\":\"plain\"},{\"text\":\"Literature notes\",\"link\":\"/docs/LN/\",\"type\":\"plain\"},{\"text\":\"Permanent notes\",\"link\":\"/docs/PN/\",\"type\":\"plain\"},{\"text\":\"Test paper\",\"link\":\"/docs/TP/\",\"type\":\"plain\"},{\"text\":\"Test report\",\"link\":\"/docs/TR/\",\"type\":\"plain\"},{\"text\":\"Gaokao question\",\"link\":\"/docs/GKQ/\",\"type\":\"plain\"},{\"text\":\"Gaokao report\",\"link\":\"/docs/GKR/\",\"type\":\"plain\"}],\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/microseyuyu/microseyuyu-wiki-source\"}]},\"blog\":{\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/microseyuyu\"}]},\"isShowTitleInHome\":true},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

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
