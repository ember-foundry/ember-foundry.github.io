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
      ':host{ display: inline-grid; grid-template-columns: repeat(6, auto); gap: 1em; ',
      'h4 { text-transform: capitalize; text-align: center; }',
      'mbr-avatar-critter { justify-self: center; }'
    ],
    template: `
      @for(color of colors; track color){
        <h4>{{color || 'Default'}}</h4>
      }
      @for(color of colors; track color){
        <mbr-avatar-critter [color]="color" />
      }
    `
  })
}
