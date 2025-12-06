import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://calderonrigoberto.github.io',
  base: '/wrapped-ti.github.io/',
  output: 'static',
  vite: {
    css: {
      devSourcemap: true
    },
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger']
    },
    ssr: {
      noExternal: ['gsap']
    }
  },
  server: {
    host: true,
    port: 4321
  }
});

