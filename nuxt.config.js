export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-11-05',

  router: {
    base: '/',
    routeNameSplitter: '-',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    middleware: ['auth'],
    scrollBehavior: true,
    trailingSlash: true,
  },

  router: {
    routes: [
      {
        path: '/',
        component: './pages/index.vue', // Set the default start page to index.vue
      },
    ],
  },

  modules: [
    ['@nuxt/icon'],
    // ['@nuxtjs/google-adsense', {
    //   id: 'ca-pub-3474796013546911',
    //   test: true
    // }]
  ],

  // googleAdsense: {
  //   id: 'ca-pub-3474796013546911',
  //   onPageLoad: true,
  //   pageLevelAds: true,
  //   adSlot: '9740096598',
  //   adFormat: 'auto',
  //   test: true
  // },


  // publicRuntimeConfig: {
  //   googleAdsense: {
  //     id: process.env.GOOGLE_ADSENSE_ID,
  //     test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true',
  //   },
  // },
})