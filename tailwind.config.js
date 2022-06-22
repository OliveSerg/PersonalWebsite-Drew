const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#e1b137",
          DEFAULT: "#ae841a",
          dark: "#9b7617",
        },
      },
      fontFamily: {
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
