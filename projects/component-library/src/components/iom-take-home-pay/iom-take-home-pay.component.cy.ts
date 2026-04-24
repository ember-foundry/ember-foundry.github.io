import {mount} from 'cypress/angular-zoneless'
import {IOMTakeHomePayComponent} from 'component-library';

describe('IOMTakeHomePayComponent', () => {
  it('should render unselected', () => {

    mount(`<mbr-iom-take-home-pay />`, {
      imports: [
        IOMTakeHomePayComponent
      ]
    });

    cy.get('mbr-iom-take-home-pay')
      .screenshot('mbr-iom-take-home-pay');
  });
})
