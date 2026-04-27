import {Meta, StoryObj} from '@storybook/angular';
import {ToggleSwitchComponent} from 'component-library';
import {action} from 'storybook/actions';

const meta: Meta<ToggleSwitchComponent> = {
  parameters: {
    docs: {
      description: {
        component: `Based on the Preview / Code toggle seen on <a href='https://tailwindcss.com/plus/ui-blocks/preview' target='_blank'>Tailwind's Site</a>.`
      }
    }
  },
  component: ToggleSwitchComponent,
  tags: ['autodocs', 'toggle', 'switch'],
  argTypes: {
    selected: {
      control: { type: 'boolean' }
    },
    state_change: {
      action: 'state_changed'
    }
  },
  args: {
    options: ['Preview', 'Code'],
    selected: false
  }
}

export default meta;

type Story = StoryObj<ToggleSwitchComponent>;

export const Sample: Story = {};

export const DifferentLabels: Story = {
  args: {
    options: ['Off', 'On']
  }
};

export const TurnedOnInitially: Story = {
  args: {
    selected: true
  }
};

export const ListenToEventWithCustomRender: Story = {
  args: {
    options: ['Event Off', 'Event On'],
    selected: false
  },
  render: (args) => {
    return {
      props: {
        ...args,
        on_state_change: action('state_changed_with_custom_render')
      },
      template: `
        <mbr-toggle-switch
          [options]="options"
          [selected]="selected"
          (state_change)="on_state_change($event)"
        />
      `
    }
  }
};
