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

export const PlayfulEarthy: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: 'A playful, earthy-themed button with a subtle shadow effect and a muted color palette.'
      }
    }
  },
  render: (args) => ({
    props: args,
    styles: [
      `section {
        align-items: center;
        display: grid;
        grid-template-columns: 1fr auto auto auto auto;
        column-gap: 8px;
        justify-items: flex-start;
      }`
    ],
    template: `
      <section>
        <p class="font-bold">Size: Standard</p>
        <p class="font-bold">Standard</p>
        <p class="font-bold">Primary</p>
        <p class="font-bold">Secondary</p>
        <p class="font-bold">Disabled</p>

        <p>No content using "button" tag</p>
        <button mbrButtonPlayfulEarthy></button>
        <button mbrButtonPlayfulEarthy color="primary"></button>
        <button mbrButtonPlayfulEarthy color="secondary"></button>
        <button mbrButtonPlayfulEarthy disabled></button>

        <p>No content using  "a" tag</p>
        <a mbrButtonPlayfulEarthy></a>
        <a mbrButtonPlayfulEarthy color="primary"></a>
        <a mbrButtonPlayfulEarthy color="secondary"></a>
        <a mbrButtonPlayfulEarthy disabled></a>

        <p>Projected Content using "button" tag</p>
        <button mbrButtonPlayfulEarthy>
          <ng-container [ngTemplateOutlet]="plus_icon" />

          Add
        </button>
        <button mbrButtonPlayfulEarthy color="primary">
          <ng-container [ngTemplateOutlet]="plus_icon" />

            Add
          </button>
        <button mbrButtonPlayfulEarthy color="secondary">
          <ng-container [ngTemplateOutlet]="plus_icon" />

            Add
          </button>
        <button mbrButtonPlayfulEarthy disabled>
          <ng-container [ngTemplateOutlet]="plus_icon" />

            Add
          </button>

        <p>Projected Content using "a" tag </p>
        <a mbrButtonPlayfulEarthy>
          <ng-container [ngTemplateOutlet]="plus_icon" />

          Add
        </a>
        <a mbrButtonPlayfulEarthy color="primary">
          <ng-container [ngTemplateOutlet]="plus_icon" />

          Add
        </a>
        <a mbrButtonPlayfulEarthy color="secondary">
            <ng-container [ngTemplateOutlet]="plus_icon" />

            Add
        </a>
        <a mbrButtonPlayfulEarthy disabled>
          <ng-container [ngTemplateOutlet]="plus_icon" />

          Add
        </a>

        <p class="font-bold">Size: Small</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <p>No content using "button" tag</p>
        <button mbrButtonPlayfulEarthy size="small"></button>
        <button mbrButtonPlayfulEarthy size="small" color="primary"></button>
        <button mbrButtonPlayfulEarthy size="small" color="secondary"></button>
        <button mbrButtonPlayfulEarthy size="small" disabled ></button>

        <p>No content using  "a" tag</p>
        <a mbrButtonPlayfulEarthy size="small"></a>
        <a mbrButtonPlayfulEarthy size="small" color="primary"></a>
        <a mbrButtonPlayfulEarthy size="small" color="secondary"></a>
        <a mbrButtonPlayfulEarthy size="small" disabled></a>

        <p>Projected Content using "button" tag</p>
        <button mbrButtonPlayfulEarthy size="small">
          <ng-container [ngTemplateOutlet]="plus_icon" />
          Add
        </button>
        <button mbrButtonPlayfulEarthy size="small" color="primary">
          <ng-container [ngTemplateOutlet]="plus_icon" />
          Add
        </button>
        <button mbrButtonPlayfulEarthy size="small" color="secondary">
          <ng-container [ngTemplateOutlet]="plus_icon" />
          Add
        </button>
        <button mbrButtonPlayfulEarthy size="small" disabled>
          <ng-container [ngTemplateOutlet]="plus_icon" />
          Add
        </button>

        <p>Projected Content using "a" tag </p>
        <a mbrButtonPlayfulEarthy size="small">
          <ng-container [ngTemplateOutlet]="plus_icon" />
          Add
        </a>
        <a mbrButtonPlayfulEarthy size="small" color="primary">
          <ng-container [ngTemplateOutlet]="plus_icon" />
          Add
        </a>
        <a mbrButtonPlayfulEarthy size="small" color="secondary">
          <ng-container [ngTemplateOutlet]="plus_icon" />
          Add
        </a>
        <a mbrButtonPlayfulEarthy size="small" disabled>
          <ng-container [ngTemplateOutlet]="plus_icon" />
          Add
        </a>
      </section>
      <ng-template #plus_icon>
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
      </ng-template>
    `
  })
}
