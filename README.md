# Ember Foundry
A collection of angular components inspired by things we've seen

[![Deploy Storybook Badge](https://github.com/ember-foundry/ember-foundry.github.io/actions/workflows/gh-pages.yml/badge.svg?branch=main)](https://github.com/ember-foundry/ember-foundry.github.io/actions/workflows/gh-pages.yml)
[![Package Updates Badge](https://github.com/ember-foundry/ember-foundry.github.io/actions/workflows/check-for-updates.yml/badge.svg?branch=main)](https://github.com/ember-foundry/ember-foundry.github.io/actions/workflows/check-for-updates.yml)
[![CodeQL](https://github.com/ember-foundry/ember-foundry.github.io/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/ember-foundry/ember-foundry.github.io/actions/workflows/github-code-scanning/codeql)
![License](https://img.shields.io/github/license/ember-foundry/ember-foundry.github.io.svg)

---

### Vitest Angular Browser Testing
https://angular.dev/guide/testing/migrating-to-vitest
```shell
ng config projects.component-library.architect.test.options.browsers.1 "firefox"`

npm install @analogjs/platform --save-dev
? ng g @analogjs/platform:setup-vitest --project component-library
```

## Schematics
### Component
```shell
ng config projects.component-library.schematics.@schematics/angular:component.addTypeToClassName true
ng config projects.component-library.schematics.@schematics/angular:component.changeDetection OnPush
ng config projects.component-library.schematics.@schematics/angular:component.path projects/component-library/src/components
ng config projects.component-library.schematics.@schematics/angular:component.style scss
ng config projects.component-library.schematics.@schematics/angular:component.type component
```

### Directive
```shell
ng config projects.component-library.schematics.@schematics/angular:directive.addTypeToClassName true
ng config projects.component-library.schematics.@schematics/angular:directive.flat false
ng config projects.component-library.schematics.@schematics/angular:directive.path projects/component-library/src/directives
ng config projects.component-library.schematics.@schematics/angular:directive.type directive
```

### Pipe
```shell
ng config projects.component-library.schematics.@schematics/angular:pipe.flat false
ng config projects.component-library.schematics.@schematics/angular:pipe.path projects/component-library/src/pipes
ng config projects.component-library.schematics.@schematics/angular:pipe.typeSeparator .
```

### Enum
```shell
ng config projects.component-library.schematics.@schematics/angular:enum.path projects/component-library/src/enums
ng config projects.component-library.schematics.@schematics/angular:enum.type enum
```

---

### Linting
```shell
ng add @angular-eslint/schematics
```

---

### Tailwind

Followed this guide to add tailwind:

https://angular.dev/guide/tailwind

Which is the same as:

https://tailwindcss.com/docs/installation/framework-guides/angular

Then you'll want to add vite specific config for tailwind:

https://tailwindcss.com/docs/installation/using-vite

---

### Git LFS
https://github.com/git-lfs/git-lfs?tab=readme-ov-file
```shell
git lfs track **/__screenshots__/**/*.png
git add .gitattributes
git add **/__screenshots__/**/*.png
```

### New Library
```shell
LIBRARY_NAME='critter';
ng generate library $LIBRARY_NAME
mkdir -p projects/$LIBRARY_NAME/.storybook
touch projects/$LIBRARY_NAME/.storybook/styles.scss
mkdir -p projects/$LIBRARY_NAME/src/components
mkdir -p projects/$LIBRARY_NAME/src/directives
mkdir -p projects/$LIBRARY_NAME/src/styles
touch projects/$LIBRARY_NAME/src/styles/global.scss

ng config projects.$LIBRARY_NAME.architect.build-storybook.builder '@storybook/angular:build-storybook'
ng config projects.$LIBRARY_NAME.architect.build-storybook.options.browserTarget "$LIBRARY_NAME:build"
ng config projects.$LIBRARY_NAME.architect.build-storybook.options.configDir "projects/$LIBRARY_NAME/.storybook"
ng config projects.$LIBRARY_NAME.architect.build-storybook.options.compodoc true
ng config "projects.$LIBRARY_NAME.architect.build-storybook.options.compodocArgs" '["-e", "json", "-d"]'
ng config "projects.$LIBRARY_NAME.architect.build-storybook.options.compodocArgs[3]" "projects/$LIBRARY_NAME"
ng config projects.$LIBRARY_NAME.architect.build-storybook.options.outputDir 'dist/storybook/$LIBRARY_NAME'
ng config "projects.$LIBRARY_NAME.architect.build-storybook.options.styles[0]" "projects/$LIBRARY_NAME/src/styles/global.scss"
ng config projects.$LIBRARY_NAME.architect.build-storybook.options.webpackStatsJson true

ng config projects.$LIBRARY_NAME.architect.storybook.builder '@storybook/angular:start-storybook'
ng config projects.$LIBRARY_NAME.architect.storybook.options.browserTarget "$LIBRARY_NAME:build"
ng config projects.$LIBRARY_NAME.architect.storybook.options.configDir "projects/$LIBRARY_NAME/.storybook"
ng config projects.$LIBRARY_NAME.architect.storybook.options.compodoc true
ng config "projects.$LIBRARY_NAME.architect.storybook.options.compodocArgs" '["-e", "json", "-d"]'
ng config "projects.$LIBRARY_NAME.architect.storybook.options.compodocArgs[3]" "projects/$LIBRARY_NAME"
ng config "projects.$LIBRARY_NAME.architect.storybook.options.port" 6006
ng config "projects.$LIBRARY_NAME.architect.storybook.options.styles[0]" "projects/$LIBRARY_NAME/.storybook/styles.scss"
ng config "projects.$LIBRARY_NAME.architect.storybook.options.styles[1]" "projects/$LIBRARY_NAME/src/styles/global.scss"
```
