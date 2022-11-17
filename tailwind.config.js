/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, jsx ts, tsx}", "./src/**/*"],
  theme: {
    extend: {
      aspectRatio: {
        '4/2': '4 / 2',
      },
    },
  },
  plugins: [],
}
