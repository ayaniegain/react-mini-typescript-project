/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundClr: '#EBEBEB',
        boxcolor: '#FCFCF7',
      },
    },
  },
  plugins: [],
}

