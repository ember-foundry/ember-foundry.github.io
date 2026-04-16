### Linting
```shell
ng add @angular-eslint/schematics
```

### Building and Using the Library
see here for more info: https://angular.dev/tools/libraries/creating-libraries

1. Build component library
2. publish library from dist folder
```shell
ng build component-library --configuration production
cd dist/component-library
echo 'Go to your application link the library'
npm 
```

### Vitest Angular Browser Testing
```shell
# for migrating from jasmine tests to vitest
ng g @schematics/angular:refactor-jasmine-vitest --add-imports
# touch touch projects/component-library/vitest.config.ts
# disable globals using the vitest define config
npm install -D @vitest/browser-playwright
`ng config projects.component-library.architect.test.options.browsers.1 "firefox"`

npm install @analogjs/platform --save-dev
? ng g @analogjs/platform:setup-vitest --project component-library
```

## Scaffolding

### Components
```shell
component_name="SunburstChartLegend"
ng generate component $component_name --project component-library --dry-run
```

### Directives
```shell
directive_name="Tooltip"
ng generate directive $directive_name --project component-library --dry-run
```

### Enum
```shell
enum_name=""
ng generate enum $enum_name --project component-library
```

---

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

## Testing
testing a specific file

```shell
test_file="projects/component-library/src/components/marquee/marquee.component.spec.ts"
npm run test -- --watch --testFile $test_file
```

---

### Tailwind

Followed this guide to add tailwind:

https://tailwindcss.com/docs/installation/framework-guides/angular

---

### Git LFS
https://github.com/git-lfs/git-lfs?tab=readme-ov-file
```shell
git lfs track **/__screenshots__/**/*.png
git add .gitattributes
```

### TODO:
* https://angular.dev/tools/libraries/creating-librariess
* i want to run something like this:
  * ng add @angular/material
  * but for the component library to be used in other
* https://ishadeed.com/article/css-masking/
* https://xieziyu.github.io/ngx-echarts/#/welcome
* SassDoc
