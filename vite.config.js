import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// added plugin to deal with the svg problem
import image from '@rollup/plugin-image';

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
    plugins: [
      image()
    ],
    // Ensure to include the file extensions in the external option
    external: ['.svg'],
  },

  base: process.env.NODE_ENV === "production" ? "/doron1/" : "/",
})