import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// thanks to @types/node i can ismport path which allows me to use @/components/Component besides ../../../components/Component
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // this is te line below
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, 'src')}]
  }
})
