import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {NgTemplateOutlet} from '@angular/common';
import {args_to_angular_inputs, IconGoogleSuperGComponent} from '@ember-foundry/component-library';
import {ButtonComponent, COLOR_VALUES} from 'critter';
import {LucidePlus} from '@lucide/angular';

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
  decorators: [
    moduleMetadata({
      imports: [
        LucidePlus
      ]
    })
  ],
  render: (args) => ({
    template: `
        <button mbrCritterButton ${args_to_angular_inputs(args)}>
          <svg lucidePlus [size]="14"/>
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
  decorators: [
    moduleMetadata({
      imports: [
        LucidePlus
      ]
    })
  ],
  render: (args) => ({
    template: `
        <button mbrCritterButton class="w-full" ${args_to_angular_inputs(args)}>
          <svg lucidePlus [size]="14" />
          <span>Invite Member</span>
        </button>
    `
  })
}

export const Showcase: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        LucidePlus
      ]
    })
  ],
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
              <svg lucidePlus [size]="14" />
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
              <svg lucidePlus [size]="14" />
              <span>Add</span>
            </button>
          }
        }
      </section>
    `
  })
};
