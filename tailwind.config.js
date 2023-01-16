const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue == undefined) {
      return `rgb(var(${variableName}))`;
    }
    return `rgba(var(${variableName}), ${opacityValue})`;
  };
};

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
      borderColor: {
        primary: withOpacity("--fill-primary"),
      },

      boxShadowColor: {
        primary: withOpacity("--fill-primary"),
      },

      textColor: {
        "color-base": "var(--color-text-base)",
        "color-base-alt": "var(--color-text-base-alt)",
        "color-base-dark": "var(--color-text-dark-base)",
        "color-base-dark-alt": "var(--color-text-dark-base-alt)",
        primary: "var(--color-text-primary)",
        muted: "var(--color-text-muted)",
        inverted: "var(--color-text-inverted)",
      },

      backgroundColor: {
        "body-dark": withOpacity("--body-bg-dark"),
        primary: withOpacity("--fill-primary"),
        "primary-alt": withOpacity("--fill-primary-alt"),
        body: withOpacity("--body-bg"),
      },

      gradientColorStops: {
        primary: "rgb(var(--fill-primary))",
        "primary-alt": "rgb(var(--fill-primary-alt))",
      },

      animation: {
        animateText: "typingText 4s steps(12) infinite",
        spin2: "spin 4s linear infinite;",
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
