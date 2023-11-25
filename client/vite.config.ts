// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    assetsInlineLimit: 0, // También puedes intentar deshabilitar el límite de tamaño para incrustar archivos
    chunkSizeWarningLimit: 2000, // Puedes ajustar este límite según tus necesidades
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
