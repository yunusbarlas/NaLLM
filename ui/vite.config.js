import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        appKgChat: fileURLToPath(new URL('./use-cases/chat-with-kg/index.html', import.meta.url)),
        appImport: fileURLToPath(new URL('./use-cases/unstructured-import/index.html', import.meta.url)),
      },
    },
  },
})