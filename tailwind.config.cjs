/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",

      black: "#000000",
      gray: {
        100: "#837e9f",
        200: "#302f3d",
        500: "#22212C",
      },
      green: "#00FF00",
      sand: "#E7DE79",
      rose: "#cb92b1",
    },
    extend: {
      fontFamily: {
        sans: "Merriweather Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
