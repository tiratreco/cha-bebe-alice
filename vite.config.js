import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cha-bebe-alice/', // <- nome do diretório onde o site está publicado
  plugins: [react()],
})