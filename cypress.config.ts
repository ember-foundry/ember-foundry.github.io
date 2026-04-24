import {defineConfig} from 'cypress';

export default defineConfig({
  allowCypressEnv: false,
  component: {
    viewportWidth: 1280,
    viewportHeight: 800,
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: '',
          sourceRoot: 'projects/component-library/src/',
          buildOptions: {
            styles: ['projects/component-library/src/styles/global.scss']
          }
        }
      }
    },
    specPattern: '**/*.cy.ts',
    watchForFileChanges: false
  }
});
