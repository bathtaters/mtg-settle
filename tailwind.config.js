module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [ 'Sorts Mill Goudy', 'serif' ],
        sans: [ 'Poppins', 'sans-serif' ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["fantasy", "luxury"],
    darkTheme: "luxury",
  },
}
