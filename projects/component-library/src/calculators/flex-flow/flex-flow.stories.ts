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
         animation: move-background-left 40s linear infinite;
         background-repeat: repeat;
         background-image: radial-gradient(white, transparent), linear-gradient(90deg, transparent 0, transparent calc(var(--grid-size) - var(--grid-line-thickness)), var(--grid-color-y) calc(var(--grid-size) - var(--grid-line-thickness)), var(--grid-color-y) var(--grid-size)), linear-gradient(180deg, transparent 0, transparent calc(var(--grid-size) - var(--grid-line-thickness)), var(--grid-color-x) calc(var(--grid-size) - var(--grid-line-thickness)), var(--grid-color-x) var(--grid-size));
         background-size: 100%, var(--grid-size) 100%, 100% var(--grid-size);
        }
        @keyframes move-background-left {
          from {
            background-position-x: 0;
          }
          to {
            background-position-x: -100%;
          }
        }
      `
    ]
  })
}

export default meta;

export const Sample: StoryObj<FlexFlowComponent> = {}
