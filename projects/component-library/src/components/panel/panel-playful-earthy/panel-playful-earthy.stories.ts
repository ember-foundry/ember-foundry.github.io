import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ButtonPlayfulEarthyComponent, PanelPlayfulEarthyComponent} from 'component-library';
import {args_to_angular_inputs} from 'component-library/helpers/storybook/args_to_angular_inputs';

const meta: Meta<PanelPlayfulEarthyComponent> = {
  component: PanelPlayfulEarthyComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonPlayfulEarthyComponent
      ]
    })
  ],
  tags: ['autodocs', 'panel', 'playful earthy'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the panel',
      defaultValue: '',
      required: true
    }
  },
  args: {
    title: 'PANTRY STATUS'
  }
};

export default meta;

export const PantryStatus: StoryObj<PanelPlayfulEarthyComponent> = {
  args: {
    title: 'PANTRY STATUS'
  },
  render:(args) => ({
    template: `
      <mbr-panel-playful-earthy ${args_to_angular_inputs(args)}>
      <mbr-button-playful-earth
        flat
        color="warning"
        size="small"
        class="me-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="24"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.516 3.00947 16.931 3.99122 18.74 5.74L21 8" />
          <path d="M21 3V8H16" />
          <path d="M21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.48395 20.9905 7.06897 20.0088 5.26 18.26L3 16" />
          <path d="M8 16H3V21" />
        </svg>
      </mbr-button-playful-earth>
      <div class="flex-grow-1">
        <h3 class="m-0 font-semibold">5 items</h3>
        <small>needs restocking</small>
      </div>
      <mbr-button-playful-earth>View</mbr-button-playful-earth>
      </mbr-panel-playful-earthy>
    `
  })
}

export const ActiveShopping: StoryObj<PanelPlayfulEarthyComponent> = {
  args: {
    title: 'ACTIVE SHOPPING'
  },
  render:(args) => ({
    template: `
      <mbr-panel-playful-earthy ${args_to_angular_inputs(args)}>
      <mbr-button-playful-earth
        flat
        color="success"
        size="small"
        class="me-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28" fill="none"
          stroke="currentColor"
          stroke-width="2.91667"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="24"
        >
          <path d="M9.33332 25.6667C9.97766 25.6667 10.5 25.1444 10.5 24.5C10.5 23.8557 9.97766 23.3334 9.33332 23.3334C8.68899 23.3334 8.16666 23.8557 8.16666 24.5C8.16666 25.1444 8.68899 25.6667 9.33332 25.6667Z" />
          <path d="M22.1667 25.6667C22.811 25.6667 23.3333 25.1444 23.3333 24.5C23.3333 23.8557 22.811 23.3334 22.1667 23.3334C21.5223 23.3334 21 23.8557 21 24.5C21 25.1444 21.5223 25.6667 22.1667 25.6667Z" />
          <path d="M2.39166 2.39172H4.725L7.82833 16.8817C7.94217 17.4124 8.23744 17.8868 8.66333 18.2232C9.08921 18.5597 9.61905 18.7371 10.1617 18.7251H21.5717C22.1027 18.7242 22.6176 18.5422 23.0312 18.2092C23.4448 17.8762 23.7325 17.412 23.8467 16.8934L25.7717 8.22506H5.97333" />
        </svg>
      </mbr-button-playful-earth>
      <div class="flex-grow-1">
        <h3 class="m-0 font-semibold">4 items</h3>
        <small>to buy right now</small>
      </div>
      <mbr-button-playful-earth color="success">Go Shop</mbr-button-playful-earth>
      </mbr-panel-playful-earthy>
    `
  })
}
