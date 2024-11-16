export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-11-05",

  router: {
    base: "/",
    routeNameSplitter: "-",
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    middleware: ["auth"],
    scrollBehavior: true,
    trailingSlash: true,
  },

  router: {
    routes: [
      {
        path: "/",
        component: "./pages/index.vue", // Set the default start page to index.vue
      },
    ],
  },

  modules: [["@nuxt/icon"], "@nuxt/ui"],
});
