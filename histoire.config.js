import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [HstVue()],
  setupFile: '/src/histoire-setup.js',
  base: '/plantillas/',
  outDir: 'docs',
  theme: {
    title: 'Plantillas',
    logo: {
      square: '/src/logo.svg',
      landscape: '/src/logo.svg',
    },
  },
})
