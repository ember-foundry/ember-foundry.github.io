import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ButtonBasicComponent} from './button-basic/button-basic.component';
import {ButtonMonochromaticComponent} from './button-monochromatic/button-monochromatic.component';
import {LucideDownload} from '@lucide/angular';

const meta: Meta = {
  decorators: [
    moduleMetadata({
      imports: [
        ButtonBasicComponent,
        ButtonMonochromaticComponent,
        LucideDownload
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
        <svg lucideDownload [size]="14" />
        Download Resume
      </button>
      <button mbrButtonChromatic disabled>
        <svg lucideDownload [size]="14" />
        Download Resume
      </button>

      <p>Projected Content using "a" tag </p>
      <a mbrButtonChromatic>
        <svg lucideDownload [size]="14" />
        Download Resume
      </a>
      <a mbrButtonChromatic disabled>
        <svg lucideDownload [size]="14" />
        Download Resume
      </a>
    `
  })
}
