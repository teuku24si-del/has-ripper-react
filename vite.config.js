// vite.config.js
import path from 'path' // <-- Tetap pertahankan import ini untuk modul alias
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind v4 tetap aktif di sini
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), 
    },
  },
})