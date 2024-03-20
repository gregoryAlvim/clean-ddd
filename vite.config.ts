import { defineConfig } from 'vite'
import tsConfPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfPaths()],
  test: {
    globals: true,
  },
})
