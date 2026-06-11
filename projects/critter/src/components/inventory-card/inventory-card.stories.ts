import {Meta, StoryObj} from '@storybook/angular';
import {InventoryCardComponent} from 'critter';

const meta: Meta<InventoryCardComponent> = {
  component: InventoryCardComponent,
  tags: ['autodocs', 'inventory', 'card'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['out', 'low', 'stocked'],
      description: 'The status of the inventory card',
      defaultValue: 'out'
    },
    label: {
      control: 'text',
      type: 'string'
    }
  },
  args: {
    label: 'MILK'
  }
}

export default meta;

export const Sample: StoryObj<InventoryCardComponent> = {}

export const Showcase: StoryObj = {
  args: {
    label: 'MILK'
  },
  render: (args, context) => ({
    ...context,
    props: {
      statuses: [
        'stocked',
        'low',
        'out'
      ]
    },
    styles: [
      `:host { display: inline-grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;}`
    ],
    template: `
      @for(status of statuses; track status){
        <mbr-critter-inventory-card [status]="status" label="${args['label']}" />
      }
    `
  })
}
