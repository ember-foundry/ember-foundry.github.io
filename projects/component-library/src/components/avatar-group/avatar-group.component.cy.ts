import {mount} from 'cypress/angular-zoneless'
import {AvatarGroupComponent} from 'component-library';
import {AvatarComponent} from 'component-library';

describe('AvatarGroupComponent', () => {
  it('Sample', () => {
    mount(`<lib-avatar-group>
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <lib-avatar name="Joe Soap" />
          <lib-avatar name="Jane Doe" />
          <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <lib-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <lib-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <lib-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <lib-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <lib-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </lib-avatar-group>`, {
      imports: [
        AvatarComponent,
        AvatarGroupComponent
      ]
    });

    cy.get('.avatar-group')
      .should('exist')
      .should('be.visible');

    cy.get('.avatar-group')
      .find('.avatar')
      .should('have.length', 10);
  });

  it('Should have 2 dummy avatars when none are provided', () => {
    mount(`<lib-avatar-group />`, {
      imports: [
        AvatarGroupComponent
      ]
    });

    cy.get('.avatar-group')
      .should('exist');

    cy.get('.avatar-group')
      .children()
      .should('have.length', 2);

    cy.get('.avatar-group .avatar')
      .should('have.length', 2)
      .each(i => {
        expect(i).to.have.text('UU');
      })
  });
})
