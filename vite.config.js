import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  base: './', // Use relative paths for assets
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Better code splitting for performance
        manualChunks: {
          'three': ['three'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['framer-motion', 'motion'],
          'icons': ['react-icons']
        },
        // Consistent asset naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    // Enable gzip compression
    cssCodeSplit: true,
    minify: 'esbuild',
    target: 'esnext'
  },
  // Add caching headers configuration
  server: {
    port: 5173,
    open: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  },
  preview: {
    port: 8080,
    open: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
})
