/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      sm:'390px',
      md:'810px',
      lg:'1280px',
      xl:'1440px',
      'phone': '390px',
      'tablet': '810px',
      'desktop': '1280px',
      'wide': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

