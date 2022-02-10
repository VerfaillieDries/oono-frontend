module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1176px',
      xxl: '1440px',
    },

    extend: {
      colors: {
        onoo_blue: '#303984',
        onoo_blue_light: '#F2F4FF',
        onoo_blue_dark: '#1E1D52',
        onoo_white: '#FFFFFF',
        onoo_black: '##232222',
        onoo_grey: '#F7F7F7',
        onoo_yellow: '#FFE380',
        onoo_yellow_dark: '#FFD643',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
