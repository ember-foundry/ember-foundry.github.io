import {Meta, StoryObj} from '@storybook/angular';
import {PricePlanComponent} from './price-plan.component';
import {array_to_angular_input} from '../../helpers/storybook/array_to_angular_input';

const meta: Meta<PricePlanComponent> = {
  parameters: {
    layout: 'fullscreen'
  },
  component: PricePlanComponent,
  tags: ['autodocs', 'price', 'plan', 'matchdayexperience'],
  argTypes: {
    popular: {
      control: 'boolean',
      description: 'Whether the price plan is popular or not',
      table: {
        type: {summary: 'boolean'}
      }
    },
    selected: {
      control: 'boolean',
      description: 'Whether the plan is select or not',
      table: {
        type: {summary: 'boolean'}
      }
    },
    title: {
      control: 'text',
      description: 'The title of the price plan',
      table: {
        type: {summary: 'string'}
      }
    },
    price: {
      control: 'number',
      min: 0,
      description: 'The title of the price plan',
      table: {
        type: {summary: 'string'}
      }
    },
    description: {
      control: 'text',
      description: 'The description of the price plan',
      table: {
        type: {summary: 'string'}
      }
    },
    features: {
      control: 'object',
      description: 'The features available for this price plan',
      table: {
        type: {summary: 'string[]'}
      }
    },
    cta_text: {
      control: 'text',
      description: 'The text of the button',
      table: {
        type: {summary: 'string'}
      }
    }
  },
  args: {
    popular: true,
    selected: false,
    title: 'Essentials',
    price: 250,
    description: 'Ultimate luxury with bespoke service',
    cta_text: 'Select Package',
    features: [
      'Private suite hospitality',
      'Luxury hotel / private residence',
      'Personal chauffeur',
      'Dedicated concierge team',
      'Bespoke gifting',
      'Full itinerary planning',
      'VIP meet & greet',
      'Exclusive experiences'
    ]
  }
};

export default meta;

type Story = StoryObj<PricePlanComponent>;

export const Sample: Story = {
  render: (args) => ({
    props: args,
    styles: [
      `:host {
          align-items: center;
          background: #1A1A1A;
          display: flex;
          flex-direction: row;
          gap: 2rem;
          justify-content: center;
          padding: 2rem 0;
          width: 100%;
        }
      `
    ]
  })
};

export const ThreeDifferentPackages: Story = {
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => {
    return {
      props: args,
      template: `
        <style>
          :host {
            align-items: center;
            background: #1A1A1A;
            display: flex;
            flex-direction: row;
            gap: 2rem;
            justify-content: center;
            padding: 2rem 0;
            width: 100%;
          }
        </style>
        <mbr-price-plan
          title="${args.title}"
          [price]="${args.price}"
          description="${args.description}"
          cta_text="${args.cta_text}"
          [features]="${array_to_angular_input(args.features)}"
        />
        <mbr-price-plan
          [popular]="true"
          title="Premier"
          [price]="750"
          description="Executive experience with luxury touches"
          cta_text="${args.cta_text}"
          [features]="${array_to_angular_input(args.features)}"
        />
        <mbr-price-plan
          [selected]="true"
          title="Legacy"
          [price]="2500"
          description="Ultimate luxury with bespoke service"
          cta_text="${args.cta_text}"
          [features]="${array_to_angular_input(args.features)}"
        />
      `
    }
  }
};
