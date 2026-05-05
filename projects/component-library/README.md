# Component Library

## Scaffolding

#### Components
```shell
component_name="RevealingCard"
ng generate component $component_name --project component-library --dry-run
```

#### Directives
```shell
directive_name="Tooltip"
ng generate directive $directive_name --project component-library --dry-run
```

#### Enum
```shell
enum_name=""
ng generate enum $enum_name --project component-library
```

---

##  Testing

I use a combination of Angular Unit Tests, Cypress and Storybook for a variety of things

Below is a breakdown of why

| Feature                                  | Angular Unit Tests | Cypress | Storybook |
|------------------------------------------|--------------------|---------|-----------| 
| Coverage Reports                         | Y                  | -       | -         |
| Pipe Tests                               | Y                  | -       | -         |
| Directive Tests                          | Y                  | -       | -         |
| Service Tests                            | Y                  | -       | -         |
| Run automation testing in a pipeline     |                    | Y       | -         |
| Generate Screenshots                     |                    | Y       | -         |
| Extensive UI Testing                     |                    | Y       | -         |
| Time Travel through tests                |                    | Y       | -         |
| View all variations of components easily |                    | -       | Y         |
| Tweak Component Inputs on the fly        |                    | -       | Y         |
| Great for documentation                  |                    | -       | Y         |
| Accessibility Checks                     |                    | -       | Y         |

| Function                                 | Approach          |
|------------------------------------------|-------------------|
| Logic tests                              | Angular Unit Test |
| Visual tests                             | Cypress Test      |
| Documentation of Component possibilities | Storybook         |

---

## Building and Using the Library
see here for more info: https://angular.dev/tools/libraries/creating-libraries

1. Build component library
2. publish library from dist folder

```shell
echo 'Build component library'
ng build component-library --configuration production

echo 'publish library from dist folder'
cd dist/component-library

echo 'Go to your application link the library'
```

---

## Checklist
* [ ] must be able to update the library via `ng update`
