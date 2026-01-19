import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {
  AvatarComponent,
  AvatarGroupComponent, AvatarWithinGroupDirective, RandomMilkyBackgroundDirective
} from 'component-library';
import {tailwind_sizes_values} from 'component-library/constants/tailwind-sizes';

const meta: Meta<AvatarGroupComponent> = {
  component: AvatarGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent,
        AvatarWithinGroupDirective,
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
        <lib-avatar-group ${inputs}>
          <lib-avatar libRandomMilkyBackground name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <lib-avatar libRandomMilkyBackground name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <lib-avatar libRandomMilkyBackground name="Joe Soap" />
          <lib-avatar libRandomMilkyBackground name="Jane Doe" />
          <lib-avatar libRandomMilkyBackground name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <lib-avatar libRandomMilkyBackground name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <lib-avatar libRandomMilkyBackground name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <lib-avatar libRandomMilkyBackground name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <lib-avatar libRandomMilkyBackground name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <lib-avatar libRandomMilkyBackground name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </lib-avatar-group>
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
        <lib-avatar-group ${inputs}>
          <lib-avatar libRandomMilkyBackground name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <lib-avatar libRandomMilkyBackground name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" [bordered]="false" />
          <lib-avatar libRandomMilkyBackground name="Joe Soap" [bordered]="false" />
          <lib-avatar libRandomMilkyBackground name="Jane Doe" [bordered]="true" />
          <lib-avatar libRandomMilkyBackground name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <lib-avatar libRandomMilkyBackground name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <lib-avatar libRandomMilkyBackground name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <lib-avatar libRandomMilkyBackground name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <lib-avatar libRandomMilkyBackground name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <lib-avatar libRandomMilkyBackground name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </lib-avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true
  }
};
