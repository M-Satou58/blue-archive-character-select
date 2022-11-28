/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors: {
      white: "#fff",
      black: "#222222",
      blue: "#00ACFE",
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
