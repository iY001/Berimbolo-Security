/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#141c1c',
        'secondary': '#dddddd',
        'tertiary': '#f5f5f5',
        'dark': '#0f59ff',
        'warning': "#e2b95d"
      },
    },
    
  },
  
  plugins: [],
}