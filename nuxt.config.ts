// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/reset.css',
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/variables.css',
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ],
})
