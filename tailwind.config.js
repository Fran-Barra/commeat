/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          300: 'F5CB82',
          400: 'F2BA58',
          500: 'EFA92E',
          600: 'BF8725',
          700: '8F651C'
        },
        secondary: {
          300: '82B9F6',
          400: '58A2F3',
          500: '2E8BF0',
          600: '256FC0',
          700: '1C5390'
        },
        gray: {
          100: 'F1F2F3',
          200: 'E3E4E6',
          300: 'D4D7DA',
          400: 'C6C9CD',
          500: 'B8BCC1',
          600: '93969A',
          700: '6E7174'
        },

        black: '000000',
        white: 'FFFFFF',

        success: {
          400: 'C8E986',
          500: 'B1E052'
        },
        error: {
          400: 'F58980',
          500: 'EE3B2B'
        },
      },


      fontSize: {
        p3 : '12px'
      }
    },
  },
  plugins: [],
}

