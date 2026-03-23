import {mount} from 'cypress/angular-zoneless'
import {AvatarGroupComponent} from 'component-library';
import {AvatarComponent} from 'component-library';

describe('AvatarGroupComponent', () => {
  it('Sample', () => {
    mount(`<ode-avatar-group>
          <ode-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <ode-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <ode-avatar name="Joe Soap" />
          <ode-avatar name="Jane Doe" />
          <ode-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <ode-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <ode-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <ode-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <ode-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <ode-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </ode-avatar-group>`, {
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
    mount(`<ode-avatar-group />`, {
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
