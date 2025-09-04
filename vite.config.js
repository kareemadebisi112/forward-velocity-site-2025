import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { prerender } from 'vite-plugin-prerender'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    // Add prerendering for SEO
    prerender({
      routes: [
        '/',
        '/services',
        '/contact', 
        '/start',
        '/tools',
        '/blog'
      ],
      postProcess(renderedRoute) {
        // Clean up the HTML if needed
        renderedRoute.html = renderedRoute.html
          .replace(/<script (.*?)>/gi, '<script $1>')
          .replace('id="app"', 'id="root"')
        return renderedRoute
      }
    })
  ],
  base: './', // Use relative paths for assets
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // Increase warning limit
    rollupOptions: {
      output: {
        // Better code splitting
        manualChunks: {
          'three': ['three'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['framer-motion', 'motion'],
          'icons': ['react-icons']
        },
        // Ensure consistent asset naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 8080,
    open: true
  }
})
