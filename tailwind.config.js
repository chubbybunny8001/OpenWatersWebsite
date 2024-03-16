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
        "brand-black": "#020304"
      }
    },
  },
  plugins: [],
};
