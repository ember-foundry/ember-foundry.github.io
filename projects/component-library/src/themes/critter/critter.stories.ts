import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Showcase as CheckboxShowcase} from 'component-library/components/input/input-checkbox-critter/input-checkbox-critter.stories';
import {Showcase as ButtonShowcase} from 'component-library/components/button/button-critter/button-critter.stories';
import {Showcase as BadgeShowcase} from 'component-library/components/badge/badge-critter/badge-critter.stories';
import {Showcase as ChipShowcase} from 'component-library/components/chip/chip-critter/chip-critter.stories';
import {Showcase as PanelShowcase} from 'component-library/components/panel/panel-critter/panel-critter.stories';
import {Showcase as QuantityInputShowcase} from 'component-library/components/input/input-quantity-critter/input-quantity-critter.stories';
import {Showcase as AvatarShowcase} from 'component-library/components/avatar/avatar-critter/avatar-critter.stories';
import {
  ButtonCritterComponent,
  InputCheckboxCritterComponent,
  PanelCritterComponent,
  InputQuantityCritterComponent, BadgeCritterDirective, ChipCritterComponent, AvatarCritterComponent
} from 'component-library';
import {BadgeCritterComponent} from 'component-library/components/badge/badge-critter/badge-critter.component';

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
  decorators: [
    moduleMetadata({
      imports: [
        PanelCritterComponent,
        ButtonCritterComponent
      ]
    })
  ],
  ...PanelShowcase,
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
