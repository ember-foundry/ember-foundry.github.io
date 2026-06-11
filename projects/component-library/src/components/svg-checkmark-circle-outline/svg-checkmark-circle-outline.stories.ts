import {Meta} from '@storybook/angular';
import {SVGCheckmarkCircleOutlineComponent} from '@ember-foundry/component-library';

const meta: Meta<SVGCheckmarkCircleOutlineComponent> = {
  component: SVGCheckmarkCircleOutlineComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `An animated SVG checkmark icon component with native svg animation`
      }
    }
  },
  tags: ['autodocs', 'checkmark', 'svg', 'animation'],
  argTypes: {
    variant: {
      options: [
        'alexander-haniotis',
        'sean-michael'
      ],
      control: { type: 'select' },
      defaultValue: { summary: 'alexander-haniotis' }
    }
  },
  args: {
    variant: 'alexander-haniotis'
  }
}

export default meta;

type Story = Meta<SVGCheckmarkCircleOutlineComponent>;

export const Sample: Story = {};
