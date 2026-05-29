import {Meta, StoryObj} from '@storybook/angular';
import {CardWebGradientsComponent} from 'component-library';
import {args_to_angular_inputs} from 'component-library/helpers/storybook/args_to_angular_inputs';

const meta: Meta = {
  component: CardWebGradientsComponent,
  tags: ['autodocs', 'css', 'background', 'gradients', 'card']
};

const all_gradients = [
  /**
   * https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/snow.svg
   */
  {
    title: 'Trello Blue',
    styles: 'background: linear-gradient(145deg, #0C66E4 2%, #37B4C3 100%)',
    description: 'Background Image'
  },
  {
    title: 'Matchday Experience',
    styles: 'background-image: linear-gradient(to right bottom, oklab(0.766529 -0.00252706 0.138662 / 0.2) 0%, oklab(0.766529 -0.00252706 0.138662 / 0.05) 100%)',
    description: 'Linear Gradient'
  },
  {
    title: 'Picked by CodePen',
    styles: 'background-image: linear-gradient(90deg, #47cf73, #ffdd40, #ae63e4, #0ebeff, #47cf73); background-size: 100% 3px;background-repeat: no-repeat; background-position: center',
    description: 'Linear Gradient'
  },
  /**
   * https://codepen.io/editor/amit_sheen/pen/019e6bec-70b1-7a35-a0e2-733c6500e561
   */
  {
    title: 'Red Ball',
    styles: 'background-image: radial-gradient(circle at 65% 15%, red, black)',
    description: 'Radial Gradient'
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
      template: `<div class="flex flex-wrap gap-4">\n\t${all_gradients.map(item => `<mbr-card-web-gradients ${args_to_angular_inputs(item)} />`).join('\n\t')}\n</div>`
    }
  }
};
