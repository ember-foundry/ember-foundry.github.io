import {Meta, StoryObj} from '@storybook/angular';
import {FlipCardComponent} from 'component-library';

const meta: Meta<FlipCardComponent> = {
  component: FlipCardComponent,
  tags: ['autodocs','flip','card','w3schools'],
  argTypes: {
    flip_axis: {
      description: 'Flip axis for the card (default: y)',
      type: 'string',
      control: 'select',
      options: ['x', 'y']
    },
    flip_on: {
      description: 'Flip action (default: hover)',
      type: 'string',
      control: 'select',
      options: ['hover', 'click']
    },
    horizontal_alignment: {
      description: 'Useful when the front or back are not the same size (default: center)',
      type: 'string',
      control: 'select',
      options: ['center', 'none']
    },
    vertical_alignment: {
      description: 'Useful when the front or back are not the same size (default: center)',
      type: 'string',
      control: 'select',
      options: ['center', 'none']
    }
  }
}

export default meta;

type Story = StoryObj<FlipCardComponent>;

export const TwoImagesSameSize: Story = {
  name: 'With 2 Images of equal size',
  render: (args) => {
    const inputs = [
      args.horizontal_alignment ? `[align_sides]="'${args.horizontal_alignment}'"` : '',
      args.flip_axis ? `[flip_axis]="'${args.flip_axis}'"` : '',
      args.flip_on ? `[flip_on]="'${args.flip_on}'"` : ''
    ].join(' ');
    return {
      template: `
        <mbr-flip-card ${inputs}>
          <img ngProjectAs="front" src="https://placehold.co/200x200?text=Front+(200x200)"  alt="front image"/>
          <img ngProjectAs="back" src="https://placehold.co/200x200?text=Back+(200x200)"  alt="back image"/>
       </mbr-flip-card>
      `
    }
  }
}

export const FrontSideLarger: Story = {
  name: 'With Front Image larger than Back Image',
  render: (args) => {
    const inputs = [
      args.horizontal_alignment ? `[align_sides]="'${args.horizontal_alignment}'"` : '',
      args.flip_axis ? `[flip_axis]="'${args.flip_axis}'"` : '',
      args.flip_on ? `[flip_on]="'${args.flip_on}'"` : ''
    ].join(' ');
    return {
      template: `
        <mbr-flip-card ${inputs}>
          <img ngProjectAs="front" src="https://placehold.co/200x200?text=Front+(200x200)"  alt="front image"/>
          <img ngProjectAs="back" src="https://placehold.co/150x150?text=Back+(150x150)"  alt="back image"/>
       </mbr-flip-card>
      `
    }
  }
}

export const BackSideLarger: Story = {
  name: 'With Back Image larger than Front Image',
  render: (args) => {
    const inputs = [
      args.horizontal_alignment ? `[horizontal_alignment]="'${args.horizontal_alignment}'"` : '',
      args.vertical_alignment ? `[vertical_alignment]="'${args.vertical_alignment}'"` : '',
      args.flip_axis ? `[flip_axis]="'${args.flip_axis}'"` : '',
      args.flip_on ? `[flip_on]="'${args.flip_on}'"` : ''
    ].join(' ');
    return {
      template: `
        <mbr-flip-card ${inputs}>
          <img ngProjectAs="front" src="https://placehold.co/150x150?text=Front+(150x150)"  alt="front image"/>
          <img ngProjectAs="back" src="https://placehold.co/600x200?text=Back+(200x200)"  alt="back image"/>
       </mbr-flip-card>
      `
    }
  }
}
