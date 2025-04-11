// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
