import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// hanoryx-components is a source library: let Vite compile it like app code.
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { exclude: ['hanoryx-components'] },
  resolve: { dedupe: ['react', 'react-dom', 'react-router-dom', 'motion', 'gsap'] },
});
