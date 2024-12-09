/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        green: "#5C685D",
        peach: "#EEC1A0",
        white: "#ffffff",
        black: "#000000",
        gray: "#E4E4E4",
        faint: "#fbf7e9",
        greenLight : "#dcfce7"
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
