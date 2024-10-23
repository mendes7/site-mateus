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
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'orbit': 'orbit 10s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(800px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(800px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};
