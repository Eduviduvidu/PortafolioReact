import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@component': path.resolve(__dirname, './src/components'),
      '@page': path.resolve(__dirname, './src/pages'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@img': path.resolve(__dirname, './src/assets/images'),
      '@lang': path.resolve(__dirname, './src/lang'),
      '@css': path.resolve(__dirname, './src/styles'),
      '@util': path.resolve(__dirname, './src/utils'),
      '@conf': path.resolve(__dirname, './src/config'),
    },
  },
});