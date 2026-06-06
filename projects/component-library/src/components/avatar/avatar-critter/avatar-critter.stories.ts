import {Meta, StoryObj} from '@storybook/angular';
import {AvatarCritterComponent} from 'component-library';
import {COLOR_VALUES} from 'component-library/themes/critter/colors.type';

const meta: Meta<AvatarCritterComponent> = {
  component: AvatarCritterComponent,
  tags: ['autodocs', 'critter', 'avatar'],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: COLOR_VALUES
    },
    flat: {
      control: 'boolean'
    },
    name: {
      control: 'text',
      type: 'string'
    }
  }
}

export default meta;

export const Sample: StoryObj<AvatarCritterComponent> = {}

export const Showcase: StoryObj = {
  render: () => ({
    props: {
      colors: COLOR_VALUES
    },
    styles: [
      ':host{ display: inline-grid; grid-template-columns: repeat(8, auto); gap: 1em; ',
      'h4 { text-transform: capitalize; text-align: center; align-self: center; margin: 0;}',
      'mbr-avatar-critter { justify-self: center; }'
    ],
    template: `
      <span></span>
      @for(color of colors; track color){
        <h4>{{color || 'Default'}}</h4>
      }
      <h4>Normal</h4>
      @for(color of colors; track color){
        <mbr-avatar-critter [color]="color" />
      }
      <h4>Flat</h4>
      @for(color of colors; track color){
        <mbr-avatar-critter flat [color]="color" />
      }
    `
  })
}
