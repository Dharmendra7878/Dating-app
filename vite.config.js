import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Valentine-Day-project/", // name of your repo
  plugins: [react()],
});

