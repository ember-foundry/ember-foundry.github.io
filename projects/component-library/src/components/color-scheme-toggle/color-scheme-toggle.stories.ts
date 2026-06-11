import {Meta, moduleMetadata} from '@storybook/angular';
import {ColorSchemeToggleComponent, ColorSchemeToggleWithViewTransitionComponent} from '@ember-foundry/component-library';

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

export const WithViewTransition: Story = {
  decorators: [
    moduleMetadata({
      imports: [
        ColorSchemeToggleWithViewTransitionComponent
      ]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: `⚠️ View this in Full Screen.<br/>A color scheme toggle component with view transition animation.<br/>Inspired by <a href="https://timdeschryver.dev/">Tim Deschryver's site</a>`
      }
    }
  },
  args: {
    active: false
  },
  render: (args) => {
    return {
      props: args,
      template: `
        <style>:host{ --size: 100px }</style>
        <mbr-color-scheme-toggle-with-view-transition [active]="${args.active}" />
      `
    }
  }
};
