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
    }
  }
}

export default meta;

type Story = StoryObj<FlipCardComponent>;


export const Sample: Story = {
  render: (args) => {
    const inputs = [
      args.flip_axis ? `[flip_axis]="'${args.flip_axis}'"` : '',
      args.flip_on ? `[flip_on]="'${args.flip_on}'"` : ''
    ].join(' ');
    return {
      template: `
        <lib-flip-card ${inputs}>
          <img ngProjectAs="front" src="https://placehold.co/600x400?text=Front+Side"  alt="front image"/>
          <img ngProjectAs="back" src="https://placehold.co/600x400?text=Back+Side"  alt="back image"/>
       </lib-flip-card>
      `
    }
  }
}
