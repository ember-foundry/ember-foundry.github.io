import {Meta} from '@storybook/angular';
import {DribbbleAuthorDetailsBarComponent} from '@ember-foundry/component-library';

const meta: Meta<DribbbleAuthorDetailsBarComponent> = {
  component: DribbbleAuthorDetailsBarComponent,
  parameters: {
    docs: {
      description: {
        component: `An author details bar.<br />🔗 As seen on <a target="_blank" href="https://dribbble.com/shots/27167137-Property-Management-Dashboard">Dribbble.com</a>`
      }
    }
  },
  tags: ['autodocs', 'dribbble', 'author']
}

export default meta;

type Story = Meta<DribbbleAuthorDetailsBarComponent>;

export const Sample: Story = {};
