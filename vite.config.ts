import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          login: resolve(__dirname, 'src/pages/login', 'Login.tsx'),
          signup: resolve(__dirname, 'src/pages/signup/Signup.tsx')
        }
      }
    },
  plugins: [react()]
})
