import {Meta, StoryObj} from '@storybook/angular';
import {BaselineAvailabilityComponent} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';
import {tailwind_sizes} from 'component-library/enums/tailwind-sizes.enum';

const meta: Meta<BaselineAvailabilityComponent> = {
  parameters: {
    docs: {
      description: {
        component: 'Based off the baseline component seen at https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility'
      }
    }
  },
  argTypes: {
    size: {
      options: tailwind_sizes_values,
      control: 'select'
    },
    supported: {
      options: ['chrome', 'edge', 'firefox', 'safari'],
      control: 'check'
    }
  },
  component: BaselineAvailabilityComponent,
  tags: ['autodocs', 'avatar']
}

export default meta;

type Story = StoryObj<BaselineAvailabilityComponent>;
export const Sample: Story = {
  args: {
    supported: ['chrome'],
    size: tailwind_sizes['3xs']
  }
};
export const AllUnsupported: Story = {
  args: {
    size: tailwind_sizes['3xs']
  }
};

export const AllSupported: Story = {
  args: {
    supported: ['chrome', 'edge', 'safari', 'firefox'],
    size: tailwind_sizes['3xs']
  }
};

export const DifferentOrder: Story = {
  args: {
    supported: ['firefox', 'safari', 'edge', 'chrome'],
    size: tailwind_sizes['3xs']
  }
};
