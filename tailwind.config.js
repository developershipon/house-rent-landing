module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#EDF3F2",
        primary: "#1D3639",
        blue: {
          130: "#2269F2",
        },
        black: {
          50: "#1F1F2B",
          120: "#585C65",
          150: "#27292E",
        },
        gray: {
          150: "#C4C4C4",
        },
      },
      backgroundImage: {
        rectangle: "url('/public/image/bgrectangle.svg')",
      },
      height: {
        18: "18.25rem",
        45: "45rem",
        15: "26rem",
        67: "67.125rem",
        61: "60rem",
      },
      fontFamily: {
        Montserrat: ["Montserrat Alternates"],
        Nunito: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
