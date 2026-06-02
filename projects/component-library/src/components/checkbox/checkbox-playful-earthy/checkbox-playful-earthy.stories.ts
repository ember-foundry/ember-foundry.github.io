import {Meta, StoryObj} from '@storybook/angular';
import {CheckboxPlayfulEarthyComponent} from 'component-library';

const meta: Meta<CheckboxPlayfulEarthyComponent> = {
  component: CheckboxPlayfulEarthyComponent,
  tags: ['autodocs', 'checkbox', 'playful earthy']
}

export default meta;

export const StandardCheckbox: StoryObj<CheckboxPlayfulEarthyComponent> = {
  render: () => ({
    template: `
      <input type="checkbox" mbrPlayfulEarthy />
    `
  })
}

export const CustomElement: StoryObj<CheckboxPlayfulEarthyComponent> = {
  render: () => ({
    template: `
      <mbr-checkbox-playful-earthy />
    `
  })
}

export const StandardCheckboxPreChecked: StoryObj<CheckboxPlayfulEarthyComponent> = {
  render: () => ({
    template: `
      <input type="checkbox" mbrPlayfulEarthy checked/>
    `
  })
}

export const CustomElementPreChecked: StoryObj<CheckboxPlayfulEarthyComponent> = {
  render: () => ({
    template: `
      <mbr-checkbox-playful-earthy [active]="true"/>
    `
  })
}

export const StandardCheckboxDisabled: StoryObj<CheckboxPlayfulEarthyComponent> = {
  render: () => ({
    template: `
      <input type="checkbox" mbrPlayfulEarthy disabled />
    `
  })
}

export const CustomElementDisabled: StoryObj<CheckboxPlayfulEarthyComponent> = {
  render: () => ({
    template: `
      <mbr-checkbox-playful-earthy [disabled]="true" />
    `
  })
}

export const StandardCheckboxPreCheckedDisabled: StoryObj<CheckboxPlayfulEarthyComponent> = {
  render: () => ({
    template: `
      <input type="checkbox" mbrPlayfulEarthy checked disabled/>
    `
  })
}

export const CustomElementPreCheckedDisabled: StoryObj<CheckboxPlayfulEarthyComponent> = {
  render: () => ({
    template: `
      <mbr-checkbox-playful-earthy [active]="true" disabled/>
    `
  })
}

