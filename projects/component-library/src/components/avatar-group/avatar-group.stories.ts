import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {
  AvatarComponent,
  AvatarGroupComponent, RandomMilkyBackgroundDirective
} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const meta: Meta<AvatarGroupComponent> = {
  component: AvatarGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent,
        RandomMilkyBackgroundDirective
      ]
    })
  ],
  tags: ['autodocs','avatar'],
  argTypes: {
    bordered: {
      control: 'boolean'
    },
    density: {
      control: 'select',
      options: ['compact', 'loose']
    },
    limit: {
      control: 'range'
    },
    layering: {
      options: ['first_on_top', 'last_on_top'],
      control: 'select'
    },
    overlap: {
      control: 'number',
      min: -100,
      max: 0
    },
    size: {
      options: tailwind_sizes_values,
      control: 'select'
    }
  }
}

export default meta;

type Story = StoryObj<AvatarGroupComponent>;
export const Sample: Story = {
  render: (args) => {
    const inputs = [
      args.bordered ? `[bordered]="${args.bordered}"` : '',
      args.density ? `[density]="'${args.density}'"` : '',
      args.layering ? `[layering]="'${args.layering}'"` : '',
      args.limit ? `[limit]="${args.limit}"` : '',
      args.overlap ? `[overlap]="'${args.overlap}'"` : '',
      args.size ? `[size]="'${args.size}'"` : ''
    ].join(' ');
    return {
      template: `
        <mbr-avatar-group ${inputs}>
          <mbr-avatar mbrRandomMilkyBackground name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Joe Soap" />
          <mbr-avatar mbrRandomMilkyBackground name="Jane Doe" />
          <mbr-avatar mbrRandomMilkyBackground name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </mbr-avatar-group>
      `
    }
  },
  args: {
    bordered: true,
    limit: 4
  }
};

export const IndividualBorderedValues: Story = {
  render: (args) => {
    const inputs = [
      args.bordered ? `[bordered]="${args.bordered}"` : '',
      args.density ? `[density]="'${args.density}'"` : '',
      args.layering ? `[layering]="'${args.layering}'"` : '',
      args.limit ? `[limit]="${args.limit}"` : '',
      args.overlap ? `[overlap]="${args.overlap}"` : '',
      args.size ? `[size]="'${args.size}'"` : ''
    ].join(' ');
    return {
      template: `
        <mbr-avatar-group ${inputs}>
          <mbr-avatar mbrRandomMilkyBackground name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" [bordered]="false" />
          <mbr-avatar mbrRandomMilkyBackground name="Joe Soap" [bordered]="false" />
          <mbr-avatar mbrRandomMilkyBackground name="Jane Doe" [bordered]="true" />
          <mbr-avatar mbrRandomMilkyBackground name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <mbr-avatar mbrRandomMilkyBackground name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </mbr-avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true
  }
};
