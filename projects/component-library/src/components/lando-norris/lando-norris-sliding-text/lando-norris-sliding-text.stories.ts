import {Meta} from '@storybook/angular';
import {LandoNorrisSlidingTextComponent} from 'component-library';
import {pause} from 'component-library/helpers/pause';

const stylesForTheseStories = `
:host{
  align-items: center;
  background-color: #282c20;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 3rem;
  padding: 2rem 0;
  width: 100%;
}`;

const meta: Meta<LandoNorrisSlidingTextComponent> = {
  component: LandoNorrisSlidingTextComponent,
  parameters: {
    layout: 'fullscreen',
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
  },
  render: (args) => ({
    props: args,
    styles: [stylesForTheseStories]
  })
}

export default meta;

type Story = Meta<LandoNorrisSlidingTextComponent>;

export const Sample: Story = {
  args: {
    text: 'LANDO NORRIS'
  },
  play: async ({canvasElement: canvasElement, userEvent}) => {
    await pause(1);
    const host = canvasElement.querySelector('mbr-lando-norris-sliding-text')!;
    await userEvent.hover(host);
    await pause(1);
  }
}

export const MultipleItems: Story = {
  render: (args) => {
    return {
      props: args,
      styles: [
        stylesForTheseStories
      ],
      template: `
        <mbr-lando-norris-sliding-text text="TIKTOK" />
        <mbr-lando-norris-sliding-text text="INSTAGRAM" />
        <mbr-lando-norris-sliding-text text="YOUTUBE" />
        <mbr-lando-norris-sliding-text text="TWITCH" />
      `
    }
  },
  play: async ({canvasElement: canvasElement, userEvent}) => {
    await pause(1);
    let host = canvasElement.querySelector('mbr-lando-norris-sliding-text:nth-of-type(1)')!;
    await userEvent.hover(host);
    await pause(1);
    host = canvasElement.querySelector('mbr-lando-norris-sliding-text:nth-of-type(2)')!;
    await userEvent.hover(host);
    await pause(1);
    host = canvasElement.querySelector('mbr-lando-norris-sliding-text:nth-of-type(3)')!;
    await userEvent.hover(host);
    await pause(1);
    host = canvasElement.querySelector('mbr-lando-norris-sliding-text:nth-of-type(4)')!;
    await userEvent.hover(host);
    await pause(2);
    host = canvasElement.querySelector('mbr-lando-norris-sliding-text:nth-of-type(3)')!;
    await userEvent.hover(host);
    await pause(0.5);
    host = canvasElement.querySelector('mbr-lando-norris-sliding-text:nth-of-type(2)')!;
    await userEvent.hover(host);
    await pause(0.5);
    host = canvasElement.querySelector('mbr-lando-norris-sliding-text:nth-of-type(1)')!;
    await userEvent.hover(host);
  }
}

export const KnownIssues: Story = {
  render: (args) => {
    return {
      props: args,
      styles: [
        stylesForTheseStories
      ],
      template: `
        <mbr-lando-norris-sliding-text text="EMOJI😍" />
        <hr style="width: 100%"/>
        <p>Lowercase letters with a tail</p>
        <mbr-lando-norris-sliding-text text="gyjp" />
      `
    }
  },
  play: async ({canvasElement: canvasElement, userEvent}) => {
    await pause(1);
    let host = canvasElement.querySelector('mbr-lando-norris-sliding-text:nth-of-type(1)')!;
    await userEvent.hover(host);
    await pause(1);
    host = canvasElement.querySelector('mbr-lando-norris-sliding-text:nth-of-type(2)')!;
    await userEvent.hover(host);
    await pause(1);
  }
}
