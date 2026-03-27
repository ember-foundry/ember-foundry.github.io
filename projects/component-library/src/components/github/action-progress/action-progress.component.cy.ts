import {mount} from 'cypress/angular-zoneless'
import {ActionProgressComponent} from 'component-library';

describe('ActionProgressComponent', () => {
  it('should render', () => {
    mount(`<mbr-action-progress />`, {
      imports: [
        ActionProgressComponent
      ]
    });
  });
})
