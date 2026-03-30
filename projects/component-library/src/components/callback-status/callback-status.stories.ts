import {Meta} from '@storybook/angular';
import {CallbackStatusComponent} from 'component-library';

const meta: Meta<CallbackStatusComponent> = {
  component: CallbackStatusComponent,
  tags: ['autodocs', 'callback', 'status'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'processing']
    },
    title_initial: {
      control: 'text'
    },
    title_success: {
      control: 'text'
    },
    title_error: {
      control: 'text'
    },
    description_initial: {
      control: 'text'
    },
    description_success: {
      control: 'text'
    },
    description_error: {
      control: 'text'
    }
  },
  args: {
    status: 'processing'
  }
}

export default meta;

type Story = Meta<CallbackStatusComponent>;

export const Sample: Story = {};


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
