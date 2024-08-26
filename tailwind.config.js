/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2028",
        secondary: "#272733",
        accent: "#2ecc71",
        tec: "#25262e",
      },
      backgroundImage: {
        mich: "url(./src/assets/images/mich.png)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
        sfmono: ['"SF Mono"', "monospace"],
        firacode: ['"Fira Code"', "monospace"],
        firamono: ['"Fira Mono"', "monospace"],
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
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
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
