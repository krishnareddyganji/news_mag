import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/news_mag/', // <-- IMPORTANT for GitHub Pages subfolder!
});
