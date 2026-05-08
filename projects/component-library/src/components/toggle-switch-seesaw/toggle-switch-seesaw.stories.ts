import {Meta, StoryObj} from '@storybook/angular';
import {ToggleSwitchSeesawComponent} from 'component-library';
import {pause} from 'component-library/helpers/pause';
import {expect, fn} from 'storybook/test';

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
    },
    state_change: {
      action: 'state_changed'
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


export const InteractionTests: Story = {
  args: {
    active: false,
    state_change: fn()
  },
  play: async ({canvasElement, userEvent, args}) => {
    await pause(1);
    const host = canvasElement.querySelector<HTMLElement>('mbr-toggle-switch-seesaw')!;
    expect(host).toBeVisible();
    await userEvent.click(host);
    await expect(args.state_change).toHaveBeenCalledWith(true);
    await pause(1);
    await expect(host).toHaveClass('active');
    await userEvent.click(host);
    await expect(args.state_change).toHaveBeenCalledWith(false);
    await expect(host).not.toHaveClass('active');
    await pause(1);
    await userEvent.click(host);
    await expect(args.state_change).toHaveBeenCalledWith(true);
    await expect(host).toHaveClass('active');
    await pause(1);
    await userEvent.click(host);
    await expect(args.state_change).toHaveBeenCalledWith(false);
    await expect(host).not.toHaveClass('active');
  }
}
