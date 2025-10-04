import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://wahdan.me',
  integrations: [tailwind(), react()],
  server: {
    host: '0.0.0.0',
    port: 5000
  }
});
