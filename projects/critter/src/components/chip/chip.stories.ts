import {Meta, StoryObj} from '@storybook/angular';
import {ChipComponent} from 'critter';

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
            <mbr-chip [color]="color">{{color}}</mbr-chip>
        }
        <mbr-chip color="danger-tonal">
          <ng-container [ngTemplateOutlet]="icon_cross" />
          OUT
        </mbr-chip>

        <mbr-chip color="success-tonal">
          <ng-container [ngTemplateOutlet]="icon_check" />
          STOCKED
        </mbr-chip>

        <mbr-chip color="warning-tonal">
          <ng-container [ngTemplateOutlet]="icon_warning" />
          LOW
        </mbr-chip>

        <ng-template #icon_warning>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            fill="none"
            style="height: 1em"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g clip-path="url(#clip0_1_984)">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"/>
              <path d="M6 8V6" />
              <path d="M6 4H6.005"/>
            </g>
            <defs>
              <clipPath id="clip0_1_984">
                <rect width="12" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </ng-template>
        <ng-template #icon_check>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="height: 1em"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </ng-template>
        <ng-template #icon_cross>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            fill="none"
            style="height: 1em"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 3L3 9" />
            <path d="M3 3L9 9" />
          </svg>
        </ng-template>
    `
  })
}
