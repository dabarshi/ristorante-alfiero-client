/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        drop: "drop 0.5s ease-out forwards", // animation name and duration
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
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // other plugins...
  ],
};
