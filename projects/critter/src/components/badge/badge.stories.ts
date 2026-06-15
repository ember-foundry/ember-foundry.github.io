import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {BadgeDirective, ButtonComponent, COLOR_VALUES} from 'critter';
import {LucideBell, LucideShoppingCart} from '@lucide/angular';

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
        LucideShoppingCart
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
  decorators: [
    moduleMetadata({
      imports: [
        LucideBell
      ]
    })
  ],
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
          <svg lucideBell [size]="24" [strokeWidth]="2.5"></svg>
        </span>
      </button>
    `
  })
}

export const Showcase: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        LucideBell,
        LucideShoppingCart
      ]
    })
  ],
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
        <svg lucideShoppingCart [strokeWidth]="2.91667" [size]="32"></svg>
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
          <svg lucideBell [size]="24" [strokeWidth]="2.5"></svg>
        </span>
      </button>
    `
  })
}
