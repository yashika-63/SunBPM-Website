import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  server: {
    open: true,
    port: 5182,
    // historyApiFallback: true,
  },

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
})