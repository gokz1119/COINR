/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'white': '#ffffff',
      'gray': '#A3A3A3',
      'red': '#D54848',
      'red-variant': '#C82D2D',
      'blue-primary': '#3379D5',
      'blue-primary-variant': '#235DA9',
      'blue-secondary': '#454D73',
      'blue-tertiary': '#0A1D39',
      'blue-background': '#01131E'
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
