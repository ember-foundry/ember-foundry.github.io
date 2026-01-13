import type {StorybookConfig} from '@storybook/angular/dist';

const config: StorybookConfig = {
  'framework': '@storybook/angular',
  'addons': [
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  'stories': [
    '../src/**/*.stories.ts'
  ]
};

export default config;
