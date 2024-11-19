const konstaConfig = require("konsta/config");

module.exports = konstaConfig({
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  konsta: {
    colors: {
      primary: '#fca311',
      'brand-red': '#ff0000',
      'brand-green': '#00ff00',
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],

});
