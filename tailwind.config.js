/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontFamily: {
        space: ["Space Grotesk", " sans - serif"],
      },
    },
  },
  plugins: [],
};
