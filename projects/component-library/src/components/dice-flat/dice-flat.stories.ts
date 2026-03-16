import {Meta, StoryObj} from '@storybook/angular';
import {DiceFlatComponent, FlipCardComponent} from 'component-library';

const meta: Meta<DiceFlatComponent> = {
  component: DiceFlatComponent,
  tags: ['autodocs','dice','svg'],
  argTypes: {
    size: {
      type: 'number',
      min: 0
    },
    value: {
      type: 'number',
      min: 1,
      max: 6,
      step: 1
    }
  },
  args: {
    size: 192,
    value: 6
  }
}

export default meta;

type Story = StoryObj<FlipCardComponent>;

export const Sample: Story = {}
