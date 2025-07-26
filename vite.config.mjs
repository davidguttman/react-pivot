import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    server: {
      port: parseInt(env.PORT) || 9966,
      strictPort: false, // Allow Vite to find next available port if default is taken
      allowedHosts: true,
      // Disable HMR when running through jump.sh proxy to prevent infinite reconnection loops
      hmr: process.env.NODE_ENV === 'production' || process.env.DISABLE_HMR ? false : {
        port: parseInt(env.PORT) || 9966
      }
    },
    build: {
      target: 'esnext',
      lib: {
        entry: 'index.jsx',
        name: 'ReactPivot',
        fileName: (format) => `react-pivot.${format}.js`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    },
    json: {
      stringify: true
    }
  }
})