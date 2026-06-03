import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Showcase as CheckboxShowcase} from 'component-library/components/checkbox/checkbox-playful-earthy/checkbox-playful-earthy.stories';
import {Showcase as ButtonShowcase} from 'component-library/components/button/button-playful-earthy/button-playful-earthy.stories';
import {Showcase as PanelShowcase} from 'component-library/components/panel/panel-playful-earthy/panel-playful-earthy.stories';
import {Showcase as QuantityInputShowcase} from 'component-library/components/input/input-quantity-playful-earthy/input-quantity-playful-earthy.stories';
import {
  ButtonPlayfulEarthyComponent,
  CheckboxPlayfulEarthyComponent,
  PanelPlayfulEarthyComponent,
  InputQuantityPlayfulEarthyComponent
} from 'component-library';

const meta: Meta = {
  tags: ['autodocs', 'playful earthy']
};

export default meta;

export const Buttons: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        ButtonPlayfulEarthyComponent
      ]
    })
  ],
  ...ButtonShowcase
};

export const Panels: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        PanelPlayfulEarthyComponent,
        ButtonPlayfulEarthyComponent
      ]
    })
  ],
  ...PanelShowcase
};

export const Checkboxes: StoryObj = {
  decorators: [
    moduleMetadata({
      imports: [
        CheckboxPlayfulEarthyComponent
      ]
    })
  ],
  ...CheckboxShowcase
};


export const QuantityInput: StoryObj<InputQuantityPlayfulEarthyComponent> = {
  decorators: [
    moduleMetadata({
      imports: [
        InputQuantityPlayfulEarthyComponent
      ]
    })
  ],
  ...QuantityInputShowcase
};
