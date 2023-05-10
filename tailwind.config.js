/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontSize: {
      // 12px
      xs: "0.75rem",
      // 14px
      sm: "0.875rem",
      // 16px
      base: "1rem",
      // 18px
      lg: "1.125rem",
      // 20px
      xl: "1.25rem",
      // 24px
      "2xl": ["1.5rem", "2rem"],
      // 30px
      "3xl": "1.875rem",
      // 32px
      "4xl": "2rem",
      // 48px
      "5xl": ["3rem", "3.5rem"],
      // 52px
      "6xl": ["3.25rem", "4rem"],
      // 64px
      "7xl": ["4rem", "4.6rem"],
      // 68px
      "8xl": "4.25rem",
      // 96px
      "9xl": "6rem",
    },
    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",
      "bit-dark": "#455a64",
      "light-white": "#c6c6c6",
      "light-one": "#9a9a9a",
      "light-grey": "#505050",
      "light-black": "#6d6d6d",
      success: "#D0FCE9",
      "light-success": "#0D5E3C",
      orange: "#EA836E",
      "light-orange": "#ED7960",
      "light-purple": "#788efb",
      darken: "#333333",
    },
    fontFamily: {
      Poppins: ["Poppins"],
      Caveat: ["Caveat"],
      Futura: ["Futura"],
    },
    borderRadius: {
      none: "0px;",
      // 2px
      sm: "0.125rem",
      // 4px
      base: "0.25rem",
      // 6px
      md: "0.375rem",
      // 8px
      lg: "0.5rem",
      // 10px
      xl: "0.625rem",
      // 12px
      "2xl": "0.75rem;",
      // 14px
      "3xl": "0.875rem",
      // full
      full: "9999px;",
    },
    borderColor: {
      transparent: "transparent",
      gray: "#C3CACD",
      success: "#4EBB68",
      "light-purple": "#788efb",
      "light-white": "#c6c6c6",
      orange: "#EA836E",
    },
  },
  plugins: [],
};
