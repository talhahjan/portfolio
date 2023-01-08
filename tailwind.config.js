/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,php}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class", // or media & false
  theme: {
    extend: {
      animation: {
        fillBars: "fillBars 10s ease-in-out",
      },
      padding: {
        "1/3": "33.333333%",
        "2/3": "66.666667",
      },
      fontFamily: {
        Courgette: ["Courgette, cursive"],
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
