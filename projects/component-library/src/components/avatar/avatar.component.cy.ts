import {mount} from 'cypress/angular-zoneless'
import {AvatarComponent} from 'component-library';

const ExampleValues = {
  name: 'Jane Doe',
  initials: 'JD',
  image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg'
}

const base_checks = () => {
  cy.get('.avatar')
    .should('have.css', 'border-radius', '50%');

  let rendered_width: number, rendered_height: number;

  cy.get('.avatar')
    .invoke('outerWidth')
    .then(value => rendered_width = value as number)

  cy.get('.avatar')
    .invoke('outerHeight')
    .then(value => {
      rendered_height = value as number
      cy.log('Avatar: width', rendered_width.toString());
      cy.log('Avatar: height', rendered_height.toString());
      assert(rendered_width === rendered_height, 'Avatar Component width === height')
    })

  cy.get('.avatar')
    .parent()
    .invoke('outerHeight')
    .then(container_outer_height => {
      cy.get('.avatar')
        .invoke('outerHeight')
        .should('be.lte', container_outer_height, 'Avatar Component Height <= Container Height');
      cy.log('Container Outer Height', container_outer_height);
    })

  cy.get('.avatar')
    .parent()
    .invoke('outerWidth')
    .then(container_outer_width => {
      cy.get('.avatar')
        .invoke('outerWidth')
        .should('be.lte', container_outer_width, 'Avatar Component Width <= Container Width');
      cy.log('Container Outer Width', container_outer_width);
    })
}

const image_checks = (image_url: string) => {
  cy.get('.avatar')
    .should('not.have.text');

  cy.get('.avatar')
    .children()
    .should('have.length', 1);

  cy.get('.avatar img')
    .should('be.visible')
    .should('have.css', 'border-radius', '50%')
    .should('have.attr', 'src')
    .and('include', image_url)

  let border_width: number;

  cy.get('.avatar')
    .invoke('css', 'border-width')
    .then(value => {
      border_width = parseInt(value.toString())
    })

  let avatar_width: number;
  cy.get('.avatar')
    .invoke('outerWidth')
    .then(outerWidth => {
      cy.log('avatar outerWidth', outerWidth)
      avatar_width = outerWidth!
    })

  cy.get('.avatar img')
    .invoke('outerHeight')
    .then(outerHeight => {
      cy.log('image outerHeight', outerHeight)
      assert(outerHeight === (avatar_width - (border_width * 2)), 'Image should match the Avatar size')
    })
}

const initials_checks = (initials: string) => {
  cy.get('.avatar')
    .should('contain.text', initials);

  cy.get('.avatar')
    .children()
    .should('have.length', 1);

  cy.get('.avatar img')
    .should('not.exist');

  cy.get('.avatar .text')
    .should('exist')
    .should('have.text', initials)
}

describe('AvatarComponent [TEXT]', () => {
  afterEach(() => {
    base_checks()
  })
  it('should display UU when no input is provided', () => {
    mount(`<lib-avatar />`, {
      imports: [
        AvatarComponent
      ]
    });
    initials_checks('UU')
  });

  it('display a single uppercase initial when only the first name is provided', () => {
    mount(`<lib-avatar name='Jane' />`, {
      imports: [
        AvatarComponent
      ]
    });
    initials_checks('J')
  });

  it('display a single uppercase initial when only the first name is provided in lowercase', () => {
    mount(`<lib-avatar name='jane' />`, {
      imports: [
        AvatarComponent
      ]
    });
    initials_checks('J')
  });

  it('display uppercase initials when the name is provided in lowercase', () => {
    mount(`<lib-avatar name='${ExampleValues.name.toLowerCase()}' />`, {
      imports: [
        AvatarComponent
      ]
    });
    initials_checks(ExampleValues.initials)
  });

  it('should display ONLY the user initials when no image is provided', () => {
    mount(`<lib-avatar name='${ExampleValues.name}' />`, {
      imports: [
        AvatarComponent
      ]
    });
    initials_checks(ExampleValues.initials)
  });

  it('when the container has a width of 60px, the avatar size should not exceed the container', () => {
    mount(`<div class='container' style="width:60px;height:200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;"><lib-avatar name='${ExampleValues.name}' /></div>`, {
      imports: [
        AvatarComponent
      ]
    });
    initials_checks(ExampleValues.initials)
  })

  it('when the container has a height of 60px, the avatar size should not exceed the container', () => {
    mount(`<div class='container' style="height:60px;width: 200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;"><lib-avatar name='${ExampleValues.name}' /></div>`, {
      imports: [
        AvatarComponent
      ]
    });
    initials_checks(ExampleValues.initials)
  })
})

const cache_bust_random_number = () => Math.random()
describe('AvatarComponent [IMAGE]', () => {
  beforeEach(() => {
    const image_url_object = new URL(ExampleValues.image_url)
    cy.intercept('GET', `**//${image_url_object.hostname}${image_url_object.pathname}*`).as('image_request');
  })

  afterEach(() => {
    base_checks()
    image_checks(ExampleValues.image_url)
    cy.wait(`@image_request`);
  })

  it('should display ONLY the image when no name is provided', () => {
    mount(`<lib-avatar image_url='${ExampleValues.image_url}?=${cache_bust_random_number()}' />`, {
      imports: [
        AvatarComponent
      ]
    });
  });

  it('when the container width is smaller than the avatar size, the avatar size should not exceed the container', () => {
    mount(`
      <div class='container' style="width: 60px;height: 200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;">
        <lib-avatar image_url='${ExampleValues.image_url}?=${cache_bust_random_number()}' />
      </div>
    `, {
      imports: [
        AvatarComponent
      ]
    });
  })

  it('when the container height is smaller than the avatar size, the avatar size should not exceed the container', () => {
    mount(`
      <div class='container' style="height:60px; width: 200px;display:flex;container-type:size;background:blue;justify-items:start;align-items: start;">
        <lib-avatar image_url='${ExampleValues.image_url}?=${cache_bust_random_number()}' />
      </div>
    `, {
      imports: [
        AvatarComponent
      ]
    });
  })

  it('should display ONLY the image when both name and image are provided', () => {
    cy.intercept('GET', `*//mockmind-api.uifaces.co/content/human/1.jpg*`).as('image_request_2');
    mount(`<lib-avatar name='${ExampleValues.name}' image_url='${ExampleValues.image_url}?=${cache_bust_random_number()}' />`, {
      imports: [
        AvatarComponent
      ]
    });

    cy.wait('@image_request_2')

    cy.get('.avatar')
      .screenshot('avatar');
  });
})

// ensure text is in the center of the circle
// what happens when the image provided is too small
// text should be responsive
// allowing specifying an svg image
// allowing specifying your own image
// perhaps a directive? to make anything an avatar?
// placeholder custom image for when no image or name is provided
// broken image
// when using an image, there should not be a background, think of transparent images and svgs
