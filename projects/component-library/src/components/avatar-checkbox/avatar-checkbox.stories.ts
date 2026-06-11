import {Meta, StoryObj} from '@storybook/angular';
import {AvatarCheckboxComponent} from '@ember-foundry/component-library';
import {tailwind_sizes_values} from '../../constants/tailwind-sizes';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';

const meta: Meta<AvatarCheckboxComponent> = {
  argTypes: {
    size: {
      options: tailwind_sizes_values,
      control: 'select'
    },
    selected: {
      control: 'boolean'
    }
  },
  component: AvatarCheckboxComponent,
  tags: ['autodocs', 'avatar', 'checkbox']
}

export default meta;

type Story = StoryObj<AvatarCheckboxComponent>;
export const Sample: Story = {
  args: {
    size: tailwind_sizes['xl']
  }
};

export const Preselected: Story = {
  args: {
    selected: true,
    size: tailwind_sizes['xl']
  }
};
