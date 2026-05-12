import {Meta} from '@storybook/angular';
import {ColorSchemeToggleWithViewTransitionComponent} from 'component-library';

const meta: Meta<ColorSchemeToggleWithViewTransitionComponent> = {
  component: ColorSchemeToggleWithViewTransitionComponent,
  tags: ['autodocs', 'color', 'scheme', 'toggle', 'view-transiton'],
  parameters: {
    layout: 'centered'
  }
}

export default meta;

type Story = Meta<ColorSchemeToggleWithViewTransitionComponent>;

export const Sample: Story = {};
