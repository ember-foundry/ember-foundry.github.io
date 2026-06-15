import type {Meta, StoryObj} from '@storybook/angular';
import {IconGoogleSuperGComponent} from '@ember-foundry/component-library';

const meta: Meta<IconGoogleSuperGComponent> = {
  component: IconGoogleSuperGComponent,
  tags: ['autodocs', 'icon']
}

export default meta;

export const Sample: StoryObj<IconGoogleSuperGComponent> = {
  tags: ['google'],
  render: () => ({
    styles: [':host { min-height: 40px; aspect-ratio: 1; display: inline-flex;}'],
    template: `<span mbrIcon="GoogleSuperG"></span>`
  })
};
