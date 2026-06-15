import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {BadgeDirective, ButtonComponent, COLOR_VALUES} from 'critter';
import {LucideDynamicIcon, LucideShoppingCart} from '@lucide/angular';

const meta: Meta = {
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        BadgeDirective
      ]
    })
  ],
  tags: ['autodocs', 'badge'],
  argTypes: {
    button_size: {
      options: ['small', 'medium'],
      control: { type: 'select' }
    },
    button_color: {
      options: COLOR_VALUES,
      control: { type: 'select' }
    }
  },
  args: {
    badge_text: '4',
    button_color: 'success'
  }
}

export default meta;

export const OnButton: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        LucideShoppingCart,
        LucideDynamicIcon
      ]
    })
  ],
  render: (args) => ({
    styles: ['button { font-size: 2em; }'],
    template: `
      <button
       mbrCritterButton
       rounded="true"
       [mbrCritterBadge]="${args['badge_text']}"
       [mbrCritterBadgeOffset]="'-7px'"
       [mbrCritterBadgeSize]="'16px'"
       [color]="'${args['button_color']}'"
      >
        <svg lucideShoppingCart [strokeWidth]="2.91667" [size]="32"></svg>
      </button>
    `
  })
}

export const OnInnerIcon: StoryObj = {
  args: {
    button_color: 'warning',
    badge_text: '1'
  },
  render: (args) => ({
    styles: ['button { font-size: 1.5em; }'],
    template: `
      <button
       mbrCritterButton
       [color]="'${args['button_color']}'"
      >
        <span
            [mbrCritterBadge]="${args['badge_text']}"
            [mbrCritterBadgeOffset]="'-4px'"
            [mbrCritterBadgeSize]="'9px'"
            class="inline-flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M8.55667 17.5C8.70296 17.7533 8.91335 17.9637 9.16671 18.11C9.42006 18.2563 9.70746 18.3333 10 18.3333C10.2926 18.3333 10.5799 18.2563 10.8333 18.11C11.0867 17.9637 11.2971 17.7533 11.4433 17.5" />
            <path d="M2.71833 12.7716C2.60947 12.8909 2.53763 13.0393 2.51155 13.1987C2.48547 13.3581 2.50627 13.5217 2.57142 13.6695C2.63658 13.8173 2.74328 13.9429 2.87855 14.0312C3.01381 14.1195 3.17182 14.1665 3.33333 14.1666H16.6667C16.8282 14.1667 16.9862 14.1198 17.1216 14.0317C17.2569 13.9436 17.3637 13.8181 17.4291 13.6704C17.4944 13.5227 17.5154 13.3592 17.4895 13.1998C17.4637 13.0404 17.392 12.8919 17.2833 12.7725C16.175 11.63 15 10.4158 15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5979 2.19341 11.3261 1.66663 10 1.66663C8.67392 1.66663 7.40215 2.19341 6.46447 3.13109C5.52679 4.06877 5 5.34054 5 6.66663C5 10.4158 3.82417 11.63 2.71833 12.7716Z"/>
          </svg>
        </span>
      </button>
    `
  })
}

export const Showcase: StoryObj = {
  render: (args, context) => ({
    ...context,
    styles: [
      ':host { align-items: flex-end; display: flex; gap: 1rem;',
      'button:first-child { font-size: 2em; } button:last-child { font-size: 1.5em; }'
    ],
    template: `
      <button
         mbrCritterButton
         rounded="true"
         mbrCritterBadge="1"
         mbrCritterBadgeOffset='-7px'
         mbrCritterBadgeSize='16px'
         color='success'
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          stroke-width="2.91667"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9.33332 25.6667C9.97766 25.6667 10.5 25.1444 10.5 24.5C10.5 23.8557 9.97766 23.3334 9.33332 23.3334C8.68899 23.3334 8.16666 23.8557 8.16666 24.5C8.16666 25.1444 8.68899 25.6667 9.33332 25.6667Z" />
          <path d="M22.1667 25.6667C22.811 25.6667 23.3333 25.1444 23.3333 24.5C23.3333 23.8557 22.811 23.3334 22.1667 23.3334C21.5223 23.3334 21 23.8557 21 24.5C21 25.1444 21.5223 25.6667 22.1667 25.6667Z" />
          <path d="M2.39166 2.39172H4.725L7.82833 16.8817C7.94217 17.4124 8.23744 17.8868 8.66333 18.2232C9.08921 18.5597 9.61905 18.7371 10.1617 18.7251H21.5717C22.1027 18.7242 22.6176 18.5422 23.0312 18.2092C23.4448 17.8762 23.7325 17.412 23.8467 16.8934L25.7717 8.22506H5.97333" />
        </svg>
      </button>

      <button
       mbrCritterButton
       color='warning'
      >
        <span
          mbrCritterBadge="1"
          mbrCritterBadgeOffset='-4px'
          mbrCritterBadgeSize='9px'
          class="inline-flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M8.55667 17.5C8.70296 17.7533 8.91335 17.9637 9.16671 18.11C9.42006 18.2563 9.70746 18.3333 10 18.3333C10.2926 18.3333 10.5799 18.2563 10.8333 18.11C11.0867 17.9637 11.2971 17.7533 11.4433 17.5" />
            <path d="M2.71833 12.7716C2.60947 12.8909 2.53763 13.0393 2.51155 13.1987C2.48547 13.3581 2.50627 13.5217 2.57142 13.6695C2.63658 13.8173 2.74328 13.9429 2.87855 14.0312C3.01381 14.1195 3.17182 14.1665 3.33333 14.1666H16.6667C16.8282 14.1667 16.9862 14.1198 17.1216 14.0317C17.2569 13.9436 17.3637 13.8181 17.4291 13.6704C17.4944 13.5227 17.5154 13.3592 17.4895 13.1998C17.4637 13.0404 17.392 12.8919 17.2833 12.7725C16.175 11.63 15 10.4158 15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5979 2.19341 11.3261 1.66663 10 1.66663C8.67392 1.66663 7.40215 2.19341 6.46447 3.13109C5.52679 4.06877 5 5.34054 5 6.66663C5 10.4158 3.82417 11.63 2.71833 12.7716Z"/>
          </svg>
        </span>
      </button>
    `
  })
}
