import {Meta, StoryObj} from '@storybook/angular';
import {InputTextComponent} from 'critter';

const meta: Meta<InputTextComponent> = {
  component: InputTextComponent,
  tags: ['autodocs', 'input']
}

export default meta;

export const Showcase: StoryObj<InputTextComponent> = {
  render: () => ({
    template: '<input type="text" mbrCritterInput placeholder="Search items..." />'
  })
}
