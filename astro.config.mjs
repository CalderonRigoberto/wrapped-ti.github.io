import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wrapped-ti.github.io',
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

