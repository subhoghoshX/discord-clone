const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      transitionProperty: {
        rounded: 'border-radius',
        rounded_colors: 'rounded background-color'
      },
      borderRadius: {
        half: '50%'
      },
      fontFamily: {
        'primary': ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
