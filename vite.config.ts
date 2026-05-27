import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Fyf_blog/',
  plugins: [react()],
  server: {
    fs: {
      allow: ['.', '/Users/fanyunfei/Documents/GitHub/animal-island-ui'],
    },
  },
});
