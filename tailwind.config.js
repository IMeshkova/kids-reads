/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: "#f4f4f4",
      },
      screens: {},
      boxShadow: {
        custom: " 0px 0px 4px 1px rgba(0,0,0,25%)",
      },
    },
  },
  plugins: [],
};
