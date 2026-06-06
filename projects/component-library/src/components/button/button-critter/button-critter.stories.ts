import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ButtonCritterComponent} from 'component-library';
import {NgTemplateOutlet} from '@angular/common';
import {args_to_angular_inputs} from 'component-library/helpers/storybook/args_to_angular_inputs';
import {COLOR_VALUES} from 'component-library/themes/critter/colors.type';

const meta: Meta<ButtonCritterComponent> = {
  component: ButtonCritterComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NgTemplateOutlet
      ]
    })
  ],
  tags: ['autodocs', 'critter', 'button'],
  argTypes: {
    color: {
      control: 'select',
      options: COLOR_VALUES,
      description: 'Set the color of the button'

    },
    rounded: {
      control: 'boolean',
      description: 'Renders button with rounded corners'
    },
    size: {
      control: 'select',
      options: [undefined, 'small', 'medium'],
      description: 'Set the size of the button'
    }
  }
}

export default meta;

export const Standard: StoryObj<ButtonCritterComponent> = {}

export const Success: StoryObj<ButtonCritterComponent> = {
  args: {
    color: 'success'
  }
}

export const Warning: StoryObj<ButtonCritterComponent> = {
  args: {
    color: 'warning'
  }
}

export const Danger: StoryObj<ButtonCritterComponent> = {
  args: {
    color: 'danger'
  }
}

export const Disabled: StoryObj<ButtonCritterComponent> = {
  render: () => ({
    template: `<button mbrCritter disabled></button>`
  })
}

export const Small: StoryObj<ButtonCritterComponent> = {
  args: {
    size: 'small'
  }
}

export const Medium: StoryObj<ButtonCritterComponent> = {
  args: {
    size: 'medium'
  }
}

export const IconOnly: StoryObj<ButtonCritterComponent> = {
  args: {
    color: 'success'
  },
  render: (args) => ({
    template: `
        <button mbrCritter ${args_to_angular_inputs(args)}>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M2.91666 7H11.0833" />
            <path d="M7 2.91663V11.0833" />
          </svg>
        </button>
    `
  })
}

export const FullWidth: StoryObj<ButtonCritterComponent> = {
  args: {
    color: 'warning',
    size: 'medium'
  },
  render: (args) => ({
    template: `
        <button mbrCritter class="w-full" ${args_to_angular_inputs(args)}>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M2.91666 7H11.0833" />
            <path d="M7 2.91663V11.0833" />
          </svg>
          <span>Invite Member</span>
        </button>
    `
  })
}

export const Showcase: StoryObj = {
  render: (args, context) => ({
    ...context,
    props: {
      ...args,
      placements: ['button', 'a'],
      colors: COLOR_VALUES,
      sizes: ['small', undefined, 'medium']
    },
    styles: [
      `section.comparison-grid {
        align-items: center;
        display: grid;
        gap: 8px;
        justify-items: flex-start;
        grid-template-columns: 1fr repeat(7, auto);
      }`,
      '.title-row { grid-column-start: 1; grid-column-end: 9;}',
      '[mbrCritter] {justify-self: flex-end}',
      'section { margin-bottom: 2rem;}'
    ],
    template: `
      <section class="comparison-grid">
          <span></span>
          @for (color of colors; track color) {
            <div class="font-bold mt-4 justify-self-end">{{color || 'Default'}}</div>
          }
        @for(size of sizes; track size){
          <div class="font-bold mt-4">Size: {{size || 'Default'}}</div>
          @for (color of colors; track color) {
            <button mbrCritter [color]="color" [size]="size"></button>
          }
        }
      </section>

      <section class="comparison-grid">
        @for(size of sizes; track size){
          <div class="font-bold mt-4 ">With Icon: {{size || 'Default'}}</div>
          @for (color of colors; track color) {
            <button mbrCritter [color]="color" [size]="size">
                <ng-container [ngTemplateOutlet]="plus_icon"></ng-container>
                <span>Add</span>
            </button>
          }
        }
      </section>

      <section class="comparison-grid">
        @for(size of sizes; track size){
          <div class="font-bold mt-4 ">Flat: {{size || 'Default'}}</div>
          @for (color of colors; track color) {
            <button mbrCritter flat [color]="color" [size]="size"></button>
          }
        }
      </section>



      <section class="comparison-grid">
        @for(size of sizes; track size){
          <div class="font-bold mt-4 ">Flat With Icon: {{size || 'Default'}}</div>
          @for (color of colors; track color) {
            <button mbrCritter flat [color]="color" [size]="size">
                <ng-container [ngTemplateOutlet]="plus_icon"></ng-container>
                <span>Add</span>
            </button>
          }
        }
      </section>

      <ng-template #plus_icon>
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2.91666 7H11.0833" /><path d="M7 2.91663V11.0833" />
        </svg>
      </ng-template>
    `
  })
};
