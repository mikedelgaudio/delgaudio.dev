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
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
};
