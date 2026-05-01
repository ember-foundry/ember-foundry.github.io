import {Meta} from '@storybook/angular';
import {SVGCheckmarkCircleFilledAlternateComponent} from 'component-library';

const meta: Meta<SVGCheckmarkCircleFilledAlternateComponent> = {
  component: SVGCheckmarkCircleFilledAlternateComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A filled checkmark SVG icon component with animation for completion status indicators.<br />✏️ Inspired by <a target="_blank" href="https://github.com/rharkor/check-mark-animation">rharko's repository</a>`
      }
    }
  },
  tags: ['autodocs', 'checkmark', 'svg', 'animation']
}

export default meta;

type Story = Meta<SVGCheckmarkCircleFilledAlternateComponent>;

export const Sample: Story = {};
