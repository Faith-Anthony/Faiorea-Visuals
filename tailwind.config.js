/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#111111',
        'soft-gold': '#D4AF37',
        'light-grey': '#F5F5F5',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
};
