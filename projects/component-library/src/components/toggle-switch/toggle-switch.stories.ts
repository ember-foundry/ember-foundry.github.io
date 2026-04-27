import {Meta, StoryObj} from '@storybook/angular';
import {ToggleSwitchComponent} from 'component-library';
import {action} from 'storybook/actions';
import {expect, fn} from 'storybook/test';

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

export const InteractionTest: Story = {
  args: {
    options: ['Interaction Off', 'Interaction On'],
    selected: false,
    state_change: fn()
  },
  play: async ({canvasElement: storybook_element, args, userEvent}) => {
    await expect(args.state_change).toHaveBeenCalledWith(false);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const toggle_switch = storybook_element.querySelector<HTMLElement>('mbr-toggle-switch')!;
    await userEvent.click(toggle_switch);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.state_change).toHaveBeenCalledWith(true);
    await userEvent.click(toggle_switch);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.state_change).toHaveBeenCalledWith(false);
  }
};

export const InteractionTestWhenTurnedOnInitially: Story = {
  args: {
    options: ['Interaction Off', 'Interaction On'],
    selected: true,
    state_change: fn()
  },
  play: async ({canvasElement: storybook_element, args, userEvent}) => {
    await expect(args.state_change).toHaveBeenCalledWith(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const toggle_switch = storybook_element.querySelector<HTMLElement>('mbr-toggle-switch')!;
    await userEvent.click(toggle_switch);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.state_change).toHaveBeenCalledWith(false);
    await userEvent.click(toggle_switch);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.state_change).toHaveBeenCalledWith(true);
  }
};
