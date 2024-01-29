import { screens } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '300px',
      ...screens,
    },
    extend: {
      colors: {
        'cod-gray': {
          50: '#f6f5f5',
          100: '#e7e6e6',
          200: '#d2cfd0',
          300: '#b3adae',
          400: '#8c8485',
          500: '#71696a',
          600: '#605a5b',
          700: '#514d4d',
          800: '#474343',
          900: '#3e3b3b',
          950: '#111010',
        },
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
};
