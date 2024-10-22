/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(600px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(600px) rotate(-360deg)' },
        },
      },
      animation: {
        orbit: 'orbit 10s linear infinite',
      },
    },
  },
  plugins: [],
};
