import {Meta} from '@storybook/angular';
import {SVGCheckmarkFilledComponent} from 'component-library';

const meta: Meta<SVGCheckmarkFilledComponent> = {
  component: SVGCheckmarkFilledComponent,
  tags: ['autodocs', 'checkmark', 'svg', 'animation']
}

export default meta;

type Story = Meta<SVGCheckmarkFilledComponent>;

export const Sample: Story = {
  render: () => {
    return {
      template: `
        <div style="display:flex; justify-content: center">
          <mbr-svg-checkmark-filled />
        </div>
      `
    }
  }
};
