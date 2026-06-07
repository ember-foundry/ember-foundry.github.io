import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Showcase as CheckboxShowcase} from 'component-library/components/input/input-checkbox-critter/input-checkbox-critter.stories';
import {Showcase as ButtonShowcase} from 'component-library/components/button/button-critter/button-critter.stories';
import {Showcase as BadgeShowcase} from 'component-library/components/badge/badge-critter/badge-critter.stories';
import {Showcase as ChipShowcase} from 'component-library/components/chip/chip-critter/chip-critter.stories';
import {Showcase as PanelShowcase} from 'component-library/components/panel/panel-critter/panel-critter.stories';
import {Showcase as QuantityInputShowcase} from 'component-library/components/input/input-quantity-critter/input-quantity-critter.stories';
import {Showcase as AvatarShowcase} from 'component-library/components/avatar/avatar-critter/avatar-critter.stories';
import {Showcase as InventoryCardShowcase} from 'component-library/components/inventory-card-critter/inventory-card-critter.stories';
import {Showcase as InputTextShowcase} from 'component-library/components/input/input-text-critter/input-text-critter.stories';
import {
  ButtonCritterComponent,
  InputCheckboxCritterComponent,
  PanelCritterComponent,
  InputQuantityCritterComponent, BadgeCritterDirective, ChipCritterComponent, AvatarCritterComponent,
  InventoryCardCritterComponent, InputTextCritterComponent
} from 'component-library';
import {BadgeCritterComponent} from 'component-library/components/badge/badge-critter/badge-critter.component';
import {CardCritterComponent} from 'component-library/components/card/card-critter/card-critter.component';

const meta: Meta = {
  title: 'themes/Critter',
  parameters: {
    docs: {
      description: {
        component: 'A theme we used for our grocery app'
      }
    }
  },
  tags: ['autodocs', 'critter']
};

export default meta;

export const Buttons: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        ButtonCritterComponent
      ]
    })
  ],
  ...ButtonShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-button-button-critter--docs">original story here</a>'
      }
    }
  }
};

export const Badges: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        ButtonCritterComponent,
        BadgeCritterDirective,
        BadgeCritterComponent
      ]
    })
  ],
  ...BadgeShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-badge-badge-critter--docs">original story here</a>'
      }
    }
  }
};

export const Chips: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        ChipCritterComponent
      ]
    })
  ],
  ...ChipShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-chip-chip-critter--docs">original story here</a>'
      }
    }
  }
};

export const Panels: StoryObj = {
  ...PanelShowcase,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonCritterComponent,
        CardCritterComponent,
        ChipCritterComponent,
        InputCheckboxCritterComponent,
        InputQuantityCritterComponent,
        PanelCritterComponent
      ]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-panel-panel-critter--docs">original story here</a>'
      }
    }
  }
};

export const Checkboxes: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        InputCheckboxCritterComponent
      ]
    })
  ],
  ...CheckboxShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-input-input-checkbox-critter--docs">original story here</a>'
      }
    }
  }
};

export const QuantityInput: StoryObj<InputQuantityCritterComponent> = {
  decorators: [
    moduleMetadata({
      imports: [
        InputQuantityCritterComponent
      ]
    })
  ],
  ...QuantityInputShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-input-input-quantity-critter--docs">original story here</a>'
      }
    }
  }
};

export const InputText: StoryObj<InputTextCritterComponent> = {
  decorators: [
    moduleMetadata({
      imports: [
        InputTextCritterComponent
      ]
    })
  ],
  ...InputTextShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-input-input-text-critter--docs">original story here</a>'
      }
    }
  }
};

export const Avatars: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        AvatarCritterComponent
      ]
    })
  ],
  ...AvatarShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-avatar-avatar-critter--docs">original story here</a>'
      }
    }
  }
};

export const InventoryCards: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        InventoryCardCritterComponent
      ]
    })
  ],
  ...InventoryCardShowcase,
  parameters: {
    docs: {
      description: {
        story: 'See the <a href="/docs/components-inventory-card-critter--docs">original story here</a>'
      }
    }
  }
};

export const HomeScreen: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        BadgeCritterComponent,
        BadgeCritterDirective,
        ButtonCritterComponent,
        CardCritterComponent,
        ChipCritterComponent,
        InputCheckboxCritterComponent,
        InputTextCritterComponent,
        InputQuantityCritterComponent,
        PanelCritterComponent
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
        font-family: Fredoka, sans-serif;
        flex-direction: column;
        justify-content: flex-start !important;
        max-width: 460px;
        background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244;
        padding: 24px;
      }`
    ],
    template: `
      <header class="flex items-center mb-6 w-full">
        <a mbrButtonCritter class="me-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M24.5 9.33333C24.4996 8.92415 24.3916 8.52228 24.1868 8.16802C23.982 7.81377 23.6877 7.51959 23.3333 7.315L15.1667 2.64833C14.812 2.44354 14.4096 2.33573 14 2.33573C13.5904 2.33573 13.188 2.44354 12.8333 2.64833L4.66667 7.315C4.31231 7.51959 4.01798 7.81377 3.81321 8.16802C3.60843 8.52228 3.50042 8.92415 3.5 9.33333V18.6667C3.50042 19.0758 3.60843 19.4777 3.81321 19.832C4.01798 20.1862 4.31231 20.4804 4.66667 20.685L12.8333 25.3517C13.188 25.5565 13.5904 25.6643 14 25.6643C14.4096 25.6643 14.812 25.5565 15.1667 25.3517L23.3333 20.685C23.6877 20.4804 23.982 20.1862 24.1868 19.832C24.3916 19.4777 24.4996 19.0758 24.5 18.6667V9.33333Z" stroke="white" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.85 8.16667L14 14L24.15 8.16667" stroke="white" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 25.6667V14" stroke="white" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <div class="flex-grow-1">
          <h1 class="m-0 text-white">FreshStack</h1>
          <p class="m-0 font-bold">Household Manager</p>
        </div>
        <a mbrButtonCritter mbrBadgeCritter="4" color="warning">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8.55667 17.5C8.70296 17.7533 8.91335 17.9637 9.16671 18.11C9.42006 18.2563 9.70746 18.3333 10 18.3333C10.2926 18.3333 10.5799 18.2563 10.8333 18.11C11.0867 17.9637 11.2971 17.7533 11.4433 17.5" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.71833 12.7717C2.60947 12.891 2.53763 13.0394 2.51155 13.1988C2.48547 13.3582 2.50627 13.5217 2.57142 13.6695C2.63658 13.8173 2.74328 13.943 2.87855 14.0312C3.01381 14.1195 3.17182 14.1665 3.33333 14.1667H16.6667C16.8282 14.1667 16.9862 14.1199 17.1216 14.0318C17.2569 13.9437 17.3637 13.8181 17.4291 13.6704C17.4944 13.5227 17.5154 13.3592 17.4895 13.1998C17.4637 13.0404 17.392 12.892 17.2833 12.7725C16.175 11.63 15 10.4158 15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52679 4.06881 5 5.34058 5 6.66667C5 10.4158 3.82417 11.63 2.71833 12.7717Z" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </header>

      <section class="mb-4 gap-6 flex flex-col w-full">
        <mbr-panel-critter class="w-full" title="PANTRY STATUS">
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

        <mbr-panel-critter class="w-full" title="ACTIVE SHOPPING">
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
      </section>

      <section class="flex h-[80px] gap-3 w-full">
        <button mbrCritter class="grow-1" color="light">
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
        <button mbrCritter class="grow-1" color="light">
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

      <footer>
        <h2>Footer</h2>
      </footer>
    `
  })
}

export const MasterScreen: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        BadgeCritterComponent,
        BadgeCritterDirective,
        ButtonCritterComponent,
        CardCritterComponent,
        ChipCritterComponent,
        InputCheckboxCritterComponent,
        InputTextCritterComponent,
        InputQuantityCritterComponent,
        PanelCritterComponent
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
        font-family: Fredoka, sans-serif;
        flex-direction: column;
        justify-content: flex-start !important;
        max-width: 460px;
        background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244;
        padding: 24px;
      }`
    ],
    template: `
      <header class="flex items-center mb-6 w-full">
        <a mbrButtonCritter class="me-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M24.5 9.33333C24.4996 8.92415 24.3916 8.52228 24.1868 8.16802C23.982 7.81377 23.6877 7.51959 23.3333 7.315L15.1667 2.64833C14.812 2.44354 14.4096 2.33573 14 2.33573C13.5904 2.33573 13.188 2.44354 12.8333 2.64833L4.66667 7.315C4.31231 7.51959 4.01798 7.81377 3.81321 8.16802C3.60843 8.52228 3.50042 8.92415 3.5 9.33333V18.6667C3.50042 19.0758 3.60843 19.4777 3.81321 19.832C4.01798 20.1862 4.31231 20.4804 4.66667 20.685L12.8333 25.3517C13.188 25.5565 13.5904 25.6643 14 25.6643C14.4096 25.6643 14.812 25.5565 15.1667 25.3517L23.3333 20.685C23.6877 20.4804 23.982 20.1862 24.1868 19.832C24.3916 19.4777 24.4996 19.0758 24.5 18.6667V9.33333Z" stroke="white" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.85 8.16667L14 14L24.15 8.16667" stroke="white" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 25.6667V14" stroke="white" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <div class="flex-grow-1">
          <h1 class="m-0 text-white">FreshStack</h1>
          <p class="m-0 font-bold">Household Manager</p>
        </div>
        <a mbrButtonCritter mbrBadgeCritter="4" color="warning">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8.55667 17.5C8.70296 17.7533 8.91335 17.9637 9.16671 18.11C9.42006 18.2563 9.70746 18.3333 10 18.3333C10.2926 18.3333 10.5799 18.2563 10.8333 18.11C11.0867 17.9637 11.2971 17.7533 11.4433 17.5" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.71833 12.7717C2.60947 12.891 2.53763 13.0394 2.51155 13.1988C2.48547 13.3582 2.50627 13.5217 2.57142 13.6695C2.63658 13.8173 2.74328 13.943 2.87855 14.0312C3.01381 14.1195 3.17182 14.1665 3.33333 14.1667H16.6667C16.8282 14.1667 16.9862 14.1199 17.1216 14.0318C17.2569 13.9437 17.3637 13.8181 17.4291 13.6704C17.4944 13.5227 17.5154 13.3592 17.4895 13.1998C17.4637 13.0404 17.392 12.892 17.2833 12.7725C16.175 11.63 15 10.4158 15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52679 4.06881 5 5.34058 5 6.66667C5 10.4158 3.82417 11.63 2.71833 12.7717Z" stroke="#4A2A0C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </header>

      <section class="mb-4 gap-2 flex w-full">
        <input type="text" placeholder="Search items..." mbrCritter class="flex-grow-1"/>
        <button mbrCritter color="success">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5V19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </section>

      <section class="flex gap-2 w-full mb-2">
        <button mbrCritter color="warning">All</button>
        <button mbrCritter color="light">Food</button>
        <button mbrCritter color="light">Toiletries</button>
        <button mbrCritter color="light">Household</button>
      </section>

      <section class="w-full">
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

      </section>

      <footer>
        <h2>Footer</h2>
      </footer>
    `
  })
}
