import type {Meta, StoryObj} from '@storybook/angular';
import {VuexyThemeCustomizerTriggerComponent} from 'component-library';

const meta: Meta<VuexyThemeCustomizerTriggerComponent> = {
  component: VuexyThemeCustomizerTriggerComponent,
  tags: ['autodocs', 'vuexy']
}

export default meta;

type Story = StoryObj<VuexyThemeCustomizerTriggerComponent>;

export const Sample: Story = {
  render: () => {
    return {
      styles: [
        `:host{display:block;min-height:50px}`
      ],
      template: '<mbr-vuexy-theme-customizer-trigger />'
    }
  }
};
