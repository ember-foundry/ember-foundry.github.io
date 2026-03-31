import {mount} from 'cypress/angular-zoneless'
import {BaselineAvailabilityComponent} from 'component-library';

describe('BaselineAvailability', () => {
  it('All Supported', () => {
    mount(`<mbr-baseline-availability [supported]="['chrome', 'firefox', 'edge', 'safari']"/>`, {
      imports: [
        BaselineAvailabilityComponent
      ]
    });

    cy.get('.baseline-availability')
      .should('exist');

    cy.get('.baseline-availability .avatar-group')
      .should('exist')
      .should('have.length', 4);

    cy.get('.baseline-availability .avatar-group .avatar')
      .should('exist')
      .should('have.length', 8);

    cy.get('.baseline-availability')
      .screenshot('baseline-availability-all-supported');
  });

  it('Mixed Support', () => {
    mount(`<mbr-baseline-availability [supported]="['chrome', 'edge']"/>`, {
      imports: [
        BaselineAvailabilityComponent
      ]
    });

    cy.get('.baseline-availability')
      .should('exist');

    cy.get('.baseline-availability .avatar-group')
      .should('exist')
      .should('have.length', 4);

    cy.get('.baseline-availability .avatar-group .avatar')
      .should('exist')
      .should('have.length', 8);

    cy.get('.baseline-availability')
      .screenshot('baseline-availability-mixed-support');
  });

  it('All Unsupported', () => {
    mount(`<mbr-baseline-availability />`, {
      imports: [
        BaselineAvailabilityComponent
      ]
    });

    cy.get('.baseline-availability')
      .should('exist');

    cy.get('.baseline-availability .avatar-group')
      .should('exist')
      .should('have.length', 4);

    cy.get('.baseline-availability .avatar-group .avatar')
      .should('exist')
      .should('have.length', 8);

    cy.get('.baseline-availability')
      .screenshot('baseline-availability-all-unsupported');
  });
})
