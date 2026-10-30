// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/css/reset.css',
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/variables.css',
    '~/assets/css/fonts.css',
    'aos/dist/aos.css',
    '~/assets/css/main.css',
  ],

  modules: ['@nuxt/icon', 'nuxt-swiper', '@nuxt/image'],

  image: {
    quality: 80,
    // breakpoint Bootstrap, così i prefissi in `sizes` coincidono con col-md/col-lg
    screens: { xs: 320, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 },
  },
})