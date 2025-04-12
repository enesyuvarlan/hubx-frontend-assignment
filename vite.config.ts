import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [
    react(),
    svgr({
      exportType: 'named',
    }),
  ],
});
