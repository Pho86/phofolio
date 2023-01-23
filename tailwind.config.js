/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fadeInDown: 'fade-in-down 2s ease-in-out',
        fadeInLeft: 'fade-in-left 2s ease-in-out',
        fadeIn: 'fade-in-right 2s ease-in-out',
        fadeInRight: 'fade-in-right 2s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }

      }),
    },
  },
  plugins: [],
};
