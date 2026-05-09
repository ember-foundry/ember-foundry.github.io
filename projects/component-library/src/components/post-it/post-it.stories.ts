import {Meta, StoryObj} from '@storybook/angular';
import {PostItComponent} from 'component-library';

const meta: Meta<PostItComponent> = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'As seen on <a href="https://www.welcometothejungle.com/en/onboarding/complete-profile" target="_blank">Welcome To the Jungle onboarding page</a>'
      }
    }
  },
  argTypes: {
    title: {
      description: 'The title of the post-it note',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'It\'s all confidential' }
      }
    },
    description: {
      description: 'The description of the post-it note',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Your data is private and will only be used for profile creation and job matching.' }
      }
    },
    color: {
      description: 'The description of the post-it note',
      control: { type: 'select' },
      options: [
        'blue',
        'green',
        'pink'
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Your data is private and will only be used for profile creation and job matching.' }
      }
    }
  },
  component: PostItComponent,
  tags: ['autodocs', 'post-it', 'note', 'welcometothejungle']
};

export default meta;

type Story = StoryObj<PostItComponent>;

export const Sample: Story = {};
