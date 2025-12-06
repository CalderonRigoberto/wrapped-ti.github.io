import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vise-wrapped.com',
  vite: {
    css: {
      devSourcemap: true
    }
  },
  server: {
    host: true,
    port: 4321
  }
});

