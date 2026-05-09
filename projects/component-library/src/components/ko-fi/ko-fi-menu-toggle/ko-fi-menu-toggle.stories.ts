import {Meta} from '@storybook/angular';
import {expect, fn} from 'storybook/test';
import {pause} from 'component-library/helpers/pause';
import {KoFiMenuToggleComponent} from 'component-library';

const meta: Meta<KoFiMenuToggleComponent> = {
  component: KoFiMenuToggleComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A menu toggle component that switches between a hamburger and a close icon.<br />🔗 As seen on <a target="_blank" href="https://ko-fi.com/phosphoricons">Ko-fi.com</a>`
      }
    }
  },
  tags: ['autodocs', 'menu', 'toggle', 'animation', 'close', 'svg', 'ko-fi'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the toggle is active or not',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: 'false'}
      }
    },
    state_change: {
      action: 'state_changed'
    }
  }
}

export default meta;

type Story = Meta<KoFiMenuToggleComponent>;

export const Sample: Story = {};

export const ActiveStartState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Pre-revealed state of the info reveal component'
      }
    }
  },
  args: {
    active: true
  }
};

export const InteractionTests: Story = {
  args: {
    active: false,
    state_change: fn()
  },
  play: async ({canvasElement, userEvent, args}) => {
    await pause(1);
    const host = canvasElement.querySelector<HTMLElement>('mbr-ko-fi-menu-toggle')!;
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
