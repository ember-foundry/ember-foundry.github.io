import {Meta} from '@storybook/angular';
import {LandoNorrisSlidingTextComponent} from 'component-library';

const meta: Meta<LandoNorrisSlidingTextComponent> = {
  component: LandoNorrisSlidingTextComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Replicated the Lando Norris text effect shown in this 🎬 <a href='https://youtu.be/9H34nxxVEgc?si=qF2YGX7OleXoG0iY' target="_blank">Syntax YouTube Video</a>.`
      }
    }
  },
  tags: ['autodocs', 'text', 'animation'],
  argTypes: {
    text: {
      control: {type: 'text'}
    }
  }
}

export default meta;

type Story = Meta<LandoNorrisSlidingTextComponent>;

export const Sample: Story = {
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    text: 'PERMISSIONS'
  },
  render: (args) => {
    return {
      props: args,
      styles: [
        `:host{
          align-items: center;
          background-color: #d2ff00;
          background-color: #282c20;
          color: black;
          color: #dde1d2;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 3rem;
          padding: 2rem 0;
          width: 100%;
        }`
      ],
      template: `
        <mbr-lando-norris-sliding-text text="tiktok" />
        <mbr-lando-norris-sliding-text text="instagram" />
        <mbr-lando-norris-sliding-text text="youtube" />
        <mbr-lando-norris-sliding-text text="twitch" />
        <mbr-lando-norris-sliding-text text="emoji😍" />
      `
    }
  }
}
