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
import {
  LucideBell,
  LucideBox,
  LucideGripVertical, LucideList,
  LucidePlus,
  LucideRefreshCw,
  LucideShoppingCart, LucideTrash2, LucideUsers
} from '@lucide/angular';

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
  LucideGripVertical,
  LucideList,
  LucidePlus,
  LucideRefreshCw,
  LucideShoppingCart,
  LucideTrash2,
  LucideUsers,
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
    template: `<mbr-critter-footer />`
  })
};

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
    template: `<mbr-critter-header />`
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

const screen_host_styles = [
`:host {
  display: flex;
  color: rgba(74, 42, 12, 0.80);
  flex-direction: column;
  max-width: 460px;
  min-height: 100dvh;
  margin: auto;
}`
];

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
    styles: screen_host_styles,
    template: `
      <mbr-critter-header mbrSticky stickyTopOffset="0px" />
      <main class="p-4 flex flex-col flex-1">
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
          <svg lucideList [size]="24" [strokeWidth]="2.5" />
          <span>Master List</span>
        </button>
        <button mbrCritterButton class="grow-1" color="light">
          <svg lucideUsers [size]="24" [strokeWidth]="2.5" />
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
    styles: screen_host_styles,
    template: `
      <mbr-critter-header mbrSticky stickyTopOffset="0px" />
      <main class="p-4 flex flex-col flex-1">
        <section class="mb-4 gap-2 flex w-full">
          <input type="text" placeholder="Search items..." mbrCritterInput class="flex-grow-1"/>
          <button mbrCritterButton color="success">
            <svg lucidePlus [size]="24" [strokeWidth]="3" />
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
                    <svg lucidePlus [size]="14" [strokeWidth]="3" />
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
    styles: screen_host_styles,
    template: `
      <mbr-critter-header mbrSticky stickyTopOffset="0px" />
      <main class="p-4 flex flex-col flex-1">
        <button mbrCritterButton color="success" class="w-full mb-3">
          <svg lucidePlus [size]="20" [strokeWidth]="2.5" />
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
                <svg lucideTrash2 [size]="20" [strokeWidth]="2.5" color="#E84A3B"/>
                <svg lucideGripVertical [size]="20" [strokeWidth]="2.5" />
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
                <svg lucideTrash2 [size]="20" [strokeWidth]="2.5" color="#E84A3B"/>
                <svg lucideGripVertical [size]="20" [strokeWidth]="2.5" />
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
                <svg lucideTrash2 [size]="20" [strokeWidth]="2.5" color="#E84A3B"/>
                <svg lucideGripVertical [size]="20" [strokeWidth]="2.5" />
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
    styles: screen_host_styles,
    template: `
      <mbr-critter-header mbrSticky stickyTopOffset="0px" />
      <main class="p-4 flex flex-col flex-1">
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
    styles: screen_host_styles,
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
