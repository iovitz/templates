import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      views: path.resolve(__dirname, 'src/views'),
      utils: path.resolve(__dirname, 'src/utils'),
      apis: path.resolve(__dirname, 'src/apis'),
      images: path.resolve(__dirname, 'src/assets/images'),
      styles: path.resolve(__dirname, 'src/assets/styles')
    }
  },
  plugins: [vue()]
})
