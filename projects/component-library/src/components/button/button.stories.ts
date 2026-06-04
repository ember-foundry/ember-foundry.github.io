import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ButtonBasicComponent, ButtonMonochromaticComponent, ButtonCritterComponent} from 'component-library';
import {NgTemplateOutlet} from '@angular/common';
import {Showcase as CritterShowcase} from 'component-library/components/button/button-critter/button-critter.stories';

const meta: Meta = {
  decorators: [
    moduleMetadata({
      imports: [
        ButtonBasicComponent,
        ButtonMonochromaticComponent,
        ButtonCritterComponent,
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

export const Critter: StoryObj = {
  ...CritterShowcase
}
