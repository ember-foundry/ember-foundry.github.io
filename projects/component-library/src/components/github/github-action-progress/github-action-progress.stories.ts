import type {Meta, StoryObj} from '@storybook/angular';
import {GithubActionProgressComponent} from '@ember-foundry/component-library';

const meta: Meta<GithubActionProgressComponent> = {
  component: GithubActionProgressComponent,
  tags: ['autodocs', 'github']
}

export default meta;

type Story = StoryObj<GithubActionProgressComponent>;

export const Sample: Story = {};
