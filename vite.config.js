import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  appType: 'custom',
  assetsInclude: ['**/*.js'],
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
