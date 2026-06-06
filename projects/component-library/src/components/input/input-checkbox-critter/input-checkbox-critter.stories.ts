import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { InputCheckboxCritterComponent, ToggleDirective } from 'component-library';

const meta: Meta<InputCheckboxCritterComponent> = {
  component: InputCheckboxCritterComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ToggleDirective
      ]
    })
  ],
  tags: ['autodocs', 'critter', 'checkbox']
};

export default meta;

export const Unchecked: StoryObj<InputCheckboxCritterComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCritter />`
  })
};

export const Checked: StoryObj<InputCheckboxCritterComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCritter [checked]="true"/>`
  })
};

export const Disabled: StoryObj<InputCheckboxCritterComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCritter disabled />`
  })
};

export const CheckedDisabled: StoryObj<InputCheckboxCritterComponent> = {
  render: (args, context) => ({
    ...context,
    template: `<input type="checkbox" mbrCritter [checked]="true" disabled/>`
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

      <input type="checkbox" mbrCritter />
      <input type="checkbox" mbrCritter [checked]="true" />
      <input type="checkbox" mbrCritter disabled />
      <input type="checkbox" mbrCritter [checked]="true" [disabled]="true" />
    `
  })
};
