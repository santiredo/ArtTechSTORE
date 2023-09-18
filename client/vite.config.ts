import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Agrega una regla para archivos HTML
      output: {
        manualChunks: {
          'index.html': ['index.html'],
        },
      },
    },
  },
});
