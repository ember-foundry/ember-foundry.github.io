import {Meta, StoryObj} from '@storybook/angular';
import {FooterCritterComponent} from 'component-library';

const meta: Meta = {
  component: FooterCritterComponent,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs', 'critter', 'footer']
}

export default meta;

export const Showcase: StoryObj<FooterCritterComponent> = {
  render: () => ({
    styles: ['mbr-footer-critter { position: fixed; bottom: 0;}']
  })
}
