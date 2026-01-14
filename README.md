### Linting
```shell
ng add @angular-eslint/schematics
```

### Vitest Angular Browser Testing
```shell
# for migrating from jasmine tests to vitest
ng g @schematics/angular:refactor-jasmine-vitest --add-imports
# touch touch projects/component-library/vitest.config.ts
# disable globals using the vitest define config
npm install -D @vitest/browser-playwright
ng config projects.component-library.architect.test.options.browsers.1 "firefox"

npm install @analogjs/platform --save-dev
? ng g @analogjs/platform:setup-vitest --project component-library
```

## Scaffolding

### Components
```shell
component_name=""
ng generate component $component_name --project component-library --dry-run
```

### Directives
```shell
directive_name=""
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
