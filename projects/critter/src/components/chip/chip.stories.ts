import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ChipComponent} from 'critter';
import {LucideCheck, LucideChevronsDown, LucideX} from '@lucide/angular';

const meta: Meta<ChipComponent> = {
  component: ChipComponent,
  tags: ['autodocs', 'chip'],
  argTypes: {
    color: {
      options: ['danger-tonal','success-tonal', 'warning-tonal'],
      control: { type: 'select' }
    }
  },
  args: {
    color: 'success-tonal'
  }
}

export default meta;

export const Sample: StoryObj<ChipComponent> = {}

export const Showcase: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        LucideCheck,
        LucideChevronsDown,
        LucideX
      ]
    })
  ],
  render: () => ({
    props: {
      colors: [
        'danger-tonal',
        'success-tonal',
        'warning-tonal'
      ]
    },
    styles: [
      `:host {
        display: inline-grid;
        gap: 1rem;
        grid-template-columns: repeat(3, auto);
      }`
    ],
    template: `
      @for(color of colors; track color) {
          <mbr-critter-chip [color]="color">{{color}}</mbr-critter-chip>
      }
      <mbr-critter-chip color="danger-tonal">
        <svg lucideX [size]="12" [strokeWidth]="4" />
        OUT
      </mbr-critter-chip>

      <mbr-critter-chip color="success-tonal">
        <svg lucideCheck [size]="12" [strokeWidth]="4" />
        STOCKED
      </mbr-critter-chip>

      <mbr-critter-chip color="warning-tonal">
        <svg lucideChevronsDown [size]="12" [strokeWidth]="4" />
        LOW
      </mbr-critter-chip>
    `
  })
}
