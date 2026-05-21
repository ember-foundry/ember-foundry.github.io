import {Meta, StoryObj} from '@storybook/angular';
import {SpotifyAlertBoxComponent} from 'component-library';

const meta: Meta<SpotifyAlertBoxComponent> = {
  component: SpotifyAlertBoxComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Alert Box by spotify`
      }
    }
  },
  tags: ['autodocs', 'alert', 'spotify']
}

export default meta;

export const Sample: StoryObj<SpotifyAlertBoxComponent> = {};

export const WithCustomContent: StoryObj<SpotifyAlertBoxComponent> = {
  render: () => ({
    template: `
      <mbr-spotify-alert-box>
        Customized text
      </mbr-spotify-alert-box>
    `
  })
};
