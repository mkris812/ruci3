/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(240px, 1fr))', // Adjust 240px to your minimum column width
      },
      colors: {
        primaryc: '#ffffff', // white
        secondaryc: '#33eaff',
        trdc:'#2a3eb1',
        paralc: '#00000049',
      },
      keyframes: {
        jumbo: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'jumbo-slow': 'jumbo 4s ease-in-out infinite', // Adjust duration for a slower animation
      },
    },
  },
  plugins: [],
};
