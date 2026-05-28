/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
      },
      colors: {
        base: '#050505',
        surface: '#0F0F10',
        elevated: '#171717',
        primary: '#F5F5F5',
        secondary: '#D4D4D8',
        muted: '#A1A1AA',
      },
      borderColor: {
        DEFAULT: 'rgba(255, 255, 255, 0.08)',
        white: {
          8: 'rgba(255, 255, 255, 0.08)',
          10: 'rgba(255, 255, 255, 0.1)',
        }
      }
    },
  },
  plugins: [],
}
