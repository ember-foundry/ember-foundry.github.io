## Scaffolding

### Components
```shell
component_name="LandoNorrisSlidingText"
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

## Testing
testing a specific file

```shell
test_file="projects/component-library/src/components/iom-take-home-pay/iom-take-home-pay.component.spec.ts"
npm run test -- --watch --testFile $test_file
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

---

### TODO:
* FlipCard: https://storage.googleapis.com/material-io-design/m2/assets/downloads/7734f294e44e56dd5c5fa68c906efb8f3cbdab45441b2fe0ebd355bcf96fd74eb0bd9cb0f2a2544264a6e7bbd33d5e33ff5dda82eb2b0d431d320a4c94f33575.mp4
* https://angular.dev/tools/libraries/creating-librariess
* i want to run something like this:
  * ng add @angular/material
  * but for the component library to be used in other
* https://ishadeed.com/article/css-masking/
* https://xieziyu.github.io/ngx-echarts/#/welcome
* SassDoc

