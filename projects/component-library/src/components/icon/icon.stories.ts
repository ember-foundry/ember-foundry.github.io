import type {Meta, StoryObj} from '@storybook/angular';
import {IconGoogleSuperGComponent} from '@ember-foundry/component-library';

const meta: Meta<IconGoogleSuperGComponent> = {
  component: IconGoogleSuperGComponent,
  tags: ['autodocs', 'icon']
}

export default meta;

export const Default: StoryObj<IconGoogleSuperGComponent> = {
  tags: ['google'],
  render: () => ({
    template: `<span mbrIcon="GoogleSuperG"></span>`
  })
};
