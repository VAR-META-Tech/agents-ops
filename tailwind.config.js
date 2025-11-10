module.exports = {
  future: {
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('tailwindcss-spinner')(), // no options to configure
  ],
  theme: {
    colors: {
      brand: {
        300: '#7C89AE',
      },
    },
  },
};
