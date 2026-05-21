import {Meta, StoryObj} from '@storybook/angular';
import {FlexFlowComponent} from './flex-flow.component';

const meta: Meta<FlexFlowComponent> = {
  component: FlexFlowComponent,
  tags: ['calculator'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta;

export const Sample: StoryObj<FlexFlowComponent> = {}
