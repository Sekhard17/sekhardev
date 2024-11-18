/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'primary': {
            50: '#f0f5ff',
            100: '#e0eaff',
            200: '#c7d7fe',
            300: '#a3bbfd',
            400: '#7a97fb',
            500: '#5b71f6',
            600: '#4149eb',
            700: '#3638d5',
            800: '#2d30ac',
            900: '#292e88',
            950: '#1a1c54',
          }
        },
        fontFamily: {
          sans: ['Inter Variable', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }