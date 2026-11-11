// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      // le pagine impostano solo il proprio titolo, il suffisso arriva da qui
      titleTemplate: '%s | Salento.bike',
      title: 'Salento in bici',
      meta: [
        {
          name: 'description',
          content: 'Salento.bike: ciclovie, percorsi e consigli per scoprire il Salento in bicicletta, tra la costa ionica di Ciclonica e quella adriatica di Ladriatica.',
        },
      ],
      // favicon dichiarata esplicitamente: Google la legge dal <link> della home
      // per mostrarla nei risultati di ricerca (256x256, quadrata, sopra i 48px consigliati)
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: [
    '~/assets/css/reset.css',
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/variables.css',
    '~/assets/css/fonts.css',
    'aos/dist/aos.css',
    '~/assets/css/main.css',
  ],

  modules: ['@nuxt/icon', 'nuxt-swiper', '@nuxt/image', '@nuxtjs/sitemap'],

  // stesso host e stessa forma degli URL serviti da Aruba: salento.bike fa 301
  // verso www, e Apache aggiunge lo slash finale alle cartelle (/chi-siamo -> /chi-siamo/).
  // Così la sitemap elenca solo URL che rispondono 200, senza redirect.
  site: { url: 'https://www.salento.bike', trailingSlash: true },

  // i link interni puntano già all'URL finale con lo slash, niente 301 per i crawler
  experimental: {
    defaults: {
      nuxtLink: { trailingSlash: 'append' },
    },
  },

  // niente foglio di stile XSL (/__sitemap__/style.xsl): serve solo a rendere
  // leggibile la sitemap nel browser, Google lo ignora, e il file manager
  // dell'hosting ne blocca il caricamento
  sitemap: { xsl: false },

  // icone dai pacchetti @iconify-json/* locali, incluse nel bundle client:
  // nessuna richiesta a runtime verso api.iconify.design
  icon: {
    serverBundle: 'local',
    clientBundle: { scan: true },
  },

  image: {
    quality: 80,
    // breakpoint Bootstrap, così i prefissi in `sizes` coincidono con col-md/col-lg
    screens: { xs: 320, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 },
  },
})