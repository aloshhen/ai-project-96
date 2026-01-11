/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        'bar-primary': '#1E1E2C',
        'bar-secondary': '#2A2A3E',
        'bar-accent': '#00F0FF'
      }
    }
  },
  plugins: []
}