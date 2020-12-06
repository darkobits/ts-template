import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.ts'],
      thresholds: {
        statements: 75,
        branches: 65,
        functions: 65,
        lines: 75
      }
    }
  }
})