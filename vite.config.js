import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  css:{
    loaderOptions:{
      sass:{
        prependData: `@import "@/scss/_variables.scss"`
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'assets': path.resolve('./src/assets')
    }
  },
  server: {
    host: true
  }
})
