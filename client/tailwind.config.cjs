/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FBE1B1",
        "primary-400": "#F8C462",
        "primary-600": "#F6AA1C",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
