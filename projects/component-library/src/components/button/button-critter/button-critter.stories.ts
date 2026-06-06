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

export const Large: StoryObj<ButtonCritterComponent> = {
  args: {
    size: 'large'
  }
}

export const ExtraLarge: StoryObj<ButtonCritterComponent> = {
  args: {
    size: 'extra-large'
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

export const ExtraLargeRoundedIconOnly: StoryObj<ButtonCritterComponent> = {
  args: {
    rounded: true,
    size: 'extra-large'
  },
  render: (args) => ({
    template: `
      <button mbrCritter ${args_to_angular_inputs(args)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
          <path d="M9.33332 25.6667C9.97766 25.6667 10.5 25.1444 10.5 24.5C10.5 23.8557 9.97766 23.3334 9.33332 23.3334C8.68899 23.3334 8.16666 23.8557 8.16666 24.5C8.16666 25.1444 8.68899 25.6667 9.33332 25.6667Z" stroke="#4A2A0C" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.1667 25.6667C22.811 25.6667 23.3333 25.1444 23.3333 24.5C23.3333 23.8557 22.811 23.3334 22.1667 23.3334C21.5223 23.3334 21 23.8557 21 24.5C21 25.1444 21.5223 25.6667 22.1667 25.6667Z" stroke="#4A2A0C" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.39166 2.39172H4.725L7.82833 16.8817C7.94217 17.4124 8.23744 17.8868 8.66333 18.2232C9.08921 18.5597 9.61905 18.7371 10.1617 18.7251H21.5717C22.1027 18.7242 22.6176 18.5422 23.0312 18.2092C23.4448 17.8762 23.7325 17.412 23.8467 16.8934L25.7717 8.22506H5.97333" stroke="#4A2A0C" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
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
        <button mbrCritter class="w-100" ${args_to_angular_inputs(args)}>
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
        grid-template-columns: 1fr repeat(6, auto);
      }`,
      '.title-row { grid-column-start: 1; grid-column-end: 8;}',
      '[mbrCritter] {justify-self: flex-end}',
      'section { margin-bottom: 2rem;}'
    ],
    template: `
      <section class="comparison-grid">
        @for(size of sizes; track size){
          <div class="font-bold mt-4 ">Size: {{size || 'Default'}}</div>
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
