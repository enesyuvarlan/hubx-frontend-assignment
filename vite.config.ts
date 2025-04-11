import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [react(), svgLoader()],
});
