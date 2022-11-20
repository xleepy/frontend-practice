import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
        ableton: resolve(__dirname, 'src', 'ableton', 'index.html'),
        'backstage-talks': resolve(
          __dirname,
          'src',
          'backstage-talks',
          'index.html'
        ),
      },
    },
  },
});
