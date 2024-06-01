/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      barlowCondensed: ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}