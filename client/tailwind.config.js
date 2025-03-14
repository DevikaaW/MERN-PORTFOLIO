/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#072042",
        secondary: "#f18f01",
        tertiary: "#048ba8",
      },
    },
    screens: {
      sm: {max:'1000px'},

      lg: {max:'2024px'},
   
    }
  },
  plugins: [],
};
