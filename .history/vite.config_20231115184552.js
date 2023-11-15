/* The code is importing the `defineConfig` function from the `vite` module and the `react` plugin from
the `@vitejs/plugin-react` module. */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
