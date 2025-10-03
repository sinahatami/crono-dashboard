import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const REPO_NAME = 'crono-dashboard';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
})
