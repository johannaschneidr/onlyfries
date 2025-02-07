/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fries-yellow': '#FFB800',
        'fries-light': '#FFE4B0',
      },
      fontFamily: {
        'script': ['Dancing Script', 'cursive'], // or any other script font you prefer
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

