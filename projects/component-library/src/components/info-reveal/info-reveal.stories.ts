import {Meta} from '@storybook/angular';
import {InfoRevealComponent} from 'component-library';
import {expect} from 'storybook/test';

const meta: Meta<InfoRevealComponent> = {
  component: InfoRevealComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A revealing card using a clip-path approach.<br />🎥 Inspired by <a target="_blank" href="https://youtu.be/F4kJXbaunUg?si=2-MqLuojJ-QicSQy">DesignCourse's youtube video</a>`
      }
    }
  },
  argTypes: {
    reveal: {
      control: 'boolean'
    }
  },
  tags: ['autodocs', 'card', 'clip-path', 'animation', 'info']
}

export default meta;

type Story = Meta<InfoRevealComponent>;

export const Sample: Story = {};

export const PreRevealed: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Pre-revealed state of the info reveal component'
      }
    }
  },
  args: {
    reveal: true
  }
};

export const InteractionTests: Story = {
  play: async ({canvasElement, userEvent, canvas}) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const host = canvasElement.querySelector<HTMLElement>('mbr-info-reveal')!;
    const info_icon = canvas.getByText('i');
    await userEvent.hover(info_icon);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(host).toHaveClass('reveal');
    await userEvent.unhover(info_icon);
    await expect(host).not.toHaveClass('reveal');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await userEvent.hover(info_icon);
    await expect(host).toHaveClass('reveal');
  }
}
