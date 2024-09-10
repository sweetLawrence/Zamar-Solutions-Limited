// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the development server port
    open: true, // Automatically open the app in the browser
  },
  build: {
    minify: 'esbuild', // Enable minification using esbuild
    sourcemap: true, // Generate source maps for easier debugging
    cssCodeSplit: true, // Enable CSS code splitting for better optimization
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate vendor code (e.g., react) into a separate chunk
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`, // Automatically include SCSS variables globally
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Create an alias for the `src` directory for easier imports
    },
  },
  define: {
    'process.env': {}, // Define environment variables
  },
})
