const eslint = require('@eslint/js');
const ts_eslint = require('typescript-eslint');
const angular = require('angular-eslint');
const cypress = require('eslint-plugin-cypress/flat');

module.exports = ts_eslint.config(
  {
    ignores: [
      'dist',
      'src/app/app.ts',
      'cypress/support/component.ts',
      'projects/component-library/coverage/',
      'projects/component-library/src/stories/*'
    ],
  },
  {
    files: ['**/*.cy.ts'],
    extends: [
      cypress.configs.recommended,
    ],
    rules: {
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-async-tests': 'error',
      // Disable Angular specific rules that don't make sense in a test file
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...ts_eslint.configs.recommended,
      ...ts_eslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/use-component-view-encapsulation': 'warn',
      'comma-dangle': ['error', 'never'],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.name="computed"][typeArguments=undefined]',
          message: 'Computed properties must be explicitly typed, e.g., computed<string>(() => ...)',
        },
      ]
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
    },
  }
);
