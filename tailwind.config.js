/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,php}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class", // or media & false
  theme: {
    fontSize: {
      xs: ["10px", "14px"],
      sm: ["12px", "16px"],
      base: ["14px", "20px"],
      md: ["18px", "24px"],
      lg: ["22px", "28px"],
      xl: ["26px", "32px"],
      "2xl": ["30px", "36px"],
      "3xl": ["34px", "40px"],
    },
    extend: {
      animation: {
        fillBars: "fillBars 10s ease-in-out",
        animateText: "typingText 4s steps(12) infinite",
      },
      padding: {
        "1/3": "33.333333%",
        "2/3": "66.666667",
      },
      fontFamily: {
        Courgette: ["Courgette, cursive"],
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
