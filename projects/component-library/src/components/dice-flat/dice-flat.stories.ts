import {Meta, StoryObj} from '@storybook/angular';
import {DiceFlatComponent} from 'component-library';

const meta: Meta<DiceFlatComponent> = {
  component: DiceFlatComponent,
  tags: ['autodocs','dice','svg'],
  argTypes: {
    size: {
      type: 'number',
      min: 0
    },
    value: {
      type: 'number',
      min: 1,
      max: 6,
      step: 1
    }
  },
  args: {
    size: 192,
    value: 6
  }
}

export default meta;

type Story = StoryObj<DiceFlatComponent>;

export const Sample: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="${args.size}"` : '',
      args.value ? `[value]="${args.value}"` : ''
    ].join(' ')
    const template = `
      <div style="width: 400px; aspect-ratio: 1">
        <mbr-dice-flat ${inputs} />
      </div>
    `;
    return {
      template: template
    };
  }
}

export const InheritsColor: Story = {
  render: (args) => {
    const inputs = [
      args.size ? `[size]="${args.size}"` : '',
      args.value ? `[value]="${args.value}"` : ''
    ].join(' ')
    const template = `
      <div style="width: 400px; aspect-ratio: 1; color: gray">
        <mbr-dice-flat ${inputs} />
      </div>
    `;
    return {
      template: template
    };
  }
}
