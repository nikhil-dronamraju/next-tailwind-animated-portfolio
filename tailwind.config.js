/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'Bilbo':['"Bilbo Swash Caps"', 'cursive'],
      'Shadows-Into-Light':['"Shadows Into Light"', 'cursive'],
      'Montserrat':['"Montserrat"', 'cursive']
    }
  },
  plugins: [],
}