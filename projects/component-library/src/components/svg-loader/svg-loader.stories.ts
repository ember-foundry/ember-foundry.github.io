import {Meta} from '@storybook/angular';
import {SVGLoaderComponent} from 'component-library';

const meta: Meta<SVGLoaderComponent> = {
  component: SVGLoaderComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A collection of SVG Loaders. Inspired by <a href="https://samherbert.net/svg-loaders/">Sam Herbert's Loaders</a>`
      }
    }
  },
  tags: ['autodocs', 'loader', 'svg', 'animation'],
  argTypes: {
    variant: {
      options: [
        'kfc',
        'ring-resize',
        'three-dots'
      ],
      control: {type: 'select'},
      defaultValue: {summary: 'three-dots'}
    }
  },
  args: {
    variant: 'three-dots'
  }
}

export default meta;

type Story = Meta<SVGLoaderComponent>;

export const KFC: Story = {
  args: {
    variant: 'kfc'
  }
};

export const RingResize: Story = {
  args: {
    variant: 'ring-resize'
  },
  parameters: {
    docs: {
      description: {
        story: `Inspired by <a href="https://magecdn.com/tools/svg-loaders">Mage CDN's Loaders</a>`
      }
    }
  }
};

export const ThreeDots: Story = {};
