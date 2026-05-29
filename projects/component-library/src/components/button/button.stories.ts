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

export const PlayfulEarthyShowcase: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: "A playful, earthy-themed button with a subtle shadow effect and a muted color palette.<br/><a href='/docs/components-button-button-playful-earthy--docs'>See more here</a>"
      }
    }
  },
  render: (args) => ({
    props: args,
    styles: [
      `section {
        align-items: center;
        display: grid;
        column-gap: 8px;
        justify-items: flex-start;
      }`,
      `section#button-comparisons {
        grid-template-columns: 1fr auto auto auto auto;
      }`,
      `section#buttons-misc {
        display: flex;
      }`
    ],
    template: `
      <section id="button-comparisons">
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

        <p class="font-bold">Icon Only</p>
        <p class="font-bold"></p>
        <p class="font-bold"></p>
        <p class="font-bold"></p>
        <p class="font-bold"></p>

        <p>Projected Content using "button" tag</p>
        <button mbrButtonPlayfulEarthy size="large">
          <ng-container [ngTemplateOutlet]="plus_icon" />
        </button>
        <button mbrButtonPlayfulEarthy color="primary" size="large">
          <ng-container [ngTemplateOutlet]="plus_icon" />
        </button>
        <button mbrButtonPlayfulEarthy color="secondary" size="large">
          <ng-container [ngTemplateOutlet]="plus_icon" />
        </button>
        <button mbrButtonPlayfulEarthy disabled size="large">
          <ng-container [ngTemplateOutlet]="plus_icon" />
        </button>

        <p>Projected Content using "a" tag </p>
        <a mbrButtonPlayfulEarthy size="large">
          <ng-container [ngTemplateOutlet]="plus_icon" />
        </a>
        <a mbrButtonPlayfulEarthy color="primary" size="large">
          <ng-container [ngTemplateOutlet]="plus_icon" />
        </a>
        <a mbrButtonPlayfulEarthy color="secondary" size="large">
          <ng-container [ngTemplateOutlet]="plus_icon" />
        </a>
        <a mbrButtonPlayfulEarthy disabled size="large">
          <ng-container [ngTemplateOutlet]="plus_icon" />
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

      <h2>Miscellaneous Buttons</h2>
      <section id="buttons-misc">
       <button mbrButtonPlayfulEarthy>View</button>
       <button mbrButtonPlayfulEarthy>
          <ng-container [ngTemplateOutlet]="plus_icon" />
          Add
       </button>
       <button mbrButtonPlayfulEarthy color="primary">Go Shop</button>
       <button mbrButtonPlayfulEarthy size="extra-large" rounded>
          <ng-container [ngTemplateOutlet]="cart_icon" />
       </button>
       <button mbrButtonPlayfulEarthy color="primary">
          <ng-container [ngTemplateOutlet]="plus_icon" />
       </button>
       <button mbrButtonPlayfulEarthy>Food</button>
       <button mbrButtonPlayfulEarthy color="secondary" class="w-100">
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
          Invite Member
        </button>
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
      <ng-template #cart_icon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
          <path d="M9.33332 25.6667C9.97766 25.6667 10.5 25.1444 10.5 24.5C10.5 23.8557 9.97766 23.3334 9.33332 23.3334C8.68899 23.3334 8.16666 23.8557 8.16666 24.5C8.16666 25.1444 8.68899 25.6667 9.33332 25.6667Z" stroke="#4A2A0C" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.1667 25.6667C22.811 25.6667 23.3333 25.1444 23.3333 24.5C23.3333 23.8557 22.811 23.3334 22.1667 23.3334C21.5223 23.3334 21 23.8557 21 24.5C21 25.1444 21.5223 25.6667 22.1667 25.6667Z" stroke="#4A2A0C" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.39166 2.39172H4.725L7.82833 16.8817C7.94217 17.4124 8.23744 17.8868 8.66333 18.2232C9.08921 18.5597 9.61905 18.7371 10.1617 18.7251H21.5717C22.1027 18.7242 22.6176 18.5422 23.0312 18.2092C23.4448 17.8762 23.7325 17.412 23.8467 16.8934L25.7717 8.22506H5.97333" stroke="#4A2A0C" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </ng-template>
    `
  })
}
