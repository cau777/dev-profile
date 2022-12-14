/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f0f6fc",
          75: "#dbe5ec",
          100: "#c9d1d9",
          200: "#afbac5",
          300: "#8b939e",
          400: "#6e7681",
          500: "#484f58",
          600: "#30373d",
          700: "#21262e",
          800: "#151b22",
          900: "#0d1017",
        },

        primary: {
          50: "#edddff",
          100: "#e2c5ff",
          200: "#d2a8ff",
          300: "#bc8cff",
          400: "#a371f7",
          500: "#8957e5",
          600: "#6e40c9",
          700: "#553098",
          800: "#3c1e70",
          900: "#271051",
        },

        secondary: {
          50: "#f5ffea",
          100: "#e6ffcb",
          200: "#d5ffa8",
          300: "#c4fd86",
          400: "#b6fa6d",
          500: "#aaf655",
          600: "#99e44c",
          700: "#82ce41",
          800: "#6db939",
          900: "#459628",
        },
        // secondary: {
        //   50: "#aff5b4",
        //   100: "#aff5b4",
        //   200: "#56d364",
        //   300: "#3fb950",
        //   400: "#2ea043",
        //   500: "#228636",
        //   600: "#186c2e",
        //   700: "#0f5322",
        //   800: "#053a15",
        //   900: "#04260f",
        // },
      },
      container: {
        padding: {
          DEFAULT :"1rem",
          sm: "2rem",
          md: "3rem",
          lg: "10rem",
        }
      }
    }
  },
  plugins: []
};
