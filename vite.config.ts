import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://vicropht.github.io/vicropht2/',
  plugins: [react()],
});
