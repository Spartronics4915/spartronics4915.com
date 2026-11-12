// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'github-pages'
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
  ],
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',
  css: [
    "~/assets/styles.css"
  ],
})
