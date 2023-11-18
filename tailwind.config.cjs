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

                primary: {},

                secondary: {},

                // https://colorhunt.co/palette/0c134f1d267d5c469cd4adfc
                atm: {
                    1: "#0C134F",
                    2: "#1D267D",
                    3: "#5C469C",
                    4: "#D4ADFC"
                }
            },
            container: {
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    md: "3rem",
                    lg: "10rem",
                }
            }
        }
    },
    plugins: []
};