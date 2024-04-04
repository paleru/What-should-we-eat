import { defineConfig } from 'vite';
import MillionCompiler from '@million/lint';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [MillionCompiler.vite(), react()],
  server: {
    //proxy for dev server
    proxy: {
      '/api': {
        target: 'http://localhost:5001/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
