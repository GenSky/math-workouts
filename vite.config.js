import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so the build works under any path — including a GitHub Pages
  // project site at /math-workouts/ — without hard-coding the repo name.
  base: './',
  plugins: [
    react(),
    // Full offline support: precache the app shell, JS, CSS, and latin font
    // files so an installed copy ("Add to Home Screen") works with no network.
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['flame.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Math Workouts — Coached by Max',
        short_name: 'Math Workouts',
        description:
          'Get coached through math by Max. Analogies, real-world hooks, and progressive challenges — fully offline.',
        theme_color: '#0a0a0b',
        background_color: '#0a0a0b',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './',
        scope: './',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        // The UI is English — skip precaching non-latin font subsets.
        globIgnores: ['**/*cyrillic*', '**/*greek*', '**/*vietnamese*', '**/*latin-ext*'],
        navigateFallback: null, // HashRouter: every navigation is index.html already
      },
    }),
  ],
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
