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
        'sans': ['Geist', 'sans-serif'],
        'mono': ['Geist Mono', 'monospace'],
        'script': ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

