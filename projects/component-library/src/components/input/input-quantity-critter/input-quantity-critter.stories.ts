import {Meta, StoryObj} from '@storybook/angular';
import {InputQuantityCritterComponent} from 'component-library';

const meta: Meta<InputQuantityCritterComponent> = {
  component: InputQuantityCritterComponent,
  tags: ['autodocs', 'critter', 'input']
}

export default meta;

export const Showcase: StoryObj<InputQuantityCritterComponent> = {
  render: () => ({
    template: `<mbr-input-quantity-critter />`
  })
}
