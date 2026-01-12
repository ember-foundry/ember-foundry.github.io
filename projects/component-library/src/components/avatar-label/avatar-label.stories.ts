import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {AvatarLabelComponent} from 'component-library';
import {provideRouter} from '@angular/router';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const meta: Meta<AvatarLabelComponent> = {
  component: AvatarLabelComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    })
  ],
  argTypes: {
    size: {
      control: 'select',
      options: tailwind_sizes_values
    }
  },
  args: {
    bordered: false,
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    name: 'Jane Doe'
  },
  tags: ['autodocs', 'avatar']
}

export default meta;

type Story = StoryObj<AvatarLabelComponent>;

export const Sample: Story = {};

export const AvatarNameAndPosition: Story = {
  args: {
    ...Sample.args,
    label: 'CEO Alphabet Inc.'
  }
};

export const BBCNewsContributor: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Based on BBC\'s News Contributor component. See: https://www.bbc.co.uk/news/live/cgez72ln8wwt'
      }
    }
  },
  args: {
    image_url: 'https://ichef.bbci.co.uk/ace/standard/128/cpsprodpb//vivo/live/images/2025/3/24/adab3437-2bf6-449b-89b6-a06edbf43b27.jpg.webp',
    name: 'Doug Faulkner',
    label: 'Live reporter'
  }
};

export const BBCNewsReporter: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Based on BBC\'s News Reporter component. See: https://www.bbc.co.uk/news/live/cgez72ln8wwt?post=asset%3A8f075ca8-ad9e-4542-90a7-cffc29dda89c#post'
      }
    }
  },
  args: {
    image_url: 'https://ichef.bbci.co.uk/ace/standard/128/cpsprodpb//vivo/live/images/2025/7/14/00be684a-15cd-4b72-8269-40fc2af67465.jpg.webp',
    name: 'Will Vernon',
    label: 'in the Peak District'
  }
};

export const AvatarNameAndLink: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.image_url ? `[image_url]="'${args.image_url}'"` : '',
      args.name ? `[name]="'${args.name}'"` : ''
    ].join(' ')
    return {
      template: `
        <lib-user-tile ${inputs}>
          <a ngProjectAs="text" href="https://en.wikipedia.org/wiki/Alphabet_Inc." target="_blank" rel="noopener noreferrer">
            ${args.label}
          </a>
       </lib-user-tile>
      `
    }
  },
  args: {
    ...Sample.args,
    label: 'View Profile'
  }
};
