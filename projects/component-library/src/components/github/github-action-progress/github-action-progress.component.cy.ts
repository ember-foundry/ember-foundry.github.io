import {mount} from 'cypress/angular-zoneless'
import {GithubActionProgressComponent} from 'component-library';

describe('ActionProgressComponent', () => {
  it('should render', () => {
    mount(`<mbr-action-progress />`, {
      imports: [
        GithubActionProgressComponent
      ]
    });
  });
})
