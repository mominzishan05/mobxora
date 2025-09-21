import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config with correct base for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/mobxora/', // <-- GitHub repo name
});
