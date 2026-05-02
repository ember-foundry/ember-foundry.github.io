import {Meta} from '@storybook/angular';
import {SVGCheckmarkCircleOutlineComponent} from 'component-library';

const meta: Meta<SVGCheckmarkCircleOutlineComponent> = {
  component: SVGCheckmarkCircleOutlineComponent,
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

type Story = Meta<SVGCheckmarkCircleOutlineComponent>;

export const Sample: Story = {};
