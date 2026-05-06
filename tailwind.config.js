/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1612',
        cream: '#F5F0EB',
        cream2: '#EFE7DE',
        ash: '#807468',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.42em',
      },
    },
  },
  plugins: [],
};
