# Component Library

## Scaffolding

#### Components
```shell
component_name=''
ng generate component $component_name --project component-library --dry-run
```

#### Directives
```shell
directive_name=''
ng generate directive $directive_name --project component-library --dry-run
```

#### Enum
```shell
enum_name=''
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

## Testing
testing a specific file

```shell
test_file_path_from_repo_root="projects/component-library/src/components/iom-take-home-pay/iom-take-home-pay.component.spec.ts"
npm run test -- --watch --testFile $test_file_path_from_repo_root
```
> Turning off toMatchScreenshot
> Search Term: ``await(.*).toMatchScreenshot(.*)``
> Replace Term: ``// await$1.toMatchScreenshot$2``
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

### AI Unit Test Coverage
Can you create the unit tests for the attached component

Ensure the coverage for the component is 100%
Ensure the statements coverage is 100%
Ensure all branches of code are covered
Ensure function coverage is 100%
Ensure line coverage is 100%
