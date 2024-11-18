import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*', '**/components/*'],
      experimentalReactChildren: true,
    }),
    tailwind(),
  ],
  output: 'hybrid',
});