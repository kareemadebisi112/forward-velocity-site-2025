/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Archivo', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'archivo': ['Archivo', 'sans-serif'],
      },
      colors: {
        'green': '#159653',
        'light-green': '#6FD287',
        'green-link': '#6FD287',
        'white': '#FFFFFF',
        'c': '#999999',
        'gray-bg': '#2B2B2B',
        'dark-gray': '#191919',
        'black-dark': '#000000',
        'black-fade': '#101010',
        'fade-green': '#6A8C69',
        'fade-gray': '#E7EBE7',
        'gray-text-fade': '#A0ACA1',
      },
    },
  },
  plugins: [],
}
