/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFB3BA',
          orange: '#FFDFBA',
          yellow: '#FFFFBA',
          green: '#BAFFC9',
          blue: '#BAE1FF',
          purple: '#E0BBE4',
          mint: '#B5EAD7',
          coral: '#FFB7B2',
          sky: '#A0E6FF'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
