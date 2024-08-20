const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: url("images/hero-img.jpg"),
      }),
    },
  },
  plugins: [require("flowbite/plugin")],
};
