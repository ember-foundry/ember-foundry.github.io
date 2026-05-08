import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {AvatarComponent, AvatarImageDirective} from 'component-library';
import {expect} from 'storybook/test';
import {InputType} from 'storybook/internal/csf';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const size_arg_type: InputType = {
  options: tailwind_sizes_values,
  control: 'select'
}

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AvatarImageDirective
      ]
    })
  ],
  tags: ['autodocs','avatar'],
  argTypes: {
    bordered: {
      control: 'boolean'
    },
    image_url: {
      control: 'text'
    },
    name: {
      control: 'text'
    },
    size: {
      options: tailwind_sizes_values,
      control: 'select'
    }
  }
}

export default meta;

type Story = StoryObj<AvatarComponent>;

const base_checks: Story['play'] = async ({ canvasElement }) => {
  const avatar_component = canvasElement.querySelector('.avatar');
  expect(avatar_component).toBeInTheDocument();
  expect(avatar_component).toBeVisible();
}

export const Sample: Story = {
  args: {
    bordered: true,
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    name: 'Jane Doe'
  },
  argTypes: {
    size: size_arg_type
  },
  play: async (context) => {
    await base_checks(context)
  }
}

export const OnlyText: Story = {
  args: {
    ...Sample.args,
    image_url: undefined
  },
  argTypes: Sample.argTypes,
  play: async (context) => {
    await base_checks(context)
  }
}

export const OnlyImage: Story = {
  args: {
    ...Sample.args,
    name: undefined
  },
  argTypes: Sample.argTypes,
  play: async (context) => {
    await base_checks(context)
  }
}

export const MultipleFirstNamesNames: Story = {
  ...OnlyText,
  parameters: {
    docs: {
      description: {
        story: 'Users name is "Jane Emily Sandra Doe"'
      }
    }
  },
  args: {
    name: 'Jane Emily Sandra Doe'
  }
}

export const NameWithExtraSpaces: Story = {
  ...OnlyText,
  parameters: {
    docs: {
      description: {
        story: 'Users name is "       Jane       Doe       "'
      }
    }
  },
  args: {
    name: '       Jane       Doe       '
  }
}

export const NoLastName: Story = {
  ...OnlyText,
  parameters: {
    docs: {
      description: {
        story: 'Users name is just "Jane"'
      }
    }
  },
  args: {
    name: 'Jane'
  }
}

export const BrokenImage: Story = {
  ...Sample,
  args: {
    name: 'Jane Doe',
    image_url: 'https://www.example.com/broken_image.jpg'
  }
}

export const NoNameNoImage: Story = {}

export const WithCustomPNGImage: Story = {
  render: (args) => {
    const inputs = [
      args.bordered ? `[bordered]="${args.bordered}"` : '',
      args.size ? `[size]="'${args.size}'"` : ''
    ].join(' ');
    return {
      template: `<mbr-avatar ${inputs}>
            <img mbrAvatarImage src="https://mockmind-api.uifaces.co/content/human/222.jpg" />
        </mbr-avatar>
      `
    }
  }
}
export const WithCustomSVGImage: Story = {
  render: (args) => {
    const inputs = [
      args.bordered ? `[bordered]="${args.bordered}"` : '',
      args.size ? `[size]="'${args.size}'"` : ''
    ].join(' ');
    return {
      template: `<mbr-avatar ${inputs}>
            <svg mbrAvatarImage xmlns="http://www.w3.org/2000/svg" fill="none" height="63" viewBox="0 0 63 63" width="63">
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="34.9087" x2="7.63224" y1="61.029" y2="13.7847">
                    <stop offset="0" stop-color="#1e8e3e"/>
                    <stop offset="1" stop-color="#34a853"/>
                </linearGradient>
                <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="26.9043" x2="54.1808" y1="63.0788" y2="15.8345">
                    <stop offset="0" stop-color="#fcc934"/>
                    <stop offset="1" stop-color="#fbbc04"/>
                </linearGradient>
                <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="4.22145" x2="58.7745" y1="19.6884" y2="19.6884">
                    <stop offset="0" stop-color="#d93025"/>
                    <stop offset="1" stop-color="#ea4335"/>
                </linearGradient>
                <path d="m31.499 47.2466c8.6985 0 15.75-7.0515 15.75-15.75s-7.0515-15.75-15.75-15.75-15.75 7.0515-15.75 15.75 7.0515 15.75 15.75 15.75z" fill="#fff"/>
                <path d="m17.8591 39.3751-13.63772-23.6212c-2.76527 4.788-4.22118922 10.2197-4.22137998 15.7489s1.45535998 10.961 4.22028998 15.7492c2.76494 4.7882 6.74181 8.7641 11.53071 11.5279 4.7889 2.7637 10.221 4.2179 15.7502 4.2164l13.6377-23.6212v-.0041c-1.3813 2.3954-3.369 4.3848-5.7632 5.7681s-5.1104 2.1118-7.8755 2.1122-5.4816-.7272-7.8762-2.1099c-2.3945-1.3826-4.3829-3.3714-5.7649-5.7663z" fill="url(#a)"/>
                <path d="m45.1379 39.3741-13.6376 23.6212c5.5292.0008 10.9611-1.4542 15.7496-4.2187 4.7885-2.7644 8.7648-6.7408 11.5291-11.5294 2.7642-4.7887 4.219-10.2207 4.2181-15.7499-.001-5.5292-1.4577-10.9606-4.2237-15.7483h-27.2754l-.0034.0021c2.7651-.0014 5.4818.7254 7.8769 2.1071 2.3951 1.3818 4.3841 3.3698 5.767 5.7643 1.3829 2.3944 2.1109 5.1108 2.1109 7.8758-.0001 2.7651-.7283 5.4814-2.1113 7.8758z" fill="url(#b)"/>
                <path d="m31.499 43.9688c6.8863 0 12.4688-5.5825 12.4688-12.4688s-5.5825-12.4688-12.4688-12.4688-12.4687 5.5825-12.4687 12.4688 5.5824 12.4688 12.4687 12.4688z" fill="#1a73e8"/>
                <path d="m31.4991 15.75h27.2754c-2.764-4.7888-6.74-8.76553-11.5283-11.53029-4.7883-2.76475-10.2202-4.22010235-15.7494-4.21970992s-10.9608 1.45650992-15.7487 4.22194992c-4.788 2.76543-8.76341 6.74275-11.52666 11.53185l13.63766 23.6212.0035.0019c-1.3837-2.394-2.1127-5.11-2.1136-7.8751s.7264-5.4817 2.1086-7.8765c1.3821-2.3948 3.3706-4.3835 5.7652-5.7659 2.3947-1.3825 5.1112-2.11 7.8763-2.1094z" fill="url(#c)"/>
            </svg>
        </mbr-avatar>
      `
    }
  }
}

export const AllSizes: Story = {
  render: (args) => {
    const inputs = [
      args.name ? `[name]="'${args.name}'"` : '',
      args.image_url ? `[image_url]="'${args.image_url}'"` : '',
      args.bordered ? `[bordered]="${args.bordered}"` : ''
    ].join(' ');

    const template_string = tailwind_sizes_values
      .map(i => `<mbr-avatar  ${inputs} size="${i}" />`)
      .join('\n')
    return {
      styles: [
        `:host {
          display: inline-flex;
          flex-direction: column;
          row-gap: 5px;
       }`
      ],
      template: template_string
    }
  },
  args: Sample['args']
};
