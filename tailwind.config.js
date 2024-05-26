/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        moveCloud: {
          "0%": { right: "-25%" },
          "100%": { right: "100%" },
        },
      },
      animation: {
        cloudAnimate: "moveCloud 10s linear infinite",
      },
    },
  },
  plugins: [],
};
