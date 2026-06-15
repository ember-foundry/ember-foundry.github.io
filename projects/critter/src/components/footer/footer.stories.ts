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
    styles: [':host { display: flex; padding: 3rem 0 0}']
  })
}

export default meta;

export const Showcase: StoryObj<FooterComponent> = {}
