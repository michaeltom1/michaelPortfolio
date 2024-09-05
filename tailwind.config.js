/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#15161c",
        primaryLight: "#21232c",
        accent: "#2ecc71",
        textColor: "#a2a9c3",
        textColorLight: "#e0e2eb",
      },
      backgroundImage: {
        mich: "url(./src/assets/images/mich.png)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ['"Roboto Mono"', "monospace"],
        sans: [
          "Poppins",
          "Inter",
          "Avenir",
          "system-ui",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        "4xl": "-18px 3px 61px 9px rgba(0,0,0,0.07);",
        "5xl": "0px 2px 16px -9px",
        "6xl": "0 0 12px 0px",
      },
    },
  },
  plugins: [],
};
