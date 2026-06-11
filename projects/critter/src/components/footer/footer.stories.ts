import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {FooterComponent} from 'critter';
import {provideRouter} from '@angular/router';

const meta: Meta = {
  component: FooterComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    })
  ],
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs', 'footer'],
  render: (args) => ({
    props: args,
    styles: [':host { background-image: radial-gradient(circle, rgb(255, 255, 255, 0.2) 2px, transparent 2px); background-repeat: repeat; background-size: 40px 40px; background-color: #84C244; display: flex; padding: 3rem 0 0;}']
  })
}

export default meta;

export const Showcase: StoryObj<FooterComponent> = {}
