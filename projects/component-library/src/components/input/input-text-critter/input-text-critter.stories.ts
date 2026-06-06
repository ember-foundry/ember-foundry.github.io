import {Meta, StoryObj} from '@storybook/angular';
import {InputTextCritterComponent} from 'component-library';

const meta: Meta<InputTextCritterComponent> = {
  component: InputTextCritterComponent,
  tags: ['autodocs', 'critter', 'input']
}

export default meta;

export const Showcase: StoryObj<InputTextCritterComponent> = {
  render: () => ({
    template: '<input type="text" mbrCritter placeholder="Search items..." />'
  })
}
