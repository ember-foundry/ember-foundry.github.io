import {Meta, StoryObj} from '@storybook/angular';
import {InputQuantityPlayfulEarthyComponent} from 'component-library';

const meta: Meta<InputQuantityPlayfulEarthyComponent> = {
  component: InputQuantityPlayfulEarthyComponent,
  tags: ['autodocs', 'playful earthy', 'input']
}

export default meta;

export const Showcase: StoryObj<InputQuantityPlayfulEarthyComponent> = {
  render: () => ({
    template: `<mbr-input-quantity-playful-earthy />`
  })
}
