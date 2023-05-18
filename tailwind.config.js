/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "max-c-h": "70rem",
        "ctext-600": "color: rgb(105,105,105)",
      },
      boxShadow: {
        "5xl": "box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 8px",
      },
      colors: {
        "custom-bg": "background: rgb(252, 238, 192);",
      },
    },
  },
  plugins: [],
};
