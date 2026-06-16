import {Meta, moduleMetadata} from '@storybook/angular';
import {CallbackStatusComponent} from './callback-status.component';
import {SVGCheckmarkCircleFilledComponent} from '../svg-checkmark-circle-filled/svg-checkmark-circle-filled.component';
import {LucideSmile} from '@lucide/angular';

const meta: Meta<CallbackStatusComponent> = {
  component: CallbackStatusComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SVGCheckmarkCircleFilledComponent
      ]
    })
  ],
  tags: ['autodocs', 'callback', 'status', 'card'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'processing']
    }
  },
  args: {
    status: 'processing'
  }
}

export default meta;

type Story = Meta<CallbackStatusComponent>;

export const Sample: Story = {};

export const SuccessfulPayment: Story = {
  args: {
    status: 'success'
  }
};
export const FailedPayment: Story = {
  args: {
    status: 'error'
  }
};

export const CustomTitles: Story = {
  render: () => {
    return {
      template: `
        <div style="margin: 1rem 0; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 1fr; grid-column-gap: 1rem; grid-row-gap: 0">
          <mbr-callback-status>
            <h2 ngProjectAs="title-processing">Custom Processing Title</h2>
            <p ngProjectAs="description-processing">Custom Processing Description</p>
          </mbr-callback-status>
          <mbr-callback-status status="success">
            <h2 ngProjectAs="title-success">Custom Success Title</h2>
            <p ngProjectAs="description-success">Custom Success Description</p>
          </mbr-callback-status>
          <mbr-callback-status status="error">
            <h2 ngProjectAs="title-error">Custom Error Title</h2>
            <p ngProjectAs="description-error">Custom Error Description</p>
          </mbr-callback-status>
        </div>
      `
    }
  }
};

export const CustomSuccessIcon: Story = {
  decorators: [
    moduleMetadata({
      imports: [
        LucideSmile
      ]
    })
  ],
  render: () => {
    return {
      template: `
          <mbr-callback-status status="success">
            <svg lucideSmile ngProjectAs="icon-success" [size]="80"/>
          </mbr-callback-status>
      `
    }
  }
};

export const AllThree: Story = {
  render: () => {
    return {
      template: `
        <div style="margin: 1rem 0; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 1fr; grid-column-gap: 1rem; grid-row-gap: 0">
          <mbr-callback-status />
          <mbr-callback-status status="success"/>
          <mbr-callback-status status="error"/>
        </div>
      `
    }
  }
};
