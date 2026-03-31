import {Meta} from '@storybook/angular';
import {CarouselComponent} from 'component-library';

const meta: Meta<CarouselComponent> = {
  component: CarouselComponent,
  tags: ['autodocs', 'carousel']
}

export default meta;

type Story = Meta<CarouselComponent>;

export const Sample: Story = {};
