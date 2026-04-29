import {Meta} from '@storybook/angular';
import {LandoNorrisSlidingTextComponent} from 'component-library';

const meta: Meta<LandoNorrisSlidingTextComponent> = {
  component: LandoNorrisSlidingTextComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A work in progress. As seen on <a href="https://landonorris.com/" target="_blank">Landon Norris's site</a>.<br/><i>Showcasing a card using an image mask</i>`
      }
    }
  },
  tags: ['autodocs', 'text', 'animation']
}

export default meta;

type Story = Meta<LandoNorrisSlidingTextComponent>;

export const Sample: Story = {
  parameters: {
    layout: 'centered'
  }
}
