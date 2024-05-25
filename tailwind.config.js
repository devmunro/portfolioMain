/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#DECDB7",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      keyframes: {
        moveCloud: {
          '0%': { right: '-25%' },
          '100%': { right: '100%' }
        }
      },
      animation: {
        "cloudAnimate": "moveCloud 10s linear infinite",
      }
    },
  },
  plugins: [],
};
