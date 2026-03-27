import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {AvatarWithLabelComponent, AvatarLabelComponent} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const meta: Meta<AvatarWithLabelComponent> = {
  component: AvatarWithLabelComponent,
  decorators: [
    moduleMetadata({
      imports: [
        // AvatarLabelDirective
        AvatarLabelComponent
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
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg'
  },
  tags: ['autodocs', 'avatar']
}

export default meta;

type Story = StoryObj<AvatarWithLabelComponent>;

export const Sample: Story = {
  args: {
    name: 'Jane Doe',
    label: 'CEO Alphabet Inc.'
  }
};

export const YouTubeChannel: Story = {
  name: 'YouTube Channel Avatar and Subscribers',
  args: {
    name: 'CNN',
    image_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAAbFBMVEXMAAD////LAAD98vLUJyfihobQAAD66OjrmJj++/vfaGjYSEj32Nj00tLZUVH54ODxubnSGBjfYGDWPDztqKjecnLgb2/uvLzssbHxyMjcWFjomprnoKDYQkLUMDDcT0/if3/mkJDTICDRDw/mWHvcAAAB/UlEQVRIie2U25arIAyGCVgtyql4BKfWw/u/4wS0s9vRWbOv9toX/jeyIh8JCQkhp06d+j9Eg7bFi+1rRf6Y36hbWRRFgou7mrcddFYlieu5KJb7PdlRpGmlEELXJO2EduNqbaQWXYkgVULOztXfPNLSZRA1kSp82BSs92g0A4ZoAZKMXd45mmsAcbFK+WTOoCqvIDxu7oAp/NWTwPEdRz2ea9O8Mqa1Dwa3j9JAlRKqoSr6GrSnRxydJbCb5zHOi2KQ6tZyVlPkrg0rOqiWQ+6Dw73BO2VSyiZyzPbhWsjlYPKMNQccHRz0DwBZxAJGDpzVMK5cln+ASQ64OgPlQC9rzVeOjVeQSeSgtQJqv+d6dMVgK83GoUMJ48qxsedy5DuuAuMxie8cny5Ms8jFM+Te3wHHNRfWIYIc04BnwF/FySsDfcMiJ69ce3fAHeSFI5R5s3JlC33OfqvDY+VIB90j3k+SOuOq+6Xu4X0HjmIB/TVyt7SFLtnl8/2dBUUOHcob7wNHlYbHuO+Hl3cdVC2MTZQOodpjHThMuU7dwH7uoygDLMcumji3SoALEQlsrgm0/bFvV7UpGlMTQs9CgULOQwcv5JuecyJKdkM4ly6V1HLaiuVwYgwHg2mbS0HDNrgoLf1zK11UQY7m2TYHv4bh0/SyPqROnTr1b/UJq2cjfpeutjEAAAAASUVORK5CYII=',
    label: '19.2m subscribers'
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
  parameters: {
    docs: {
      description: {
        story: 'This example uses a content projected label'
      }
    }
  },
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.image_url ? `[image_url]="'${args.image_url}'"` : '',
      args.name ? `[name]="'${args.name}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-with-label ${inputs}>
          <a libAvatarLabel href="https://en.wikipedia.org/wiki/Alphabet_Inc." target="_blank" rel="noopener noreferrer">
            ${args.label}
          </a>
       </mbr-avatar-with-label>
      `
    }
  },
  args: {
    name: 'Jane Doe',
    label: 'View Profile'
  }
};
