import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'https://arttechstore-production-37f5.up.railway.app'
  },
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos generados
  },
})
