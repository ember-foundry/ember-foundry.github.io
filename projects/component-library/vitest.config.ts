import {defineConfig} from 'vitest/config';
import {playwright} from '@vitest/browser-playwright';
import angular from '@analogjs/vite-plugin-angular';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    angular(),
    viteTsConfigPaths()
  ],
  test: {
    fileParallelism: true,
    globals: false,
    reporters: ['verbose'],
    setupFiles: ['test-setup.ts'],
    include: ['src/**/*.spec.ts'],
    browser: {
      enabled: true,
      headless: process.env['VITEST_HEADLESS'] !== 'false',
      provider: playwright({
        contextOptions: {
          viewport: {
            width: 1280,
            height: 720,
          }
        }
      }),
      instances: [
        {
          browser: 'chromium',
          viewport: {
            width: 1280,
            height: 720
          }
        }
      ]
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
