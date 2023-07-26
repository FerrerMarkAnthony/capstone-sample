/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        "mountain-meadow": {
          DEFAULT: "#10B981",
          50: "#D7FCEF",
          100: "#C4FAE8",
          200: "#9EF7D9",
          300: "#79F3CB",
          400: "#53F0BC",
          500: "#2EEDAE",
          600: "#13DF9B",
          700: "#10B981",
          800: "#0C855D",
          900: "#075239",
          950: "#053827",
        },
      },
    },
  },
  plugins: [],
};
