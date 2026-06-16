import {Meta} from '@storybook/angular';
import {SVGCheckmarkComponent} from '@ember-foundry/component-library';

const meta: Meta<SVGCheckmarkComponent> = {
  component: SVGCheckmarkComponent,
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

type Story = Meta<SVGCheckmarkComponent>;

export const Sample: Story = {};
