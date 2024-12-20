/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#F5CB82',
          400: '#F2BA58',
          500: '#EFA92E',
          600: '#BF8725',
          700: '#38F651C'
        },
        secondary: {
          300: '#82B9F6',
          400: '#58A2F3',
          500: '#2E8BF0',
          600: '#256FC0',
          700: '#1C5390'
        },
        gray: {
          100: '#F1F2F3',
          200: '#E3E4E6',
          300: '#D4D7DA',
          400: '#C6C9CD',
          500: '#B8BCC1',
          600: '#93969A',
          700: '#6E7174'
        },
        black: '#000000',
        white: '#FFFFFF',
        success: {
          400: '#C8E986',
          500: '#B1E052'
        },
        error: {
          400: '#F58980',
          500: '#EE3B2B'
        },
      },
      fontSize: {
        h1: ['56px', { fontWeight: '400' }], // Regular
        h2: ['38px', { fontWeight: '400' }], // Regular
        h3: ['32px', { fontWeight: '400' }], // Regular
        h4: ['28px', { fontWeight: '700' }], // Bold
        h5: '24px',
        h6: '18px',
        p1: '16px',
        p2: '14px',
        p3: '12px',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
        extralight: '200'
      },
    boxShadow: {
      'custom-nav': '0px -2px 4px 0px rgba(0, 0, 0, 0.05)',
      'recipe-actions': '0px 0px 32px 0px rgba(0, 0, 0, 0.20)',
        'recipe-card': '0px 0px 8px 0px rgba(0, 0, 0, 0.25);',
        'add-item-card':'0px 0.5px 4px 0px rgba(0, 0, 0, 0.15);'
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-in',
      },
    },
  },
  plugins: [],
}
