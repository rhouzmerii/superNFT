/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#15BFFD",
        secondary: "#080B2A",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
      paytone: ["Paytone One", "sans-serif"],
      peralta: ["Peralta", "cursive"],
      clash: ["Clash Display", "sans-serif"],
      kanit: ["Kanit", " sans-serif"],
      inter: ["Inter", " sans-serif"],
    },
  },
  plugins: [],
}
