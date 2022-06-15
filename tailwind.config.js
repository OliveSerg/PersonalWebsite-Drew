const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
