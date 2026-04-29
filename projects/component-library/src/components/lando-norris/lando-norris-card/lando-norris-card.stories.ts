import {Meta} from '@storybook/angular';
import {LandoNorrisCardComponent} from 'component-library';

const meta: Meta<LandoNorrisCardComponent> = {
  component: LandoNorrisCardComponent,
  parameters: {
    docs: {
      description: {
        component: `A work in progress. As seen on <a href="https://landonorris.com/" target="_blank">Landon Norris's site</a>.<br/><i>Showcasing a card using an image mask</i>`
      }
    }
  },
  tags: ['autodocs', 'card', 'mask', 'svg']
}

export default meta;

type Story = Meta<LandoNorrisCardComponent>;

export const Sample: Story = {
  parameters: {
    layout: 'centered'
  }
}
