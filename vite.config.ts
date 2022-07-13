import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    components({
      resolvers: [VarletUIResolver()]
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css:{
    preprocessorOptions: {
      scss:{
        additionalData: '@import "@/assets/style/variable.scss";',
      },
    },
  },
})
