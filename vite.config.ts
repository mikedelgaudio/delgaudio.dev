import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact({
      // Write each page to static HTML at build time, then hydrate in the browser
      prerender: {
        enabled: true,
        renderTarget: '#app',
      },
    }),
    tailwindcss(),
  ],
})
