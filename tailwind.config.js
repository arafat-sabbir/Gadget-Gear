/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      colors:{
        'main':"#ff8234"
      }
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
  },
}

