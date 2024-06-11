import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  build: {
    outDir: 'build', // Cambia 'dist' a 'build'
  },
  base: '/creatif-hair-salon-v1/',
  plugins: [react()],
   
})
