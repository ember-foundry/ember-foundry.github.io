import {Meta, StoryObj} from '@storybook/angular';
import {InventoryCardCritterComponent} from 'component-library';

const meta: Meta<InventoryCardCritterComponent> = {
  component: InventoryCardCritterComponent,
  tags: ['autodocs', 'critter', 'inventory', 'card'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['out', 'low', 'stocked'],
      description: 'The status of the critter inventory card',
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

export const Sample: StoryObj<InventoryCardCritterComponent> = {}

export const Showcase: StoryObj = {
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
        <mbr-inventory-card-critter [status]="status" label="${args['label']}" />
      }
    `
  })
}
