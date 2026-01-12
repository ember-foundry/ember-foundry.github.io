import {mount} from 'cypress/angular-zoneless'
import {BaselineAvailabilityComponent} from 'component-library';

describe('BaselineAvailability', () => {
  it('All Supported', () => {
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-chrome-icon.svg`).as('chrome_image_request');
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/edge-browser-icon.svg`).as('edge_image_request');
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/firefox-browser-icon.svg`).as('firefox_image_request');
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/safari-icon.svg`).as('safari_image_request');

    mount(`<lib-baseline-availability [supported]="['chrome', 'firefox', 'edge', 'safari']"/>`, {
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

    cy.wait('@chrome_image_request');
    cy.wait('@firefox_image_request');
    cy.wait('@edge_image_request');
    cy.wait('@safari_image_request');

    cy.get('.baseline-availability')
      .screenshot('baseline-availability-all-supported');
  });

  it('Mixed Support', () => {
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-chrome-icon.svg`).as('chrome_image_request');
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/edge-browser-icon.svg`).as('edge_image_request');
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/firefox-browser-icon.svg`).as('firefox_image_request');
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/safari-icon.svg`).as('safari_image_request');

    mount(`<lib-baseline-availability [supported]="['chrome', 'edge']"/>`, {
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

    cy.wait('@chrome_image_request');
    cy.wait('@firefox_image_request');
    cy.wait('@edge_image_request');
    cy.wait('@safari_image_request');

    cy.get('.baseline-availability')
      .screenshot('baseline-availability-mixed-support');
  });

  it('All Unsupported', () => {
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-chrome-icon.svg`).as('chrome_image_request');
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/edge-browser-icon.svg`).as('edge_image_request');
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/firefox-browser-icon.svg`).as('firefox_image_request');
    cy.intercept('GET', `*//uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/safari-icon.svg`).as('safari_image_request');

    mount(`<lib-baseline-availability />`, {
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

    cy.wait('@chrome_image_request');
    cy.wait('@firefox_image_request');
    cy.wait('@edge_image_request');
    cy.wait('@safari_image_request');

    cy.get('.baseline-availability')
      .screenshot('baseline-availability-all-unsupported');
  });
})
