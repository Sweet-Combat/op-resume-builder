/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#ab0f1b",
        blue: "#3f51b5",
        "blue-200" : "#3f51b5",
        "t3-blue": "#538bbb",
        "t3-grey": "#707185",
      },
      backgroundImage: {
        't3-bgImage': "url('/resume-3-bg.webp')"
      }
    },
  },
  plugins: [],
}

