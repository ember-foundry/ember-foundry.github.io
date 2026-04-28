import {Meta, StoryObj} from '@storybook/angular';
import {ToggleSwitchSeesawComponent} from 'component-library';

const meta: Meta<ToggleSwitchSeesawComponent> = {
  component: ToggleSwitchSeesawComponent,
  parameters: {
    docs: {
      description: {
        component: `A toggle switch component with a seesaw effect.<br/>Inspired by <a href='https://codepen.io/g-khan-baytekin/pen/gOmXvpp' target='_blank'>Gökhan Baytekin's Pen</a>.`
      }
    }
  },
  tags: ['autodocs', 'toggle', 'switch', 'seesaw'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the toggle switch is active or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle switch is disabled or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  }
}

export default meta;

type Story = StoryObj<ToggleSwitchSeesawComponent>;

export const Sample: Story = {};

export const TurnedOnInitially: Story = {
  args: {
    active: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
