import {mount} from 'cypress/angular-zoneless'
import {AvatarCheckboxComponent} from 'component-library';

describe('AvatarCheckboxComponent', () => {
  it('should render unselected', () => {
    cy.intercept('GET', `*//mockmind-api.uifaces.co/content/human/1.jpg*`).as('image_request');

    mount(`<mbr-avatar-checkbox />`, {
      imports: [
        AvatarCheckboxComponent
      ]
    });

    cy.get('.avatar-checkbox')
      .should('exist')
      .should('be.visible')
      .should('not.have.class', 'selected');

    cy.wait('@image_request');

    cy.get('.avatar-checkbox')
      .screenshot('avatar-checkbox-unselected');
  });

  it('should render unselected (size:7xl)', () => {
    cy.intercept('GET', `*//mockmind-api.uifaces.co/content/human/1.jpg*`).as('image_request');

    mount(`<mbr-avatar-checkbox size="7xl" />`, {
      imports: [
        AvatarCheckboxComponent
      ]
    });

    cy.get('.avatar-checkbox')
      .should('exist')
      .should('be.visible')
      .should('not.have.class', 'selected');

    cy.wait('@image_request');

    cy.get('.avatar-checkbox')
      .screenshot('avatar-checkbox-unselected-7xl');
  });

  xit('should render unselected then once clicked, should be selected', () => {
    cy.intercept('GET', `*//mockmind-api.uifaces.co/content/human/1.jpg*`).as('image_request');

    mount(`<mbr-avatar-checkbox />`, {
      imports: [
        AvatarCheckboxComponent
      ]
    });

    cy.get('.avatar-checkbox')
      .click();

    cy.get('.avatar-checkbox')
      .should('exist')
      .should('be.visible')
      .should('have.class', 'selected');

    cy.get('.avatar-badge')
      .should('exist')
      .should('be.visible');

    const expected_color = 'rgb(0, 109, 234)'

    cy.get('.avatar')
      .should('have.css', 'border-color', expected_color);

    cy.get('.avatar')
      .then(($el) => {
        const padding = parseInt(window.getComputedStyle($el[0]).getPropertyValue('padding'));
        expect(padding).to.be.greaterThan(0);
      });

    cy.get('[ngProjectAs="badge"]')
      .should('exist')
      .should('be.visible')
      .should('have.css', 'background-color', expected_color);


    cy.wait('@image_request');

    cy.get('.avatar-checkbox')
      .screenshot('avatar-checkbox-selected');
  });

  xit('should render unselected then once clicked, should be selected (size:7xl)', () => {
    cy.intercept('GET', `*//mockmind-api.uifaces.co/content/human/1.jpg*`).as('image_request');

    mount(`<mbr-avatar-checkbox size="7xl" />`, {
      imports: [
        AvatarCheckboxComponent
      ]
    });

    cy.get('.avatar-checkbox')
      .click();

    cy.get('.avatar-checkbox')
      .should('exist')
      .should('be.visible')
      .should('have.class', 'selected');

    cy.get('.avatar-badge')
      .should('exist')
      .should('be.visible');

    const expected_color = 'rgb(0, 109, 234)'

    cy.get('.avatar')
      .should('have.css', 'border-color', expected_color);

    cy.get('.avatar')
      .then(($el) => {
        const padding = parseInt(window.getComputedStyle($el[0]).getPropertyValue('padding'));
        expect(padding).to.be.greaterThan(0);
      });

    cy.get('[ngProjectAs="badge"]')
      .should('exist')
      .should('be.visible')
      .should('have.css', 'background-color', expected_color);


    cy.wait('@image_request');

    cy.get('.avatar-checkbox')
      .screenshot('avatar-checkbox-selected-7xl');
  });
})
