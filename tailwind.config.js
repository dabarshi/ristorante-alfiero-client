/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        drop: "drop 1s ease-out forwards", // animation name and duration
        slideIn: "slideIn 1s ease-out forwards",
      },
      keyframes: {
        drop: {
          "0%": {
            transform: "translate(50%, -100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(50%, 0)",
            opacity: 1,
          },
        },
        slideIn: {
          "0%": {
            transform: "translate(100% , 0)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // other plugins...
  ],
};
