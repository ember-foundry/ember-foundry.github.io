import {mount} from 'cypress/angular-zoneless'
import {ActionProgressComponent} from 'component-library';

describe('ActionProgressComponent', () => {
  it('should render', () => {
    mount(`<ode-action-progress />`, {
      imports: [
        ActionProgressComponent
      ]
    });
  });
})
