import {applicationConfig, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Showcase as AvatarShowcase} from './avatar/avatar.stories';
import {Showcase as BadgeShowcase} from './badge/badge.stories';
import {Showcase as ButtonShowcase} from './button/button.stories';
import {Showcase as CheckboxShowcase} from './checkbox/checkbox.stories';
import {Showcase as ChipShowcase} from './chip/chip.stories';
import {Showcase as PanelShowcase} from './panel/panel.stories';
import {Showcase as QuantityInputShowcase} from './input-quantity/input-quantity.stories';
import {Showcase as InventoryCardShowcase} from './inventory-card/inventory-card.stories';
import {Showcase as InputTextShowcase} from './input-text/input-text.stories';
import {Showcase as FooterShowcase} from './footer/footer.stories';
import {
  AvatarComponent,
  BadgeComponent,
  BadgeDirective,
  ButtonComponent,
  CardComponent,
  ChipComponent,
  FooterComponent,
  CheckboxComponent,
  InputQuantityComponent,
  InputTextComponent,
  InventoryCardComponent,
  PanelComponent, StickyDirective, HeaderComponent, InventoryChipComponent
} from 'critter';
import {provideRouter, RouterLink} from '@angular/router';
import {LucideBell, LucideBox, LucidePlus, LucideRefreshCw, LucideShoppingCart} from '@lucide/angular';

const all_imports = [
  AvatarComponent,
  BadgeComponent,
  BadgeDirective,
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  ChipComponent,
  FooterComponent,
  HeaderComponent,
  InputTextComponent,
  InputQuantityComponent,
  InventoryCardComponent,
  InventoryChipComponent,
  LucideBell,
  LucideBox,
  LucidePlus,
  LucideRefreshCw,
  LucideShoppingCart,
  PanelComponent,
  RouterLink,
  StickyDirective
]

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
      imports: all_imports
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
      imports: all_imports
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
      imports: all_imports
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
      imports: all_imports
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
      imports: all_imports
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
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    }),
    moduleMetadata({
      imports: all_imports
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-footer--docs">original story here</a>'
      }
    },
    layout: 'fullscreen'
  },
  render: () => ({
    styles: [':host { min-height: 150px; flex-direction: column-reverse; display: flex; }'],
    template: `<mbr-critter-footer />`
  })
};

const header_html = `
<header mbrSticky stickyTopOffset="0px" class="flex items-center w-full p-4 top-0">
  <a href="#" class="flex items-center flex-1 text-inherit no-underline">
    <button mbrCritterButton class="me-2" href="#">
        <svg lucideBox [size]="28" [strokeWidth]="2.91667" color="white"/>
    </button>
    <div class="flex-grow-1">
      <h1 class="m-0 text-white text-shadow">FreshStack</h1>
      <p class="m-0 font-bold">Household Manager</p>
    </div>
  </a>
  <a mbrCritterButton mbrCritterBadge="4" color="warning">
    <svg lucideBell [size]="20" [strokeWidth]="2.5"/>
  </a>
</header>
`

export const Header: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: all_imports
    })
  ],
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    styles: [
      ':host { padding: 1rem;}'
    ],
    template: header_html
  })
};

export const InputText: StoryObj<InputTextComponent> = {
  decorators: [
    moduleMetadata({
      imports: all_imports
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
      imports: all_imports
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
      imports: all_imports
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
      imports:all_imports
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
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    }),
    moduleMetadata({
      imports: all_imports
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
        margin: auto;
      }`,
      'main { flex: 1 1 0; padding: 24px; display: flex; flex-direction: column; }'
    ],
    template: `
      <main>
      ${header_html}
      <section class="mb-4 gap-6 flex flex-col w-full">
        <mbr-critter-panel class="w-full" title="PANTRY STATUS">
          <button
            mbrCritterButton
            flat
            color="warning"
            size="small"
            class="me-3"
          >
            <svg lucideRefreshCw [size]="24" [strokeWidth]="2.5"/>
          </button>
          <div class="flex-grow-1">
            <h3 class="m-0 font-semibold">5 items</h3>
            <small>needs restocking</small>
          </div>
          <button mbrCritterButton>View</button>
        </mbr-critter-panel>

        <mbr-critter-panel class="w-full" title="ACTIVE SHOPPING">
          <button
            mbrCritterButton
            flat
            color="success"
            size="small"
            class="me-3"
          >
            <svg lucideShoppingCart [size]="24" [strokeWidth]="2.5" />
          </button>
          <div class="flex-grow-1">
            <h3 class="m-0 font-semibold">4 items</h3>
            <small>to buy right now</small>
          </div>
          <button mbrCritterButton color="success">Go Shop</button>
        </mbr-critter-panel>
      </section>
      <section class="flex h-[80px] gap-3 w-full">
        <button mbrCritterButton class="grow-1" color="light">
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
        <button mbrCritterButton class="grow-1" color="light">
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
      <mbr-critter-footer />
    `
  })
}

export const MasterScreen: StoryObj = {
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    }),
    moduleMetadata({
      imports: all_imports
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
        margin: auto;
      }`,
      'main { flex: 1 1 0; padding: 24px; display: flex; flex-direction: column; }'
    ],
    template: `
      <main>
        ${header_html}

        <section class="mb-4 gap-2 flex w-full">
          <input type="text" placeholder="Search items..." mbrCritterInput class="flex-grow-1"/>
          <button mbrCritterButton color="success">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 5V19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </section>

        <section class="flex gap-2 w-full mb-2">
          <button mbrCritterButton color="warning">All</button>
          <button mbrCritterButton color="light">Food</button>
          <button mbrCritterButton color="light">Toiletries</button>
          <button mbrCritterButton color="light">Household</button>
        </section>

        <section class="w-full">
          <mbr-critter-panel title="HOUSEHOLD ITEMS" class="w-full">
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

        </section>
      </main>

      <mbr-critter-footer />
    `
  })
}

export const CartScreen: StoryObj = {
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    }),
    moduleMetadata({
      imports: all_imports
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
        margin: auto;
      }`,
      'main { flex: 1 1 0; padding: 24px; display: flex; flex-direction: column; }'
    ],
    template: `
      <main>
        ${header_html}

        <button mbrCritterButton color="success" class="w-full  mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9H14.25" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 3.75V14.25" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>From Master List</span>
        </button>

        <section class="w-full">
         <mbr-critter-panel title="TO BUY" class="flex-col w-full">
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
        </section>
      </main>

      <mbr-critter-footer />
    `
  })
}

export const PantryScreen: StoryObj = {
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    }),
    moduleMetadata({
      imports: all_imports
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
        margin: auto;
      }`,
      'main { flex: 1 1 0; padding: 24px; display: flex; flex-direction: column; }'
    ],
    template: `
      <main>
        ${header_html}

        <mbr-critter-panel title="NEED TO BUY" class="mb-2">
          <mbr-critter-card class="w-full items-center">
              <mbr-critter-inventory-chip status="out" />
              <h4 class="flex-grow-1 m-0">Laundry Detergent</h4>
              <button mbrCritterButton color="success">
                <svg lucidePlus [size]="14" [strokeWidth]="3" />
                <span>List</span>
              </button>
          </mbr-critter-card>
        </mbr-critter-panel>

        <section class="w-full">
          <mbr-critter-panel title="MY PANTRY" class="w-full">
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
        </section>
      </main>


      <mbr-critter-footer />
    `
  })
}

export const FamilyScreen: StoryObj = {
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    }),
    moduleMetadata({
      imports: all_imports
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
        max-width: 460px;
        min-height: 100dvh;
        background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244;
        margin: auto;
      }`
    ],
    template: `
      <mbr-critter-header mbrSticky stickyTopOffset="0px" />
      <main class="p-4 flex flex-col flex-1">
        <mbr-critter-panel title="YOUR HOUSEHOLD" class="mb-3 w-full">
          <div class="flex flex-col gap-2 w-full">
            <div class="flex w-full">
                <mbr-critter-avatar name="You" color="info" class="me-2"/>
                <div class="flex flex-col justify-center">
                    <h4 class="m-0">You (Admin)</h4>
                    <small>Joined 2 months ago</small>
                </div>
            </div>
            <div class="flex w-full">
                <mbr-critter-avatar name="Natasha" color="warning"  class="me-2"/>
                <div class="flex flex-col justify-center">
                    <h4 class="m-0">Natasha</h4>
                    <small>Joined 1 months ago</small>
                </div>
            </div>
            <button mbrCritterButton color="warning">
              <svg lucidePlus [size]="18" [strokeWidth]="3"/>
              <span>Invite Member</span>
            </button>
          </div>
        </mbr-critter-panel>
        <mbr-critter-panel title="RECENT ACTIVITY" class="w-full">
          <div class="flex flex-col gap-2">
              <div class="flex">
                <mbr-critter-avatar color="light" flat name="Natasha" class="me-2" />
                <div class="flex flex-col justify-center">
                  <h4 class="m-0">Natasha added milk to the shopping list</h4>
                  <small>2 min ago</small>
                </div>
              </div>
              <div class="flex">
                <mbr-critter-avatar color="light" flat name="Dad" class="me-2" />
                <div class="flex flex-col justify-center">
                  <h4 class="m-0">Dad bought eggs</h4>
                  <small>1 hr ago</small>
                </div>
              </div>
              <div class="flex">
                <mbr-critter-avatar color="light" flat name="Craig" class="me-2" />
                <div class="flex flex-col justify-center">
                  <h4 class="m-0">Craig marked Bread as stocked</h4>
                  <small>3 hrs ago</small>
                </div>
              </div>
          </div>
        </mbr-critter-panel>
      </main>
      <mbr-critter-footer />
    `
  })
}
