import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dobirna-gra",
  plugins: [react()],
  server: {
    port: 8080
  },
  resolve: {
    alias: [
      { 
        find: '@app',
        replacement: path.resolve(__dirname, 'src')
      },
    ],
  }
})
