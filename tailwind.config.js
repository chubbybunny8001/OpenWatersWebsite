/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-water": "url('/images/Water_Background.png')"
      },
      fontFamily: {
        "berkshire": ['"Berkshire Swash", serif']
      },
      colors: {
        "brand-primary": "#BAD3F1",
        "brand-secondary": "#2A628F",
        "brand-tertiary": "#729FC0",
        "brand-black": "#020304",
        "brand-white": "#EFF5FA",
        "brand-gray": "#B3B9BC",
        "brand-red": "#8D0935",
        "brand-green": "#17503F",
        "brand-yellow": "#D4E166"
      }
    },
  },
  plugins: [],
};
