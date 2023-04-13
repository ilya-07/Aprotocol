/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryS: "#0050FF",
        secondaryS: "#ADFF00",
        greyS: "#575A64",
        bgRect:
          "radial-gradient(73.62% 201.19% at 100% 0%, #0041FF 0%, rgba(11, 14, 20, 0) 100%)",
      },
      content: {
        arrR: "url('assets/img/arrR.svg')",
        arrB: "url('assets/img/arrB.svg')",
      },
      borderRadius: {
        casualR: "60px",
        smR: "15px",
      },
    },
  },
  plugins: [],
};
