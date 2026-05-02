import {mount} from 'cypress/angular-zoneless'
import {AvatarGroupComponent, AvatarWithinGroupDirective} from 'component-library';
import {AvatarComponent} from 'component-library';

describe('AvatarGroupComponent', () => {
  it('Sample', () => {
    mount(`<mbr-avatar-group>
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <mbr-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <mbr-avatar name="Joe Soap" />
          <mbr-avatar name="Jane Doe" />
          <mbr-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <mbr-avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <mbr-avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <mbr-avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <mbr-avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </mbr-avatar-group>`, {
      imports: [
        AvatarComponent,
        AvatarWithinGroupDirective,
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

  it('Should have default text when no avatars are provided', () => {
    mount(`<mbr-avatar-group />`, {
      imports: [
        AvatarGroupComponent
      ]
    });

    cy.get('.avatar-group')
      .should('exist')

    cy.get('.avatar-group')
      .children()
      .should('have.length', 0);

    cy.get('.avatar-group')
      .should('have.text', 'Provide at least one avatar')


  });

  it('Should inject avatars correctly', () => {
    mount(`
        <mbr-avatar-group>
          <mbr-avatar name="Joe Soap"/>
          <mbr-avatar name="Jane Doe"/>
        </mbr-avatar-group>
      `, {
      imports: [
        AvatarComponent,
        AvatarWithinGroupDirective,
        AvatarGroupComponent
      ]
    });

    cy.get('.avatar-group')
      .children()
      .should('have.length', 2);

    cy.get('.avatar-group .avatar')
      .should('have.length', 2);

    cy.get('.avatar-group')
      .invoke('width')
      .should('be.below', 100)
  })
})
