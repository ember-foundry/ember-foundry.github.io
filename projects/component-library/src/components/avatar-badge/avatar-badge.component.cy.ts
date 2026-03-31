import {mount} from 'cypress/angular-zoneless'
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarBadgeComponent} from '../avatar-badge/avatar-badge.component';

const imports = [
  AvatarComponent,
  AvatarBadgeComponent
]

describe('AvatarBadgeComponent', () => {
  it('Simple', () => {
    mount(`<mbr-avatar-badge><mbr-avatar name="Jane Doe" /></mbr-avatar-badge>`, {
      imports
    });

    cy.get('.avatar-badge')
      .should('exist')
      .should('be.visible');

    cy.get('.avatar-badge')
      .children()
      .should('have.length', 2);

    cy.get('.avatar-badge')
      .children()
      .should('have.length', 2);

    cy.get('.avatar-badge .avatar')
      .should('have.length', 1)
      .should('exist')
      .should('be.visible');

    cy.get('.avatar-badge .badge')
      .should('have.length', 1)
      .should('exist')
      .should('be.visible');
  });

  it('Responsive Test (height is constrained)', () => {
    mount(`
      <div class='container' style="height:30px;width:200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;">
        <mbr-avatar-badge><mbr-avatar name="Jane Doe" /></mbr-avatar-badge>
      </div>
    `, {
      imports
    });
  })

  it('Responsive Test (width is constrained)', () => {
    mount(`
      <div class='container' style="width:30px;height:200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;">
        <mbr-avatar-badge><mbr-avatar name="Jane Doe" /></mbr-avatar-badge>
      </div>
    `, {
      imports
    });
  })
})
