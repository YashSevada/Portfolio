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
        linkedin: "#0077B5",
        
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
