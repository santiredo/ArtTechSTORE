import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import html from '@rollup/plugin-html' // Agrega esta importación

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    html() // Agrega el plugin de HTML
  ],
  build: {
    rollupOptions: {
      // Puedes mantener tu otra configuración aquí
    },
  },
});
