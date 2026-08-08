import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or your standard react plugin

export default defineConfig({
  plugins: [react()],
  base: '/andarena/',
})
