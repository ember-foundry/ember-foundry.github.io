import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ToggleDirective} from 'component-library';
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
    template: `<input type="checkbox" mbrCheckbox />`
  })
};

export const Checked: StoryObj<CheckboxComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCheckbox [checked]="true"/>`
  })
};

export const Disabled: StoryObj<CheckboxComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCheckbox disabled />`
  })
};

export const CheckedDisabled: StoryObj<CheckboxComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCheckbox [checked]="true" disabled/>`
  })
};

export const Showcase: StoryObj = {
  render: (args, context) => ({
    ...context, // Spreads global decorator imports safely into this dense template layout
    styles: [
      ':host{ display: inline-grid; grid-template-columns: repeat(4, auto); gap: 1em; ',
      'h4 { text-transform: capitalize; text-align: center; }',
      'input[type="checkbox"] { justify-self: center; }'
    ],
    template: `
      <h4>Unchecked</h4><h4>Checked</h4><h4>Disabled</h4><h4>Disabled Checked</h4>

      <input type="checkbox" mbrCheckbox />
      <input type="checkbox" mbrCheckbox [checked]="true" />
      <input type="checkbox" mbrCheckbox disabled />
      <input type="checkbox" mbrCheckbox [checked]="true" [disabled]="true" />
    `
  })
};
