import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {AvatarBadgeComponent, AvatarComponent} from '@ember-foundry/component-library';
import {tailwind_sizes_values} from '../../constants/tailwind-sizes';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';

const meta: Meta<AvatarBadgeComponent> = {
  component: AvatarBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent
      ]
    })
  ],
  tags: ['autodocs', 'avatar', 'status', 'presence'],
  argTypes: {
    size: {
      options: tailwind_sizes_values,
      control: 'select'
    },
    status: {
      type: 'string',
      options: ['away', 'busy', 'focus', 'offline', 'online', 'reachable'],
      control: 'select'
    },
    mode: {
      control: 'select',
      options: ['overlay', 'notch']
    }
  },
  args: {
    mode: 'notch'
  }
}

export default meta;

type Story = StoryObj<AvatarBadgeComponent>;
export const Sample: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs}>
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
       </mbr-avatar-badge>
      `
    }
  }
};
export const AvatarWithNoImageAndWithBadge: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs}>
          <mbr-avatar name="Craig Wayne" />
       </mbr-avatar-badge>
      `
    }
  }
};

export const Away: Story = { ...Sample, ...{ args: {status: 'away'}}}

export const Busy: Story = { ...Sample, ...{ args: {status: 'busy'}}}

export const Focus: Story = { ...Sample, ...{ args: {status: 'focus'}}}

export const Offline: Story = { ...Sample, ...{ args: {status: 'offline'}}}

export const Online: Story = { ...Sample, ...{ args: {status: 'online'}}}

export const Reachable: Story = { ...Sample, ...{ args: {status: 'reachable'}}}

export const AllStatuses: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs}>
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
       </mbr-avatar-badge>
        <mbr-avatar-badge ${inputs} status="away">
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
       </mbr-avatar-badge>
        <mbr-avatar-badge ${inputs} status="busy">
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
       </mbr-avatar-badge>
        <mbr-avatar-badge ${inputs} status="focus">
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
       </mbr-avatar-badge>
        <mbr-avatar-badge ${inputs} status="online">
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
       </mbr-avatar-badge>
      `
    }
  }
};

export const WithTextOnly: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs}>
            <mbr-avatar name="Craig Wayne" />
        </mbr-avatar-badge>
      `
    }
  }
};


export const AllStatusesWithTextOnly: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs}>
          <mbr-avatar name="Craig Wayne" />
       </mbr-avatar-badge>
        <mbr-avatar-badge ${inputs} status="away">
          <mbr-avatar name="Craig Wayne" />
       </mbr-avatar-badge>
        <mbr-avatar-badge ${inputs} status="busy">
          <mbr-avatar name="Craig Wayne" />
       </mbr-avatar-badge>
        <mbr-avatar-badge ${inputs} status="online">
          <mbr-avatar name="Craig Wayne" />
       </mbr-avatar-badge>
      `
    }
  }
};

export const DoNotDisturb: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs}>
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 -960 960 960" fill="white">
            <path d="M200-440v-80h560v80H200Z"/>
          </svg>
       </mbr-avatar-badge>
      `
    }
  },
  args: {
    status: 'busy',
    size: tailwind_sizes['4xl']
  }
};

export const Birthday: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Based off google contacts birthday avatar. See: https://contacts.google.com'
      }
    }
  },
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs} style="--avatar-badge-color: white">
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <img alt="birthday icon" ngProjectAs="badge" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/emoji.svg" style="border:max(1px, calc(var(--size, var(--size-md)) * 0.04)) solid var(--avatar-badge-color);box-shadow: 0 1px 2px rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);"/>
        </mbr-avatar-badge>
      `
    }
  },
  args: {
    size: tailwind_sizes['4xl'],
    mode: 'overlay'
  }
};

export const AddAction: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Based off a google contact, when contact card does not have a profile picture. See: https://contacts.google.com'
      }
    }
  },
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs}>
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 -960 960 960" fill="white">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
          </svg>
        </mbr-avatar-badge>
      `
    }
  },
  args: {
    status: 'online',
    size: tailwind_sizes['4xl']
  }
};

export const SonyPSNAppearOffline: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Based on Sony PSN appear offline status'
      }
    }
  },
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs} style="--avatar-badge-color: none">
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
              class="inverted_dashed_circle"
              style="--dash_length: 10px; --gap_length: 25px;"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="gray"
              stroke-width="10"
              stroke-dasharray="var(--dash_length) var(--gap_length)"
              stroke-linecap="round"
            />
          </svg>
       </mbr-avatar-badge>
      `
    }
  },
  args: {
    size: tailwind_sizes['4xl']
  }
};

export const LinkedInReachableStatus: Story = {
  name: 'LinkedIn Reachable Status',
  parameters: {
    docs: {
      description: {
        story: 'Based on LinkedIn\'s reachable status'
      }
    }
  },
  render: (args) => {
    const inputs = [
      args.size ? `[size]="'${args.size}'"` : '',
      args.status ? `[status]="'${args.status}'"` : '',
      args.mode ? `[mode]="'${args.mode}'"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-avatar-badge ${inputs}>
          <mbr-avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <svg ngProjectAs="badge" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" fill="none" stroke="#38A06C" stroke-width="4"/>
          </svg>
       </mbr-avatar-badge>
      `
    }
  },
  args: {
    status: 'reachable',
    size: tailwind_sizes['4xl']
  }
};
