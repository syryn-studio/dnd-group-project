/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unifraktur: ['UnifrakturCook', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui')],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#FDA837",
      }
    }],
    darkTheme: true
  },
}

