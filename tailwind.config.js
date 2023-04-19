/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryS: "#0050FF",
        secondaryS: "#ADFF00",
        greyS: "#575A64",
      },
      content: {
        arrR: "url('assets/img/arrR.svg')",
        arrB: "url('assets/img/arrB.svg')",
        arrM: "url('assets/img/arrM.svg')",
      },
      borderRadius: {
        casualR: "60px",
        smR: "15px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
