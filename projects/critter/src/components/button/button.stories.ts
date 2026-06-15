import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {NgTemplateOutlet} from '@angular/common';
import {args_to_angular_inputs, IconGoogleSuperGComponent} from '@ember-foundry/component-library';
import {ButtonComponent, COLOR_VALUES} from 'critter';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NgTemplateOutlet
      ]
    })
  ],
  tags: ['autodocs', 'button'],
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

export const Standard: StoryObj<ButtonComponent> = {}

export const Success: StoryObj<ButtonComponent> = {
  args: {
    color: 'success'
  }
}

export const Warning: StoryObj<ButtonComponent> = {
  args: {
    color: 'warning'
  }
}

export const Danger: StoryObj<ButtonComponent> = {
  args: {
    color: 'danger'
  }
}

export const White: StoryObj<ButtonComponent> = {
  args: {
    color: 'white'
  }
}

export const Disabled: StoryObj<ButtonComponent> = {
  render: () => ({
    template: `<button mbrCritterButton disabled></button>`
  })
}

export const Small: StoryObj<ButtonComponent> = {
  args: {
    size: 'small'
  }
}

export const Medium: StoryObj<ButtonComponent> = {
  args: {
    size: 'medium'
  }
}

export const IconOnly: StoryObj<ButtonComponent> = {
  args: {
    color: 'success'
  },
  render: (args) => ({
    template: `
        <button mbrCritterButton ${args_to_angular_inputs(args)}>
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

export const GoogleSignIn: StoryObj<ButtonComponent> = {
  args: {
    color: 'white',
    size: 'medium'
  },
  decorators: [
    moduleMetadata({
      imports: [IconGoogleSuperGComponent]
    })
  ],
  render: (args) => ({
    template: `
        <button mbrCritterButton ${args_to_angular_inputs(args)}>
          <span mbrIcon="GoogleSuperG" class="me-1"></span>
          <span>Continue with Google</span>
        </button>
    `
  })
}

export const FullWidth: StoryObj<ButtonComponent> = {
  args: {
    color: 'warning',
    size: 'medium'
  },
  render: (args) => ({
    template: `
        <button mbrCritterButton class="w-full" ${args_to_angular_inputs(args)}>
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
        grid-template-columns: 1fr repeat(8, auto);
      }`,
      '[mbrCritterButton] {justify-self: flex-end}',
      'section { margin-bottom: 2rem;}'
    ],
    template: `
      <section class="comparison-grid">
        <span></span>
        @for (color of colors; track color) {
          <span class="mt-4 justify-self-end">{{color || 'Default'}}</span>
        }

        @for(size of sizes; track size){
          <span class="mt-4">Size: {{size || 'Default'}}</span>
          @for (color of colors; track color) {
            <button mbrCritterButton [color]="color" [size]="size"></button>
          }
        }
      </section>

      <section class="comparison-grid">
        @for(size of sizes; track size){
          <span class="mt-4 ">With Icon: {{size || 'Default'}}</span>
          @for (color of colors; track color) {
            <button mbrCritterButton [color]="color" [size]="size">
                <ng-container [ngTemplateOutlet]="plus_icon"></ng-container>
                <span>Add</span>
            </button>
          }
        }
      </section>

      <section class="comparison-grid">
        @for(size of sizes; track size){
          <span class="mt-4 ">Flat: {{size || 'Default'}}</span>
          @for (color of colors; track color) {
            <button mbrCritterButton flat [color]="color" [size]="size"></button>
          }
        }
      </section>

      <section class="comparison-grid">
        @for(size of sizes; track size){
          <span class="mt-4 ">Flat With Icon: {{size || 'Default'}}</span>
          @for (color of colors; track color) {
            <button mbrCritterButton flat [color]="color" [size]="size">
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
