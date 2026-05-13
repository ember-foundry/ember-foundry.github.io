import {Meta} from '@storybook/angular';
import {ColorSchemeToggleWithViewTransitionComponent} from 'component-library';

const meta: Meta<ColorSchemeToggleWithViewTransitionComponent> = {
  component: ColorSchemeToggleWithViewTransitionComponent,
  tags: ['autodocs', 'color', 'scheme', 'toggle', 'view-transiton'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A color scheme toggle component with view transition animation.<br/>
        Inspired by <a href="https://timdeschryver.dev/">Tim Deschryver's site</a>`
      }
    }
  }
}

export default meta;

type Story = Meta<ColorSchemeToggleWithViewTransitionComponent>;

export const Sample: Story = {};

export const StartWithDarkMode: Story = {
  args: {
    active: true
  }
};
