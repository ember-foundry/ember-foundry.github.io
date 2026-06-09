import {Meta, StoryObj} from '@storybook/angular';
import {HeaderComponent} from 'critter';

const meta: Meta = {
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs', 'header']
};

export default meta;

export const Showcase: StoryObj<HeaderComponent> = {
  render: () => ({
    styles: [':host { background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244; display: flex; padding: 1rem 1rem 3rem;}']
  })
};
