/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins' , 'sans-serif'],
        Inter: ['Inter'],
      },
    },

    colors: {
      base: {
        white: '#fff',
        dark: '#000000',
      },

      brand: {
        25: '#F1EFFF',
      },

      error: {
        600: '#D92D20',
      },

      success: {
        500: '#12B76A',
        900: '#054F31',
      },

      gray: {
        50: '#F9FAFB',
        200: '#EAECF0',
        300: '#D0D5DD',
        400: '#98A2B3',
        600: '#475467',
        700: '#344054',
        900: '#101828',
      },

      'green-light': '#EDFAF5',
      'green-secondary': '#69D2A9',
      'orange-light': '#FFF8EF',
      'orange-secondary': '#FFAD7F',
      'green-primary': '#0B5437',

    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}