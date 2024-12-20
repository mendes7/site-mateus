/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 0s linear infinite',
        'orbit': 'orbit 10s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(700px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(700px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};
