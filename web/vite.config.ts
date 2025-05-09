import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../dist/web',
    sourcemap: true
  },
  cacheDir: '../node_modules',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  server: {
    port: 3000
  }
});
