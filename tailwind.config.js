/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      greenbtn: "#FFC107",
      greenovbtn: "#333333",
      componentcol: "#0A0A0A",
      bckcl: "#000000",
      textColor: "#F0EAD6",
    },
    fontFamily: {
      main: ["Karla"],
    },
    extend: {},
  },
  plugins: [daisyui],
};
