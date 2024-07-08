import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // added to deal with the svg problem
  rollupOptions: {
    // Ensure to include the file extensions in the external option
    external: ['.svg'],
  },

  base: process.env.NODE_ENV === "production" ? "/doron1/" : "/",
})