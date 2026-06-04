import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Showcase as CheckboxShowcase} from 'component-library/components/input/input-checkbox-critter/input-checkbox-critter.stories';
import {Showcase as ButtonShowcase} from 'component-library/components/button/button-critter/button-critter.stories';
import {Showcase as BadgeShowcase} from 'component-library/components/badge/badge-critter/badge-critter.stories';
import {Showcase as PanelShowcase} from 'component-library/components/panel/panel-critter/panel-critter.stories';
import {Showcase as QuantityInputShowcase} from 'component-library/components/input/input-quantity-critter/input-quantity-critter.stories';
import {
  ButtonCritterComponent,
  InputCheckboxCritterComponent,
  PanelCritterComponent,
  InputQuantityCritterComponent, BadgeCritterDirective
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
  ...ButtonShowcase
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
  ...BadgeShowcase
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
  ...PanelShowcase
};

export const Checkboxes: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        InputCheckboxCritterComponent
      ]
    })
  ],
  ...CheckboxShowcase
};


export const QuantityInput: StoryObj<InputQuantityCritterComponent> = {
  decorators: [
    moduleMetadata({
      imports: [
        InputQuantityCritterComponent
      ]
    })
  ],
  ...QuantityInputShowcase
};
