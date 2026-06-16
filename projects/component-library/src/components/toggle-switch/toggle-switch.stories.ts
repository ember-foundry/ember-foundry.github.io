import {Meta, StoryObj} from '@storybook/angular';
import {ToggleSwitchComponent} from '@ember-foundry/component-library';
import {pause} from '../../helpers/pause';
import {action} from 'storybook/actions';
import {expect, fn} from 'storybook/test';

const meta: Meta<ToggleSwitchComponent> = {
  parameters: {
    docs: {
      description: {
        component: `Based on the Preview / Code toggle seen on <a href='https://tailwindcss.com/plus/ui-blocks/preview' target='_blank'>Tailwind's Site</a>.<br/>⚠️&nbsp;All the options are the same dimensions`
      }
    }
  },
  component: ToggleSwitchComponent,
  tags: ['autodocs', 'toggle', 'switch'],
  argTypes: {
    active: {
      control: {type: 'boolean'}
    },
    state_change: {
      action: 'state_changed'
    }
  },
  args: {
    options: ['Preview', 'Code'],
    active: false
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
    active: true
  }
};

export const ListenToEventWithCustomRender: Story = {
  args: {
    options: ['Event Off', 'Event On'],
    active: false
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
          [active]="${args.active}"
          (state_change)="on_state_change($event)"
        />
      `
    }
  }
};

export const InteractionTest: Story = {
  args: {
    options: ['Interaction Off', 'Interaction On'],
    active: false,
    state_change: fn()
  },
  play: async ({canvasElement: storybook_element, args, userEvent}) => {
    await expect(args.state_change).toHaveBeenCalledWith(false);
    await pause(1);
    const toggle_switch = storybook_element.querySelector<HTMLElement>('mbr-toggle-switch')!;
    await userEvent.click(toggle_switch);
    await pause(1);
    await expect(args.state_change).toHaveBeenCalledWith(true);
    await userEvent.click(toggle_switch);
    await pause(1);
    await expect(args.state_change).toHaveBeenCalledWith(false);
  }
};

export const InteractionTestWhenTurnedOnInitially: Story = {
  args: {
    options: ['Interaction Off', 'Interaction On'],
    active: true,
    state_change: fn()
  },
  play: async ({canvasElement: storybook_element, args, userEvent}) => {
    await expect(args.state_change).toHaveBeenCalledWith(true);
    await pause(1);
    const toggle_switch = storybook_element.querySelector<HTMLElement>('mbr-toggle-switch')!;
    await userEvent.click(toggle_switch);
    await pause(1);
    await expect(args.state_change).toHaveBeenCalledWith(false);
    await userEvent.click(toggle_switch);
    await pause(1);
    await expect(args.state_change).toHaveBeenCalledWith(true);
  }
};

export const OneReallyLongOption: Story = {
  parameters: {
    docs: {
      description: {
        story: '⚠️&nbsp;Here you can see the flaw of this component when it has a really long option'
      }
    }
  },
  args: {
    options: ['This is a really long option', 'No']
  }
};
