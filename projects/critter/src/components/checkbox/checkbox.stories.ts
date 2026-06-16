import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ToggleDirective} from '@ember-foundry/component-library';
import {CheckboxComponent} from 'critter';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ToggleDirective
      ]
    })
  ],
  tags: ['autodocs', 'checkbox']
};

export default meta;

export const Unchecked: StoryObj<CheckboxComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCritterCheckbox />`
  })
};

export const Checked: StoryObj<CheckboxComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCritterCheckbox [checked]="true"/>`
  })
};

export const Disabled: StoryObj<CheckboxComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCritterCheckbox disabled />`
  })
};

export const CheckedDisabled: StoryObj<CheckboxComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCritterCheckbox [checked]="true" disabled/>`
  })
};

export const Showcase: StoryObj = {
  render: (args, context) => ({
    ...context, // Spreads global decorator imports safely into this dense template layout
    styles: [
      ':host{ display: inline-grid; grid-template-columns: repeat(4, auto); gap: 1em; ',
      'input[type="checkbox"] { justify-self: center; }'
    ],
    template: `
      <span>Unchecked</span><span>Checked</span><span>Disabled</span><span>Disabled Checked</span>

      <input type="checkbox" mbrCritterCheckbox />
      <input type="checkbox" mbrCritterCheckbox [checked]="true" />
      <input type="checkbox" mbrCritterCheckbox disabled />
      <input type="checkbox" mbrCritterCheckbox [checked]="true" [disabled]="true" />
    `
  })
};
