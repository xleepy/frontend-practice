import { defineConfig } from 'vite';
import { resolve } from 'path';

const basePath = process.env.VITE_CI === 'true' ? '/frontend-practice/' : '/';

export default defineConfig({
  root: 'src',
  appType: 'mpa',
  base: basePath,
  build: {
    outDir: '../public',
    assetsDir: './src',
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
