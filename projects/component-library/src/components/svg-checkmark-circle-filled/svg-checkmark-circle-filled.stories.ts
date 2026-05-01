import {Meta} from '@storybook/angular';
import {SVGCheckmarkCircleFilledComponent} from 'component-library';

const meta: Meta<SVGCheckmarkCircleFilledComponent> = {
  component: SVGCheckmarkCircleFilledComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A filled checkmark SVG icon component with animation for completion status indicators.<br />✏️ Inspired by <a target="_blank" href="https://codepen.io/haniotis/pen/KwvYLO">Alexander Haniotis's pen</a>`
      }
    }
  },
  tags: ['autodocs', 'checkmark', 'svg', 'animation']
}

export default meta;

type Story = Meta<SVGCheckmarkCircleFilledComponent>;

export const Sample: Story = {};
