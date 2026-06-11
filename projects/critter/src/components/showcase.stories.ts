import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Showcase as AvatarShowcase} from './avatar/avatar.stories';
import {Showcase as BadgeShowcase} from './badge/badge.stories';
import {Showcase as ButtonShowcase} from './button/button.stories';
import {Showcase as CheckboxShowcase} from './checkbox/checkbox.stories';
import {Showcase as ChipShowcase} from './chip/chip.stories';
import {Showcase as PanelShowcase} from './panel/panel.stories';
import {Showcase as QuantityInputShowcase} from './input-quantity/input-quantity.stories';
import {Showcase as InventoryCardShowcase} from './inventory-card/inventory-card.stories';
import {Showcase as InputTextShowcase} from './input-text/input-text.stories';
import {Showcase as HeaderShowcase} from './header/header.stories';
import {Showcase as FooterShowcase} from './footer/footer.stories';
import {
  AvatarComponent,
  BadgeComponent,
  BadgeDirective,
  ButtonComponent,
  CardComponent,
  ChipComponent,
  FooterComponent,
  HeaderComponent,
  CheckboxComponent,
  InputQuantityComponent,
  InputTextComponent,
  InventoryCardComponent,
  PanelComponent
} from 'critter';

const meta: Meta = {
  parameters: {
    docs: {
      description: {
        component: 'A theme we used for our grocery app'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;

export const Avatars: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent
      ]
    })
  ],
  ...AvatarShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-avatar--docs">original story here</a>'
      }
    }
  }
};

export const Buttons: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent
      ]
    })
  ],
  ...ButtonShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-button--docs">original story here</a>'
      }
    }
  }
};

export const Badges: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        BadgeDirective,
        BadgeComponent
      ]
    })
  ],
  ...BadgeShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-badge--docs">original story here</a>'
      }
    }
  }
};

export const Checkboxes: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        CheckboxComponent
      ]
    })
  ],
  ...CheckboxShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-input-checkbox--docs">original story here</a>'
      }
    }
  }
};

export const Chips: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        ChipComponent
      ]
    })
  ],
  ...ChipShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-chip--docs">original story here</a>'
      }
    }
  }
};

export const Footer: StoryObj = {
  ...FooterShowcase,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        FooterComponent
      ]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-footer--docs">original story here</a>'
      }
    }
  },
  render: () => ({
    styles: [':host { background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244; display: flex; padding: 3rem 0 0;}'],
    template: `<mbr-footer />`
  })
};

export const Header: StoryObj = {
  ...HeaderShowcase,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        HeaderComponent
      ]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-header--docs">original story here</a>'
      }
    }
  },
  render: () => ({
    styles: [':host { background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244; display: flex; padding: 1rem;}'],
    template: `<mbr-critter-header />`
  })
};

export const InputText: StoryObj<InputTextComponent> = {
  decorators: [
    moduleMetadata({
      imports: [
        InputTextComponent
      ]
    })
  ],
  ...InputTextShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-input-text--docs">original story here</a>'
      }
    }
  }
};

export const InventoryCards: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        InventoryCardComponent
      ]
    })
  ],
  ...InventoryCardShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-inventory-card--docs">original story here</a>'
      }
    }
  }
};

export const Panels: StoryObj = {
  ...PanelShowcase,
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent,
        ButtonComponent,
        CardComponent,
        ChipComponent,
        CheckboxComponent,
        InputQuantityComponent,
        InventoryCardComponent,
        PanelComponent
      ]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-panel--docs">original story here</a>'
      }
    }
  }
};

export const QuantityInput: StoryObj<InputQuantityComponent> = {
  decorators: [
    moduleMetadata({
      imports: [
        InputQuantityComponent
      ]
    })
  ],
  ...QuantityInputShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-input-quantity--docs">original story here</a>'
      }
    }
  }
};

export const HomeScreen: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        BadgeComponent,
        BadgeDirective,
        ButtonComponent,
        CardComponent,
        ChipComponent,
        FooterComponent,
        HeaderComponent,
        CheckboxComponent,
        InputTextComponent,
        InputQuantityComponent,
        PanelComponent
      ]
    })
  ],
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    styles: [
      `:host {
        display: flex;
        color: rgba(74, 42, 12, 0.80);
        flex-direction: column;
        justify-content: flex-start !important;
        max-width: 460px;
        min-height: 100dvh;
        background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244;
      }`,
      'main { flex: 1 1 0; padding: 24px; display: flex; flex-direction: column; }'
    ],
    template: `
      <main>
      <mbr-critter-header />

      <section class="mb-4 gap-6 flex flex-col w-full">
        <mbr-panel class="w-full" title="PANTRY STATUS">
          <button
            mbrButton
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
          <button mbrButton>View</button>
        </mbr-panel>

        <mbr-panel class="w-full" title="ACTIVE SHOPPING">
          <button
            mbrButton
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
          <button mbrButton color="success">Go Shop</button>
        </mbr-panel>
      </section>

      <section class="flex h-[80px] gap-3 w-full">
        <button mbrButton class="grow-1" color="light">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H3.01" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 18H3.01" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 6H3.01" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 12H21" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 18H21" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 6H21" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Master List</span>
        </button>
        <button mbrButton class="grow-1" color="light">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_1_367)">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1_367">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span>Family Hub</span>
        </button>
      </section>
      </main>


      <mbr-footer />
    `
  })
}

export const MasterScreen: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        BadgeComponent,
        BadgeDirective,
        ButtonComponent,
        CardComponent,
        ChipComponent,
        FooterComponent,
        HeaderComponent,
        CheckboxComponent,
        InputTextComponent,
        InputQuantityComponent,
        PanelComponent
      ]
    })
  ],
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    styles: [
      `:host {
        display: flex;
        color: rgba(74, 42, 12, 0.80);
        flex-direction: column;
        justify-content: flex-start !important;
        max-width: 460px;
        min-height: 100cb;
        background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244;
      }`,
      'main { flex: 1 1 0; padding: 24px; display: flex; flex-direction: column; }'
    ],
    template: `
      <main>
        <mbr-critter-header />

        <section class="mb-4 gap-2 flex w-full">
          <input type="text" placeholder="Search items..." mbrInput class="flex-grow-1"/>
          <button mbrButton color="success">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 5V19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </section>

        <section class="flex gap-2 w-full mb-2">
          <button mbrButton color="warning">All</button>
          <button mbrButton color="light">Food</button>
          <button mbrButton color="light">Toiletries</button>
          <button mbrButton color="light">Household</button>
        </section>

        <section class="w-full">
          <mbr-panel title="HOUSEHOLD ITEMS" class="w-full">
            <div class="flex flex-col flex-grow-1 space-y-2">

              <mbr-card class="flex justify-content-between justify-between">
                  <div class="flex flex-col">
                      <h4 class="m-0">Milk</h4>
                      <small>Food</small>
                  </div>
                  <div class="flex flex-col">
                      <mbr-chip color="success-tonal">In List</mbr-chip>
                  </div>
              </mbr-card>

              <mbr-card class="flex justify-content-between justify-between">
                  <div class="flex flex-col">
                     <h4 class="m-0">Milk</h4>
                      <small>Food</small>
                  </div>
                  <div class="flex flex-col">
                      <button mbrButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M2.91669 7H11.0834" />
                          <path d="M7 2.91666V11.0833" />
                        </svg>
                        <span>Add</span>
                      </button>
                  </div>
              </mbr-card>

            </div>
          </mbr-panel>

        </section>
      </main>

      <mbr-footer />
    `
  })
}

export const CartScreen: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        BadgeComponent,
        BadgeDirective,
        ButtonComponent,
        CardComponent,
        ChipComponent,
        FooterComponent,
        HeaderComponent,
        CheckboxComponent,
        InputTextComponent,
        InputQuantityComponent,
        PanelComponent
      ]
    })
  ],
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    styles: [
      `:host {
        display: flex;
        color: rgba(74, 42, 12, 0.80);
        flex-direction: column;
        justify-content: flex-start !important;
        max-width: 460px;
        min-height: 100cb;
        background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244;
      }`,
      'main { flex: 1 1 0; padding: 24px; display: flex; flex-direction: column; }'
    ],
    template: `
      <main>
        <mbr-critter-header />

        <button mbrButton color="success" class="w-full  mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9H14.25" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 3.75V14.25" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>From Master List</span>
        </button>

        <section class="w-full">
         <mbr-panel title="TO BUY" class="flex-col w-full">
          <div class="flex flex-col flex-grow-1 space-y-3">
            <mbr-card class="flex justify-between items-center gap-3">
              <div class="flex flex-row gap-2 items-center">
                <input type="checkbox" mbrCheckbox />
                <div class="flex-1">
                  <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Milk</h4>
                  <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                 <mbr-input-quantity />
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
            </mbr-card>

            <mbr-card class="flex justify-between items-center gap-3">
              <div class="flex flex-row gap-2 items-center">
                <input type="checkbox" mbrCheckbox />
                <div class="flex-1">
                  <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Eggs</h4>
                  <p class="text-xs text-foreground/60 italic truncate m-0 font-normal">Free range</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                  <mbr-input-quantity />
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
            </mbr-card>

            <mbr-card class="flex justify-between items-center gap-3">
              <div class="flex flex-row gap-2 items-center">
                <input type="checkbox" mbrCheckbox />
                <div class="flex-1">
                  <h4 class="font-bold text-foreground text-lg leading-tight truncate m-0">Toothpaste</h4>
                  <p class="text-xs text-foreground/60 italic truncate m-0 font-normal"></p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                  <mbr-input-quantity />
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
            </mbr-card>
          </div>
         </mbr-panel>
        </section>
      </main>

      <mbr-footer />
    `
  })
}

export const PantryScreen: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        BadgeComponent,
        BadgeDirective,
        ButtonComponent,
        CardComponent,
        ChipComponent,
        FooterComponent,
        HeaderComponent,
        CheckboxComponent,
        InputTextComponent,
        InputQuantityComponent,
        InventoryCardComponent,
        PanelComponent
      ]
    })
  ],
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    styles: [
      `:host {
        display: flex;
        color: rgba(74, 42, 12, 0.80);
        flex-direction: column;
        justify-content: flex-start !important;
        max-width: 460px;
        min-height: 100cb;
        background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244;
      }`,
      'main { flex: 1 1 0; padding: 24px; display: flex; flex-direction: column; }'
    ],
    template: `
      <main>
        <mbr-critter-header />

        <mbr-panel title="NEED TO BUY" class="mb-2">
          <mbr-card class="w-full items-center">
              <mbr-chip color="danger-tonal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9 3L3 9" stroke="#8A1A10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 3L9 9" stroke="#8A1A10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>OUT</span>
              </mbr-chip>

              <h4 class="flex-grow-1 m-0">Laundry Detergent</h4>
              <button mbrButton color="success">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.91663 7H11.0833" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 2.91666V11.0833" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>List</span>
              </button>
          </mbr-card>
        </mbr-panel>

        <section class="w-full">
          <mbr-panel title="MY PANTRY" class="w-full">
            <div class="grid grid-cols-2 w-full gap-2">
              <mbr-inventory-card label="Milk" status="low"/>
              <mbr-inventory-card label="Eggs" status="out"/>
              <mbr-inventory-card label="Bread" status="stocked"/>
              <mbr-inventory-card label="Dish Soap" status="low"/>
              <mbr-inventory-card label="Apples" status="stocked"/>
              <mbr-inventory-card label="Toothpaste" status="out"/>
              <mbr-inventory-card label="Landry Detergent" status="out"/>
            </div>
          </mbr-panel>
        </section>
      </main>


      <mbr-footer />
    `
  })
}

export const FamilyScreen: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent,
        BadgeComponent,
        BadgeDirective,
        ButtonComponent,
        CardComponent,
        ChipComponent,
        FooterComponent,
        HeaderComponent,
        CheckboxComponent,
        InputTextComponent,
        InputQuantityComponent,
        InventoryCardComponent,
        PanelComponent
      ]
    })
  ],
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    styles: [
      `:host {
        display: flex;
        color: rgba(74, 42, 12, 0.80);
        flex-direction: column;
        justify-content: flex-start !important;
        max-width: 460px;
        min-height: 100cb;
        background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244;
      }`,
      'main { flex: 1 1 0; padding: 24px; display: flex; flex-direction: column; }'
    ],
    template: `
      <main>
        <mbr-critter-header />

        <mbr-panel title="YOUR HOUSEHOLD" class="mb-3 w-full">
          <div class="flex flex-col gap-2 w-full">
            <div class="flex w-full">
                <mbr-avatar name="You" color="info" class="me-2"/>
                <div class="flex flex-col justify-center">
                    <h4 class="m-0">You (Admin)</h4>
                    <small>Joined 2 months ago</small>
                </div>
            </div>
            <div class="flex w-full">
                <mbr-avatar name="Natasha" color="warning"  class="me-2"/>
                <div class="flex flex-col justify-center">
                    <h4 class="m-0">Natasha</h4>
                    <small>Joined 1 months ago</small>
                </div>
            </div>
            <button mbrButton color="warning">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9H14.25" stroke="#4A2A0C" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 3.75V14.25" stroke="#4A2A0C" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Invite Member</span>
            </button>
          </div>
        </mbr-panel>

        <mbr-panel title="RECENT ACTIVITY" class="w-full">
          <div class="flex flex-col gap-2">
              <div class="flex">
                <mbr-avatar color="light" flat name="Natasha" class="me-2" />
                <div class="flex flex-col justify-center">
                  <h4 class="m-0">Natasha added milk to the shopping list</h4>
                  <small>2 min ago</small>
                </div>
              </div>
              <div class="flex">
                <mbr-avatar color="light" flat name="Dad" class="me-2" />
                <div class="flex flex-col justify-center">
                  <h4 class="m-0">Dad bought eggs</h4>
                  <small>1 hr ago</small>
                </div>
              </div>
              <div class="flex">
                <mbr-avatar color="light" flat name="Craig" class="me-2" />
                <div class="flex flex-col justify-center">
                  <h4 class="m-0">Craig marked Bread as stocked</h4>
                  <small>3 hrs ago</small>
                </div>
              </div>
          </div>
        </mbr-panel>
      </main>

      <mbr-footer />
    `
  })
}
