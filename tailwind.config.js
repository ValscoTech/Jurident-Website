/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        satoshi: ['Satoshi', 'sans'],
        mesagrande: ['Mesa Grande', 'sans'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}