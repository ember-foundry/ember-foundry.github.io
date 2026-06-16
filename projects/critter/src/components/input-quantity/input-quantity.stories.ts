import {Meta, StoryObj} from '@storybook/angular';
import {InputQuantityComponent} from 'critter';

const meta: Meta<InputQuantityComponent> = {
  component: InputQuantityComponent,
  tags: ['autodocs', 'input']
}

export default meta;

export const Showcase: StoryObj<InputQuantityComponent> = {
  render: () => ({
    template: '<mbr-critter-input-quantity />'
  })
}
