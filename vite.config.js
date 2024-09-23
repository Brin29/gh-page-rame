import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/Brin29/RAME/tree/main/RAME-PROJECT-FRONT-END/RAME-PROJECT"
})
