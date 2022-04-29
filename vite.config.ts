// https://vitejs.dev/config/
import react from '@vitejs/plugin-react';
import OpenProps from 'open-props';
import postcssJitProps from 'postcss-jit-props';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssJitProps(OpenProps)],
    },
  },
});
