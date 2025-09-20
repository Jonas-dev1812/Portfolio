module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        tigel: {
          100: "#FFFFFF",
          200: "#F1B6AC",
          300: "#E26854",
          400: "#D43D23",
          500: "#B1321E",
          600: "#8D2818",
          700: "#6A1E11",
          800: "#4F160D",
          900: "#350F08",
        },
        cream: {
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FBFBFA",
          400: "#D2CBBF",
          500: "#B7AB98",
          600: "#9B8A70",
          700: "#766852",
          800: "#584E3E",
          900: "#3B3429",
        },
      },
    },
  },
  plugins: [],
};
