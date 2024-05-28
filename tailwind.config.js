/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      greenbtn: "#5E7254",
      greenovbtn: "#7E9972",
      componentcol: "#394032",
      bckcl: "#ADAD92",
    },
    fontFamily: {
      main: ["Karla"],
    },
    extend: {},
  },
  plugins: [daisyui],
};
