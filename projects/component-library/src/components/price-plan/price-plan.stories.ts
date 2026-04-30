import {Meta, StoryObj} from '@storybook/angular';
import {PricePlanComponent} from 'component-library';

const meta: Meta<PricePlanComponent> = {
  parameters: {
    layout: 'centered'
  },
  component: PricePlanComponent,
  tags: ['autodocs', 'price', 'plan']
};

export default meta;

type Story = StoryObj<PricePlanComponent>;

export const Sample: Story = {};
