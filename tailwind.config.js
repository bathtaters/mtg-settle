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
      gridTemplateColumns: {
        // For stats progress bars
        'stats': 'auto 1fr',
      },
      screens: {
        'xs': '360px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["fantasy", "luxury"],
    darkTheme: "luxury",
  },
}
