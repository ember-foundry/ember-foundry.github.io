import {Meta, StoryObj} from '@storybook/angular';
import {AvatarComponent, COLOR_VALUES} from 'critter';

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  tags: ['autodocs', 'avatar'],
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

export const Sample: StoryObj<AvatarComponent> = {}

export const Showcase: StoryObj = {
  render: () => ({
    props: {
      colors: COLOR_VALUES
    },
    styles: [
      ':host{ display: inline-grid; grid-template-columns: repeat(8, auto); gap: 1em; ',
      'h4 { text-transform: capitalize; text-align: center; align-self: center; margin: 0;}',
      'mbr-avatar { justify-self: center; }'
    ],
    template: `
      <span></span>
      @for(color of colors; track color){
        <h4>{{color || 'Default'}}</h4>
      }
      <h4>Normal</h4>
      @for(color of colors; track color){
        <mbr-avatar [color]="color" />
      }
      <h4>Flat</h4>
      @for(color of colors; track color){
        <mbr-avatar flat [color]="color" />
      }
    `
  })
}
