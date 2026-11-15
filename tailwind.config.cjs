/** @type {import('tailwindcss').Config} */
const { heroui } = require('@heroui/react')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sunward: {
          forest: '#24483a',
          cream: '#f8f8f3',
          amber: '#efa940',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
}
