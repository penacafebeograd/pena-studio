import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// Served from https://penastudio.cc/tools/ (GitHub Pages, same repo as the
// Pena Studio site), so every emitted asset URL has to carry the /tools/ prefix.
export default defineConfig({
  base: '/tools/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {'@': path.resolve(__dirname, '.')},
  },
  build: {
    outDir: '../tools',
    emptyOutDir: true,
  },
});
