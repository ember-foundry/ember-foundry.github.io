import {Meta, StoryObj} from '@storybook/angular';
import {FlexFlowComponent} from './flex-flow.component';

const meta: Meta<FlexFlowComponent> = {
  component: FlexFlowComponent,
  tags: ['calculator'],
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => ({
    props: args,
    styles: [
      `
        :host {
         --grid-color-x: #0000001a;
         --grid-color-y: var(--grid-color-x);
         --grid-line-thickness: 1px;
         --grid-size: calc(100vw / 12);
         background-repeat: repeat;
         background-image: radial-gradient(white, transparent), linear-gradient(90deg, transparent 0, transparent calc(var(--grid-size) - var(--grid-line-thickness)), var(--grid-color-y) calc(var(--grid-size) - var(--grid-line-thickness)), var(--grid-color-y) var(--grid-size)), linear-gradient(180deg, transparent 0, transparent calc(var(--grid-size) - var(--grid-line-thickness)), var(--grid-color-x) calc(var(--grid-size) - var(--grid-line-thickness)), var(--grid-color-x) var(--grid-size));
         background-size: 100%, var(--grid-size) 100%, 100% var(--grid-size);
        }
      `
    ]
  })
}

export default meta;

export const Sample: StoryObj<FlexFlowComponent> = {}
