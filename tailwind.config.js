/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1728px',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darkBlue': '#042A3C',
      'orange': '#E57428',
      'white': '#FFFFFF',
      'blue': '#77B9F2',
      'black': '#070F11',
      'grey': '#EFEFEF',
    },
    fontFamily: {
      'sans': 'Montserrat, sans-serif',
    },  
  },
  plugins: [],
}
