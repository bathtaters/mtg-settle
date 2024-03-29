module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
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
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'fantasy',
      {
        luxuryFixed: {
          ...require('daisyui/src/theming/themes')['[data-theme=luxury]'],
          neutral: '#171618',
        }
      },
    ],
    darkTheme: 'luxuryFixed',
  },
}
