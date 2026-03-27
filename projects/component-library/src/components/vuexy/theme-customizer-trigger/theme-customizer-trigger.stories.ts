import type {Meta, StoryObj} from '@storybook/angular';
import {ThemeCustomizerTriggerComponent} from 'component-library';

const meta: Meta<ThemeCustomizerTriggerComponent> = {
  component: ThemeCustomizerTriggerComponent,
  tags: ['autodocs', 'vuexy']
}

export default meta;

type Story = StoryObj<ThemeCustomizerTriggerComponent>;

export const Sample: Story = {
  render: () => {
    return {
      styles: [
        ':host{display:block;min-height:50px;}'
      ],
      template: '<mbr-theme-customizer-trigger />'
    }
  }
};
