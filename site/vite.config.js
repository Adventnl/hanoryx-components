import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const here = (p) => fileURLToPath(new URL(p, import.meta.url));

// The docs site imports the library the way an app would: by package name.
export default defineConfig({
  root: here('.'),
  base: './',
  publicDir: here('./public'),
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^hanoryx-components\/styles$/, replacement: here('../src/styles/hanoryx.css') },
      { find: /^hanoryx-components$/, replacement: here('../src/index.js') },
      { find: /^hanoryx-components\/(.+)$/, replacement: here('../src') + '/$1' },
    ],
  },
  server: { fs: { allow: [here('..')] }, host: '127.0.0.1', port: 5199 },
  preview: { host: '127.0.0.1', port: 5198 },
  build: {
    outDir: here('../dist'),
    emptyOutDir: true,
    chunkSizeWarningLimit: 900,
  },
});
