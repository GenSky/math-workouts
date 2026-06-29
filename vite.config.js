import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        // Split the heavy viz/animation libs out of the main bundle.
        manualChunks: {
          charts: ['recharts'],
          motion: ['framer-motion'],
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
