import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Config for building the demo site for GitHub Pages
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'demo-dist',
    emptyOutDir: true,
  }
})
