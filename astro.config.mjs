import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*', '**/components/*'],
      experimentalReactChildren: true,
    }),
    tailwind(),
  ],
  output: 'static', // Cambiar a 'static' si no usas funciones de servidor.
  adapter: vercel(), // Configuración del adaptador para Vercel.
});
