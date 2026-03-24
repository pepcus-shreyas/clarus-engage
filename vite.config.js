import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: false,
    setupFiles: ['./tests/setup.js'],
    include: ['tests/**/*.{test,spec}.{js,jsx}'],
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
  preview: {
    port: 4000,
    strictPort: false,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext',
  },
})
