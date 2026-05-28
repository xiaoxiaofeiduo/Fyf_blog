import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Fyf_blog/',
  resolve: {
    dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [react()],
  server: {
    fs: {
      allow: ['.', '/Users/fanyunfei/Documents/GitHub/animal-island-ui'],
    },
  },
});
