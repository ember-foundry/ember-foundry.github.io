import {Meta} from '@storybook/angular';
import {SVGCheckmarkOutlineComponent} from 'component-library';

const meta: Meta<SVGCheckmarkOutlineComponent> = {
  component: SVGCheckmarkOutlineComponent,
  tags: ['autodocs', 'checkmark', 'svg', 'animated']
}

export default meta;

type Story = Meta<SVGCheckmarkOutlineComponent>;

export const Sample: Story = {
  render: () => {
    return {
      template: `
        <div style="display:flex; justify-content:center">
          <mbr-svg-checkmark-outline />
        </div>
      `
    }
  }
};
