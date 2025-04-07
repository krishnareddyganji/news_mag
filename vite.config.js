// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/news_mag/', // MUST match your GitHub repo name
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
});
