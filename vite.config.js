import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or your standard react plugin

export default defineConfig({
  plugins: [react()],
  base: '/andarena/',
})
