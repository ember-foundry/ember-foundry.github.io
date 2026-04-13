import {Meta} from '@storybook/angular';
import {ColorSchemeToggleComponent} from 'component-library';

const meta: Meta<ColorSchemeToggleComponent> = {
  component: ColorSchemeToggleComponent,
  tags: ['autodocs', 'color', 'scheme', 'toggle'],
  argTypes: {
    scheme: {
      control: { type: 'radio' },
      options: ['light', 'dark']
    }
  }
}

export default meta;

type Story = Meta<ColorSchemeToggleComponent>;

export const Sample: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Based on <a href="https://web.dev/articles/building/a-theme-switch-component" target="_blank">web.dev theme switch component</a>'
      }
    }
  },
  render: (args) => {
    return {
      props: args,
      styles: [':host{ --size: 100px }'],
      // template: `<mbr-color-scheme-toggle ${inputs}/>`
    }
  }
};
// TODO: show the value in a separate story
// TODO: seperate stories for light and dark
// TODO: seperate component for the mask
// export const Sample2: Story = {};

// export const DarkMode: Story = {
//   args: {
//     scheme: 'dark'
//   }
// };
