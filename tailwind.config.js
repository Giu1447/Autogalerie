/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'main' : '#082072',
        'second' : '#9a9285',
        'third' : '#dbe2e1'
      }
    },
  },
  plugins: [],
}
