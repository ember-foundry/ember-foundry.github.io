import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {args_to_angular_inputs} from '@ember-foundry/component-library';
import {
  AvatarComponent,
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  ChipComponent,
  InputQuantityComponent,
  InventoryCardComponent,
  PanelComponent
} from 'critter';

const meta: Meta<PanelComponent> = {
  component: PanelComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent
      ]
    })
  ],
  tags: ['autodocs', 'panel'],
  argTypes: {
    title: {
      control: {type: 'text'},
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

export const PantryStatus: StoryObj<PanelComponent> = {
  args: {
    title: 'PANTRY STATUS'
  },
  render: (args) => ({
    styles: ['mbr-critter-panel { max-width: 500px; }'],
    template: `
      <mbr-critter-panel ${args_to_angular_inputs(args)}>
        <button
          mbrCritterButton
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
        <button mbrCritterButton>View</button>
      </mbr-critter-panel>
    `
  })
}

export const ActiveShopping: StoryObj<PanelComponent> = {
  args: {
    title: 'ACTIVE SHOPPING'
  },
  render: (args) => ({
    styles: ['mbr-critter-panel { max-width: 500px; }'],
    template: `
      <mbr-critter-panel ${args_to_angular_inputs(args)}>
      <button
        mbrCritterButton
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
      <button mbrCritterButton color="success">Go Shop</button>
    </mbr-critter-panel>
    `
  })
}

export const EmptyPanel: StoryObj<PanelComponent> = {
  args: {
    title: 'NO CONTENT'
  }
}

export const HouseholdItems: StoryObj<PanelComponent> = {
  args: {
    title: 'HOUSEHOLD ITEMS'
  },
  decorators: [
    moduleMetadata({
      imports: [
        CardComponent,
        ChipComponent
      ]
    })
  ],
  render: (args) => ({
    template: `
      <mbr-critter-panel ${args_to_angular_inputs(args)}>
        <div class="flex flex-col flex-grow-1 space-y-2">

          <mbr-critter-card class="flex justify-content-between justify-between">
              <div class="flex flex-col">
                  <h4 class="m-0">Milk</h4>
                  <small>Food</small>
              </div>
              <div class="flex flex-col">
                  <mbr-critter-chip color="success-tonal">In List</mbr-critter-chip>
              </div>
          </mbr-critter-card>

          <mbr-critter-card class="flex justify-content-between justify-between">
              <div class="flex flex-col">
                 <h4 class="m-0">Milk</h4>
                  <small>Food</small>
              </div>
              <div class="flex flex-col">
                  <button mbrCritterButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2.91669 7H11.0834" />
                      <path d="M7 2.91666V11.0833" />
                    </svg>
                    <span>Add</span>
                  </button>
              </div>
          </mbr-critter-card>

        </div>
      </mbr-critter-panel>
    `
  })
}

export const CartPanel: StoryObj<PanelComponent> = {
  args: {
    title: 'TO BUY'
  },
  decorators: [
    moduleMetadata({
      imports: [
        CardComponent,
        CheckboxComponent,
        InputQuantityComponent
      ]
    })
  ],
  render: (args) => ({
    styles: ['mbr-critter-panel { min-width: 400px }'],
    template: `
      <mbr-critter-panel ${args_to_angular_inputs(args)} class="flex-col">
        <div class="flex flex-col flex-grow-1 space-y-3">
          <mbr-critter-card class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritterCheckbox />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Milk</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
               <mbr-critter-input-quantity />
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
          </mbr-critter-card>

          <mbr-critter-card class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritterCheckbox />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Eggs</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
                <mbr-critter-input-quantity />
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
          </mbr-critter-card>

          <mbr-critter-card class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritterCheckbox />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Toothpaste</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal"></p>
              </div>
            </div>

            <div class="flex items-center gap-3">
                <mbr-critter-input-quantity />
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
          </mbr-critter-card>
        </div>
      </mbr-critter-panel>
    `
  })
}

export const Showcase: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent,
        CardComponent,
        ChipComponent,
        CheckboxComponent,
        InputQuantityComponent,
        InventoryCardComponent
      ]
    })
  ],
  render: (args, context) => ({
    ...context,
    styles: [
      ':host { gap: 2rem; display: flex; flex-direction: column;}'
    ],
    template: `
      <mbr-critter-panel title="PANTRY STATUS">
        <button
          mbrCritterButton
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
        <button mbrCritterButton>View</button>
      </mbr-critter-panel>

      <mbr-critter-panel title="ACTIVE SHOPPING">
        <button
          mbrCritterButton
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
        <button mbrCritterButton color="success">Go Shop</button>
      </mbr-critter-panel>

      <mbr-critter-panel title="EMPTY PANEL"></mbr-critter-panel>

      <mbr-critter-panel title="TO BUY" class="flex-col">
        <div class="flex flex-col flex-grow-1 space-y-3">
          <mbr-critter-card class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritterCheckbox />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Milk</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
               <mbr-critter-input-quantity />
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
          </mbr-critter-card>

          <mbr-critter-card class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritterCheckbox />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Eggs</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
                <mbr-critter-input-quantity />
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
          </mbr-critter-card>

          <mbr-critter-card class="flex justify-between items-center gap-3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" mbrCritterCheckbox />
              <div class="flex-1">
                <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Toothpaste</h4>
                <p class="text-xs text-foreground/60 italic truncate m-0 font-normal"></p>
              </div>
            </div>

            <div class="flex items-center gap-3">
                <mbr-critter-input-quantity />
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
          </mbr-critter-card>
        </div>
      </mbr-critter-panel>

      <mbr-critter-panel title="HOUSEHOLD ITEMS">
        <div class="flex flex-col flex-grow-1 space-y-2">

          <mbr-critter-card class="flex justify-content-between justify-between">
              <div class="flex flex-col">
                  <h4 class="m-0">Milk</h4>
                  <small>Food</small>
              </div>
              <div class="flex flex-col">
                  <mbr-critter-chip color="success-tonal">In List</mbr-critter-chip>
              </div>
          </mbr-critter-card>

          <mbr-critter-card class="flex justify-content-between justify-between">
              <div class="flex flex-col">
                 <h4 class="m-0">Milk</h4>
                  <small>Food</small>
              </div>
              <div class="flex flex-col">
                  <button mbrCritterButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2.91669 7H11.0834" />
                      <path d="M7 2.91666V11.0833" />
                    </svg>
                    <span>Add</span>
                  </button>
              </div>
          </mbr-critter-card>

        </div>
      </mbr-critter-panel>

      <mbr-critter-panel title="NEED TO BUY">
        <mbr-critter-card class="w-full items-center">
            <mbr-critter-chip color="danger-tonal">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M9 3L3 9" stroke="#8A1A10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 3L9 9" stroke="#8A1A10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>OUT</span>
            </mbr-critter-chip>

            <h4 class="flex-grow-1 m-0">Laundry Detergent</h4>
            <button mbrCritterButton color="success">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.91663 7H11.0833" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 2.91666V11.0833" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>List</span>
            </button>
        </mbr-critter-card>
      </mbr-critter-panel>

      <mbr-critter-panel title="MY PANTRY">
        <div class="grid grid-cols-2 w-full gap-2">
          <mbr-critter-inventory-card label="Milk" status="low"/>
          <mbr-critter-inventory-card label="Eggs" status="out"/>
          <mbr-critter-inventory-card label="Bread" status="stocked"/>
          <mbr-critter-inventory-card label="Dish Soap" status="low"/>
          <mbr-critter-inventory-card label="Apples" status="stocked"/>
          <mbr-critter-inventory-card label="Toothpaste" status="out"/>
          <mbr-critter-inventory-card label="Landry Detergent" status="out"/>
        </div>
      </mbr-critter-panel>

      <mbr-critter-panel title="YOUR HOUSEHOLD">
        <div class="flex flex-col gap-2 w-full">
          <div class="flex w-full">
              <mbr-critter-avatar name="You" color="info" class="me-2"/>
              <div>
                  <h4 class="m-0">You (Admin)</h4>
                  <small>Joined 2 months ago</small>
              </div>
          </div>
          <div class="flex w-full">
              <mbr-critter-avatar name="Natasha" color="warning"  class="me-2"/>
              <div>
                  <h4 class="m-0">Natasha</h4>
                  <small>Joined 1 months ago</small>
              </div>
          </div>
          <button mbrCritterButton color="warning">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9H14.25" stroke="#4A2A0C" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 3.75V14.25" stroke="#4A2A0C" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Invite Member</span>
          </button>
        </div>
      </mbr-critter-panel>

      <mbr-critter-panel title="RECENT ACTIVITY">
        <div class="flex flex-col gap-2">
            <div class="flex">
              <mbr-critter-avatar color="light" flat name="Natasha" class="me-2" />
              <div>
                <h4 class="m-0">Natasha added milk to the shopping list</h4>
                <small>2 min ago</small>
              </div>
            </div>
            <div class="flex">
              <mbr-critter-avatar color="light" flat name="Dad" class="me-2" />
              <div>
                <h4 class="m-0">Dad bought eggs</h4>
                <small>1 hr ago</small>
              </div>
            </div>
            <div class="flex">
              <mbr-critter-avatar color="light" flat name="Craig" class="me-2" />
              <div>
                <h4 class="m-0">Craig marked Bread as stocked</h4>
                <small>3 hrs ago</small>
              </div>
            </div>
        </div>
      </mbr-critter-panel>
    `
  })
}
