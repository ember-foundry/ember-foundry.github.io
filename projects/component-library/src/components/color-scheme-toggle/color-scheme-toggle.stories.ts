import {Meta} from '@storybook/angular';
import {ColorSchemeToggleComponent} from 'component-library';

const meta: Meta<ColorSchemeToggleComponent> = {
  component: ColorSchemeToggleComponent,
  tags: ['autodocs', 'color', 'scheme', 'toggle'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    active: {
      control: { type: 'boolean' }
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
  }
};

export const StartWithDarkMode: Story = {
  args: {
    active: true
  }
};

export const IconFillsComponentSize: Story = {
  render: (args) => {
    return {
      props: args,
      template: `
        <style>:host{ --size: 100px }</style>
        <mbr-color-scheme-toggle />
      `
    }
  }
};
