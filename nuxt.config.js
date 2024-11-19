export default defineNuxtConfig({
  app: {
    head: {
      title: "Saint Seiya App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },

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

  modules: ['nuxt-icons', "@nuxt/ui"],
});
