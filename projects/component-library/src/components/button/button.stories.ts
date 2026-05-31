import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ButtonBasicComponent, ButtonMonochromaticComponent, ButtonPlayfulEarthyComponent} from 'component-library';
import {NgTemplateOutlet} from '@angular/common';

const meta: Meta = {
  decorators: [
    moduleMetadata({
      imports: [
        ButtonBasicComponent,
        ButtonMonochromaticComponent,
        ButtonPlayfulEarthyComponent,
        NgTemplateOutlet
      ]
    })
  ],
  tags: ['autodocs', 'button', 'variants']
}

export default meta;

export const Basic: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
      <div class="flex gap-3 mb-3">
        <button mbrButtonBasic></button>
        <button mbrButtonBasic disabled></button>
      </div>
    `
  })
}

export const Monochromatic: StoryObj = {
  render: (args) => ({
    props: args,
    styles: [
      `:host {
        align-items: center;
        display: grid;
        grid-template-columns: 1fr auto auto;
        column-gap: 8px;
        justify-items: flex-start;
      }`
    ],
    template: `
      <p>Description</p>
      <p>Standard</p>
      <p>Disabled</p>

      <p>No content using "button" tag</p>
      <button mbrButtonChromatic></button>
      <button mbrButtonChromatic disabled></button>

      <p>No content using  "a" tag</p>
      <a mbrButtonChromatic></a>
      <a mbrButtonChromatic disabled></a>

      <p>Projected Content using "button" tag</p>
      <button mbrButtonChromatic>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" x2="12" y1="15" y2="3"/>
          </svg>
          Download Resume
        </button>
      <button mbrButtonChromatic disabled>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" x2="12" y1="15" y2="3"/>
        </svg>
        Download Resume
      </button>

      <p>Projected Content using "a" tag </p>
      <a mbrButtonChromatic>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" x2="12" y1="15" y2="3"/>
        </svg>
        Download Resume
      </a>
      <a mbrButtonChromatic disabled>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" x2="12" y1="15" y2="3"/>
        </svg>
        Download Resume
      </a>
    `
  })
}

// 1. Centralized matrix configurations to avoid repetition
const PLACEMENTS = ['button', 'a'];
const COLORS = [undefined, 'success', 'warning', 'danger'];
const SIZES = ['small', undefined, 'medium', 'large', 'extra-large'];

export const PlayfulEarthyShowcase: StoryObj = {
  render: (args) => ({
    props: {
      ...args,
      placements: PLACEMENTS,
      colors: COLORS,
      sizes: SIZES
    },
    styles: [
      `section.comparison-grid {
        align-items: center;
        display: grid;
        gap: 8px;
        justify-items: flex-start;
        grid-template-columns: 1fr auto auto auto auto auto;
      }`,
      `section#buttons-misc { display: flex; gap: 8px; }`
    ],
    template: `
      <section class="comparison-grid">
        <p class="font-bold">Matrix Grid</p>
        <p class="font-bold">Standard</p>
        <p class="font-bold">Success</p>
        <p class="font-bold">Warning</p>
        <p class="font-bold">Danger</p>
        <p class="font-bold">Disabled</p>

        @for (size of sizes; track size) {
          <div class="col-span-6 font-bold mt-4">Size: {{ size || 'Standard' }}</div>

          @for (tag of placements; track tag) {
            <p>Content-less [{{ tag }}]</p>

            @for (color of colors; track color) {
              @if (tag === 'button') {
                <button mbrButtonPlayfulEarthy [color]="color" [size]="size"></button>
              } @else {
                <a mbrButtonPlayfulEarthy [color]="color" [size]="size"></a>
              }
            }
            @if (tag === 'button') {
              <button mbrButtonPlayfulEarthy disabled [size]="size"></button>
            } @else {
              <a mbrButtonPlayfulEarthy disabled [size]="size"></a>
            }

            <p>Projected Content [{{ tag }}]</p>

            @for (color of colors; track color) {
              @if (tag === 'button') {
                <button mbrButtonPlayfulEarthy [color]="color" [size]="size">
                  <ng-container [ngTemplateOutlet]="plus_icon" /> Add
                </button>
              } @else {
                <a mbrButtonPlayfulEarthy [color]="color" [size]="size">
                  <ng-container [ngTemplateOutlet]="plus_icon" /> Add
                </a>
              }
            }
            @if (tag === 'button') {
              <button mbrButtonPlayfulEarthy disabled [size]="size">
                <ng-container [ngTemplateOutlet]="plus_icon" /> Add
              </button>
            } @else {
              <a mbrButtonPlayfulEarthy disabled [size]="size">
                <ng-container [ngTemplateOutlet]="plus_icon" /> Add
              </a>
            }
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
