/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'chocolate': '#d2691e',
        'chocolate-2': '#C45F17'
      },
      fontFamily: {
        'noto-sans-thai': ['Noto Sans Thai' , 'sans-serif'] 
      }
    },
  },
  plugins: [],
}