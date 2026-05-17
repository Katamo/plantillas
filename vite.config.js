import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { HstVue } from '@histoire/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), HstVue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    watch: {
      ignored: ['!**/node_modules/@bedrock/**'],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['global-builtin', 'import'],
        loadPaths: [resolve(__dirname, 'src/styles')],
      },
    },
  },
})
