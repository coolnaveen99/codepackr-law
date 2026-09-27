import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import type { Plugin } from 'vite'

/** Ensure hosts that fall back to 404.html still boot the SPA. */
function spaFallback404(): Plugin {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const index = resolve(__dirname, 'dist/index.html')
      const notFound = resolve(__dirname, 'dist/404.html')
      if (existsSync(index)) {
        copyFileSync(index, notFound)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback404()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
})
