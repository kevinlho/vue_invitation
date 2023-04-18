import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue_invitation/',
  css:{
    loaderOptions:{
      sass:{
        prependData: `@import "@/scss/_variables.scss"`
      }
    }
  },
  plugins: [
      vue(),
      vuetify({ autoImport: true }),
  ],
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
