import {Meta, StoryObj} from '@storybook/angular';
import {MBRPlayerSelectComponent} from 'component-library';

const meta: Meta<MBRPlayerSelectComponent> = {
  component: MBRPlayerSelectComponent,
  tags: ['autodocs','player','player select','game','ui'],
  args: {
    players: [
      {
        id: '0',
        color: 'rgba(229, 57, 53, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-rory-transparent.png'
      },
      {
        id: '1',
        color: 'rgba(251, 188, 5, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-ahmed-transparent.png'
      },
      {
        id: '2',
        color: 'rgba(66, 134, 244, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-kim-transparent.png'
      },
      {
        id: '3',
        color: 'rgba(52, 168, 83, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-tumi-transparent.png'
      }
    ]
  }
}

export default meta;

type Story = StoryObj<MBRPlayerSelectComponent>;

export const Sample: Story = {}

export const WithSecondPlayerInactive: Story = {
  args: {
    players: [
      {
        id: '0',
        color: 'rgba(229, 57, 53, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-rory-transparent.png'
      },
      {
        id: '1',
        color: 'rgba(251, 188, 5, 0.7)',
        state: 'inactive',
        image_url: 'http://localhost:4200/assets/images/pose-ahmed-transparent.png'
      },
      {
        id: '2',
        color: 'rgba(66, 134, 244, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-kim-transparent.png'
      },
      {
        id: '3',
        color: 'rgba(52, 168, 83, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-tumi-transparent.png'
      }
    ]
  }
}

export const WithThirdPlayerAsCPU: Story = {
  args: {
    players: [
      {
        id: '0',
        color: 'rgba(229, 57, 53, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-rory-transparent.png'
      },
      {
        id: '1',
        color: 'rgba(251, 188, 5, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-ahmed-transparent.png'
      },
      {
        id: '2',
        color: 'rgba(66, 134, 244, 0.7)',
        state: 'cpu',
        image_url: 'http://localhost:4200/assets/images/pose-kim-transparent.png'
      },
      {
        id: '3',
        color: 'rgba(52, 168, 83, 0.7)',
        state: 'human',
        image_url: 'http://localhost:4200/assets/images/pose-tumi-transparent.png'
      }
    ]
  }
}

