// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "435px",
      md: "768px",
      lg: "1000px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: 'rgb(3, 129, 255)',
        primaryHover: 'rgba(3, 129, 255, 0.2)',
        border: 'rgba(0, 0, 0, 0.16)',
        textDark: 'rgba(11, 23, 42, 1)',
        background: 'rgba(245, 245, 247, 1)',
        backgroundWhite: 'rgba(255, 255, 255, 1)',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        heavy: '800',
      },
      letterSpacing: {
        '2px': '2px',
        '0.8px': '0.8px',
      },
    },
  },
  plugins: [],
}
