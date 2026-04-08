import { defineConfig} from 'vitest/config';
import {playwright} from '@vitest/browser-playwright';
import angular from '@analogjs/vite-plugin-angular';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [angular(), viteTsConfigPaths()],
  test: {
    globals: false,
    setupFiles: [
      'test-setup.ts'
    ],
    reporters: ['verbose'],
    include: ['src/**/*.spec.ts'],
    browser: {
      enabled: true,
      expect: {
        // @see https://vitest.dev/guide/browser/visual-regression-testing
        toMatchScreenshot: {
          comparatorName: 'pixelmatch',
          comparatorOptions: {
            // 0-1, how different can colors be?
            threshold: 0.2,
            // 1% of pixels can differ
            allowedMismatchedPixelRatio: 0.01,
          },
        },
      },
      headless: process.env['VITEST_HEADLESS'] !== 'false',
      provider: playwright(),
      instances: [{ browser: 'chromium' }]

    },
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['html'],
      thresholds: {
        statements: 97,
        branches: 77, // global threshold // TODO: all coverage should be 90
        functions: 100,
        lines: 97
      }
    }
  },
  optimizeDeps: {
    include: ['@vitest/coverage-v8/browser']
  }
});
