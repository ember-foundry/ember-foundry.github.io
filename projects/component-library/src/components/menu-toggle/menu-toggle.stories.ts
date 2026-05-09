import {Meta} from '@storybook/angular';
import {MenuToggleComponent} from 'component-library';

const meta: Meta<MenuToggleComponent> = {
  component: MenuToggleComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A helper wrapper menu toggle component that allows you to choose between the different variants in this library.'
      }
    }
  },
  tags: ['autodocs', 'menu', 'toggle', 'animation', 'svg']
}

export default meta;

type Story = Meta<MenuToggleComponent>;

export const Sample: Story = {};
