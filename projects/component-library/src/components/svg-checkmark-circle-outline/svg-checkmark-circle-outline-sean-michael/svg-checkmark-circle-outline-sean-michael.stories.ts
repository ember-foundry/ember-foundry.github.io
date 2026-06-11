import {Meta} from '@storybook/angular';
import {SVGCheckmarkCircleOutlineSeanMichaelComponent} from '@ember-foundry/component-library';

const meta: Meta<SVGCheckmarkCircleOutlineSeanMichaelComponent> = {
  component: SVGCheckmarkCircleOutlineSeanMichaelComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A filled checkmark SVG icon component with animation for completion status indicators.<br />✏️ Inspired by <a target="_blank" href="https://codepen.io/seansean11/pen/GRPxRm">Sean Michael's pen</a>`
      }
    }
  },
  tags: ['autodocs', 'checkmark', 'svg', 'animation']
}

export default meta;

type Story = Meta<SVGCheckmarkCircleOutlineSeanMichaelComponent>;

export const Sample: Story = {};
