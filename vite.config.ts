import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Relative base path ensures assets load properly on GitHub Pages subpaths
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        send: resolve(__dirname, 'send/index.html'),
        receive: resolve(__dirname, 'receive/index.html'),
      },
    },
  },
});
