/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#13212f',  // Dunkles Blau
        'secondary': '#d3d5d9', // Hellgrau
        'accent': '#006ade',    // Helles Blau
        'highlight': '#1387eb', // Leuchtendes Blau
        'header': '#1a2a3f',    // Dunkles Blau für Header
      }
    },
  },
  plugins: [],
}
