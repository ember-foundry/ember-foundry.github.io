import {Meta} from '@storybook/angular';
import {SvgCheckmarkOutlineComponent} from 'component-library';

const meta: Meta<SvgCheckmarkOutlineComponent> = {
  component: SvgCheckmarkOutlineComponent,
  tags: ['autodocs', 'checkmark', 'svg', 'animated']
}

export default meta;

type Story = Meta<SvgCheckmarkOutlineComponent>;

export const Sample: Story = {
  render: () => {
    return {
      template: `
        <div style="display:flex; justify-content:center">
          <mbr-svg-checkmark-outline style="width: 200px" />
        </div>
      `
    }
  }
};
