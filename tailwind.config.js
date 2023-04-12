/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryS: "#0050FF",
        secondaryS: "#ADFF00",
        mainBtn:
          "radial-gradient(46.96% 180% at 65% 140.83%, #00FF0A 13.03%, rgba(1, 255, 12, 0) 100%) , radial-gradient(31.72% 121.6% at 94.78% 7.5%, #0041FF 16.71%, rgba(0, 65, 255, 0) 100%) , #FFFFFF;",
      },
    },
  },
  plugins: [],
};
