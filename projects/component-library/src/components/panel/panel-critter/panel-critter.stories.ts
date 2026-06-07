import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {
  ButtonCritterComponent,
  ChipCritterComponent,
  InputCheckboxCritterComponent, InputQuantityCritterComponent,
  PanelCritterComponent
} from 'component-library';
import {args_to_angular_inputs} from 'component-library/helpers/storybook/args_to_angular_inputs';
import {CardCritterComponent} from 'component-library/components/card/card-critter/card-critter.component';

const meta: Meta<PanelCritterComponent> = {
  component: PanelCritterComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonCritterComponent
      ]
    })
  ],
  tags: ['autodocs', 'critter', 'panel'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the panel',
      defaultValue: '',
      required: true
    }
  },
  args: {
    title: 'PANTRY STATUS'
  }
};

export default meta;

export const PantryStatus: StoryObj<PanelCritterComponent> = {
  args: {
    title: 'PANTRY STATUS'
  },
  render:(args) => ({
    template: `
      <mbr-panel-critter ${args_to_angular_inputs(args)}>
        <button
          mbrCritter
          flat
          color="warning"
          size="small"
          class="me-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.516 3.00947 16.931 3.99122 18.74 5.74L21 8" />
            <path d="M21 3V8H16" />
            <path d="M21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.48395 20.9905 7.06897 20.0088 5.26 18.26L3 16" />
            <path d="M8 16H3V21" />
          </svg>
        </button>
        <div class="flex-grow-1">
          <h3 class="m-0 font-semibold">5 items</h3>
          <small>needs restocking</small>
        </div>
        <button mbrCritter>View</button>
      </mbr-panel-critter>
    `
  })
}

export const ActiveShopping: StoryObj<PanelCritterComponent> = {
  args: {
    title: 'ACTIVE SHOPPING'
  },
  render:(args) => ({
    template: `
      <mbr-panel-critter ${args_to_angular_inputs(args)}>
      <button
        mbrCritter
        flat
        color="success"
        size="small"
        class="me-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28" fill="none"
          stroke="currentColor"
          stroke-width="2.91667"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="24"
        >
          <path d="M9.33332 25.6667C9.97766 25.6667 10.5 25.1444 10.5 24.5C10.5 23.8557 9.97766 23.3334 9.33332 23.3334C8.68899 23.3334 8.16666 23.8557 8.16666 24.5C8.16666 25.1444 8.68899 25.6667 9.33332 25.6667Z" />
          <path d="M22.1667 25.6667C22.811 25.6667 23.3333 25.1444 23.3333 24.5C23.3333 23.8557 22.811 23.3334 22.1667 23.3334C21.5223 23.3334 21 23.8557 21 24.5C21 25.1444 21.5223 25.6667 22.1667 25.6667Z" />
          <path d="M2.39166 2.39172H4.725L7.82833 16.8817C7.94217 17.4124 8.23744 17.8868 8.66333 18.2232C9.08921 18.5597 9.61905 18.7371 10.1617 18.7251H21.5717C22.1027 18.7242 22.6176 18.5422 23.0312 18.2092C23.4448 17.8762 23.7325 17.412 23.8467 16.8934L25.7717 8.22506H5.97333" />
        </svg>
      </button>
      <div class="flex-grow-1">
        <h3 class="m-0 font-semibold">4 items</h3>
        <small>to buy right now</small>
      </div>
      <button mbrCritter color="success">Go Shop</button>
    </mbr-panel-critter>
    `
  })
}

export const EmptyPanel: StoryObj<PanelCritterComponent> = {
  args: {
    title: 'NO CONTENT'
  }
}

export const HouseholdItems: StoryObj<PanelCritterComponent> = {
  args: {
    title: 'HOUSEHOLD ITEMS'
  },
  decorators: [
    moduleMetadata({
      imports: [
        CardCritterComponent,
        ChipCritterComponent
      ]
    })
  ],
  render:(args) => ({
    template: `
      <mbr-panel-critter ${args_to_angular_inputs(args)}>
        <div class="flex flex-col flex-grow-1 space-y-2">

          <mbr-card-critter class="flex justify-content-between justify-between">
              <div class="flex flex-col">
                  <h4 class="m-0">Milk</h4>
                  <small>Food</small>
              </div>
              <div class="flex flex-col">
                  <mbr-chip-critter color="success-tonal">In List</mbr-chip-critter>
              </div>
          </mbr-card-critter>

          <mbr-card-critter class="flex justify-content-between justify-between">
              <div class="flex flex-col">
                 <h4 class="m-0">Milk</h4>
                  <small>Food</small>
              </div>
              <div class="flex flex-col">
                  <button mbrCritter>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2.91669 7H11.0834" />
                      <path d="M7 2.91666V11.0833" />
                    </svg>
                    <span>Add</span>
                  </button>
              </div>
          </mbr-card-critter>

        </div>
      </mbr-panel-critter>
    `
  })
}

export const CartPanel: StoryObj<PanelCritterComponent> = {
  args: {
    title: 'TO BUY'
  },
  decorators: [
    moduleMetadata({
      imports: [
        CardCritterComponent,
        InputCheckboxCritterComponent,
        InputQuantityCritterComponent
      ]
    })
  ],
  render:(args) => ({
    styles: ['mbr-panel-critter { min-width: 400px }'],
    template: `
      <mbr-panel-critter ${args_to_angular_inputs(args)} class="flex-col">
        <div class="flex flex-col flex-grow-1 space-y-3">
          <mbr-card-critter class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritter />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Milk</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
               <mbr-input-quantity-critter />
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.25 4.5H15.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.25 4.5V15C14.25 15.75 13.5 16.5 12.75 16.5H5.25C4.5 16.5 3.75 15.75 3.75 15V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 4.5V3C6 2.25 6.75 1.5 7.5 1.5H10.5C11.25 1.5 12 2.25 12 3V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-foreground/30 flex-shrink-0 cursor-grab active:cursor-grabbing">
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="9" cy="5" r="1"></circle>
                <circle cx="9" cy="19" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <circle cx="15" cy="19" r="1"></circle>
              </svg>
            </div>
          </mbr-card-critter>

          <mbr-card-critter class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritter />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Eggs</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
                <mbr-input-quantity-critter />
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.25 4.5H15.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.25 4.5V15C14.25 15.75 13.5 16.5 12.75 16.5H5.25C4.5 16.5 3.75 15.75 3.75 15V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 4.5V3C6 2.25 6.75 1.5 7.5 1.5H10.5C11.25 1.5 12 2.25 12 3V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-foreground/30 flex-shrink-0 cursor-grab active:cursor-grabbing">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="9" cy="5" r="1"></circle>
                  <circle cx="9" cy="19" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <circle cx="15" cy="5" r="1"></circle>
                  <circle cx="15" cy="19" r="1"></circle>
                </svg>
            </div>
          </mbr-card-critter>

          <mbr-card-critter class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritter />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Toothpaste</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal"></p>
              </div>
            </div>

            <div class="flex items-center gap-3">
                <mbr-input-quantity-critter />
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.25 4.5H15.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.25 4.5V15C14.25 15.75 13.5 16.5 12.75 16.5H5.25C4.5 16.5 3.75 15.75 3.75 15V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 4.5V3C6 2.25 6.75 1.5 7.5 1.5H10.5C11.25 1.5 12 2.25 12 3V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-foreground/30 flex-shrink-0 cursor-grab active:cursor-grabbing">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="9" cy="5" r="1"></circle>
                  <circle cx="9" cy="19" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <circle cx="15" cy="5" r="1"></circle>
                  <circle cx="15" cy="19" r="1"></circle>
                </svg>
            </div>
          </mbr-card-critter>
        </div>
      </mbr-panel-critter>
    `
  })
}

export const Showcase: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        CardCritterComponent,
        ChipCritterComponent,
        InputCheckboxCritterComponent,
        InputQuantityCritterComponent
      ]
    })
  ],
  render: (args, context) => ({
    ...context,
    styles: [
      ':host { gap: 1rem; display: flex; flex-direction: column;}',
      'mbr-panel-critter { min-width: 400px; }'
    ],
    template: `
      <mbr-panel-critter title="PANTRY STATUS">
        <button
          mbrCritter
          flat
          color="warning"
          size="small"
          class="me-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.516 3.00947 16.931 3.99122 18.74 5.74L21 8" />
            <path d="M21 3V8H16" />
            <path d="M21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.48395 20.9905 7.06897 20.0088 5.26 18.26L3 16" />
            <path d="M8 16H3V21" />
          </svg>
        </button>
        <div class="flex-grow-1">
          <h3 class="m-0 font-semibold">5 items</h3>
          <small>needs restocking</small>
        </div>
        <button mbrCritter>View</button>
      </mbr-panel-critter>

      <mbr-panel-critter title="ACTIVE SHOPPING">
        <button
          mbrCritter
          flat
          color="success"
          size="small"
          class="me-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28" fill="none"
            stroke="currentColor"
            stroke-width="2.91667"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
          >
            <path d="M9.33332 25.6667C9.97766 25.6667 10.5 25.1444 10.5 24.5C10.5 23.8557 9.97766 23.3334 9.33332 23.3334C8.68899 23.3334 8.16666 23.8557 8.16666 24.5C8.16666 25.1444 8.68899 25.6667 9.33332 25.6667Z" />
            <path d="M22.1667 25.6667C22.811 25.6667 23.3333 25.1444 23.3333 24.5C23.3333 23.8557 22.811 23.3334 22.1667 23.3334C21.5223 23.3334 21 23.8557 21 24.5C21 25.1444 21.5223 25.6667 22.1667 25.6667Z" />
            <path d="M2.39166 2.39172H4.725L7.82833 16.8817C7.94217 17.4124 8.23744 17.8868 8.66333 18.2232C9.08921 18.5597 9.61905 18.7371 10.1617 18.7251H21.5717C22.1027 18.7242 22.6176 18.5422 23.0312 18.2092C23.4448 17.8762 23.7325 17.412 23.8467 16.8934L25.7717 8.22506H5.97333" />
          </svg>
        </button>
        <div class="flex-grow-1">
          <h3 class="m-0 font-semibold">4 items</h3>
          <small>to buy right now</small>
        </div>
        <button mbrCritter color="success">Go Shop</button>
      </mbr-panel-critter>

      <mbr-panel-critter title="EMPTY PANEL"></mbr-panel-critter>

      <mbr-panel-critter title="TO BUY" class="flex-col">
        <div class="flex flex-col flex-grow-1 space-y-3">
          <mbr-card-critter class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritter />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Milk</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
               <mbr-input-quantity-critter />
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.25 4.5H15.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.25 4.5V15C14.25 15.75 13.5 16.5 12.75 16.5H5.25C4.5 16.5 3.75 15.75 3.75 15V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 4.5V3C6 2.25 6.75 1.5 7.5 1.5H10.5C11.25 1.5 12 2.25 12 3V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-foreground/30 flex-shrink-0 cursor-grab active:cursor-grabbing">
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="9" cy="5" r="1"></circle>
                <circle cx="9" cy="19" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <circle cx="15" cy="19" r="1"></circle>
              </svg>
            </div>
          </mbr-card-critter>

          <mbr-card-critter class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritter />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Eggs</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
                <mbr-input-quantity-critter />
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.25 4.5H15.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.25 4.5V15C14.25 15.75 13.5 16.5 12.75 16.5H5.25C4.5 16.5 3.75 15.75 3.75 15V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 4.5V3C6 2.25 6.75 1.5 7.5 1.5H10.5C11.25 1.5 12 2.25 12 3V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-foreground/30 flex-shrink-0 cursor-grab active:cursor-grabbing">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="9" cy="5" r="1"></circle>
                  <circle cx="9" cy="19" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <circle cx="15" cy="5" r="1"></circle>
                  <circle cx="15" cy="19" r="1"></circle>
                </svg>
            </div>
          </mbr-card-critter>

          <mbr-card-critter class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritter />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Toothpaste</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal"></p>
              </div>
            </div>

            <div class="flex items-center gap-3">
                <mbr-input-quantity-critter />
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.25 4.5H15.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.25 4.5V15C14.25 15.75 13.5 16.5 12.75 16.5H5.25C4.5 16.5 3.75 15.75 3.75 15V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 4.5V3C6 2.25 6.75 1.5 7.5 1.5H10.5C11.25 1.5 12 2.25 12 3V4.5" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 8.25V12.75" stroke="#E84A3B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-foreground/30 flex-shrink-0 cursor-grab active:cursor-grabbing">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="9" cy="5" r="1"></circle>
                  <circle cx="9" cy="19" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <circle cx="15" cy="5" r="1"></circle>
                  <circle cx="15" cy="19" r="1"></circle>
                </svg>
            </div>
          </mbr-card-critter>
        </div>
      </mbr-panel-critter>

      <mbr-panel-critter title="HOUSEHOLD ITEMS">
        <div class="flex flex-col flex-grow-1 space-y-2">

          <mbr-card-critter class="flex justify-content-between justify-between">
              <div class="flex flex-col">
                  <h4 class="m-0">Milk</h4>
                  <small>Food</small>
              </div>
              <div class="flex flex-col">
                  <mbr-chip-critter color="success-tonal">In List</mbr-chip-critter>
              </div>
          </mbr-card-critter>

          <mbr-card-critter class="flex justify-content-between justify-between">
              <div class="flex flex-col">
                 <h4 class="m-0">Milk</h4>
                  <small>Food</small>
              </div>
              <div class="flex flex-col">
                  <button mbrCritter>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2.91669 7H11.0834" />
                      <path d="M7 2.91666V11.0833" />
                    </svg>
                    <span>Add</span>
                  </button>
              </div>
          </mbr-card-critter>

        </div>
      </mbr-panel-critter>
    `
  })
}
