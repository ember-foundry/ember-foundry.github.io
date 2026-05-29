import {Meta, StoryObj} from '@storybook/angular';
import {CardWebGradientsComponent} from 'component-library';
import {args_to_angular_inputs} from 'component-library/helpers/storybook/args_to_angular_inputs';

const meta: Meta = {
  component: CardWebGradientsComponent,
  tags: ['autodocs', 'css', 'background', 'gradients', 'card']
};

const all_gradients = [
  {
    title: 'Trello Blue',
    styles: 'background-image: url(https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/snow.svg)',
    description: 'Background Image'
  },
  {
    title: 'Matchday Experience',
    styles: 'background-image: linear-gradient(to right bottom, oklab(0.766529 -0.00252706 0.138662 / 0.2) 0%, oklab(0.766529 -0.00252706 0.138662 / 0.05) 100%)',
    description: 'Linear Gradient'
  }
]

export default meta;


export const Gradients: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '<p>Inspired by <a href="https://webgradients.com/" target="_blank">webgradients.com</a></p>'
      }
    }
  },
  render: () => {
    return {
      template: `<div class="flex gap-4">\n\t${all_gradients.map(item => `<mbr-card-web-gradients ${args_to_angular_inputs(item)} />`).join('\n\t')}\n</div>`
    }
  }
};
