import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CardWebGradientsComponent} from 'component-library';

const meta: Meta = {
  decorators: [
    moduleMetadata({
      imports: [
        CardWebGradientsComponent
      ]
    })
  ],
  tags: ['css', 'background', 'gradients', 'card']
};

export default meta;

const gradients = [
  {
    label: 'Trello Blue',
    value: 'url(https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/snow.svg)',
    citation: {
      name: 'Trello',
      url: 'https://trello.com/'
    }
  },
  {
    label: 'Matchday Experience',
    value: 'linear-gradient(to right bottom, oklab(0.766529 -0.00252706 0.138662 / 0.2) 0%, oklab(0.766529 -0.00252706 0.138662 / 0.05) 100%)'
  }
];

export const Gradients: StoryObj = {
  render: () => {
    return {
      template:
        `
          <h1>Gradients</h1>
          <p>Inspired by <a href="https://webgradients.com/" target="_blank">webgradients.com</a></p>
          <div class="p-3 grid grid-cols-3 gap-4">
            ${
              gradients.map(item => {
              return `
                <mbr-card-web-gradients
                  title="${item.label}"
                  styles="background-image: ${item.value}"
                  description="${item.citation ? `As seen on <a href='${item.citation.url}' target='_blank'>${item.citation.name}</a>` : ''}"
                />
              `;
            }).join('')}
          </div>
        `
    }
  }
};
