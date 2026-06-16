import type { Meta, StoryObj } from '@storybook/angular';
import {WhatsappButtonComponent} from './whatsapp-button.component';

const meta: Meta<WhatsappButtonComponent> = {
  component: WhatsappButtonComponent,
  parameters: {
    docs: {
      description: {
        component: 'As seen on <a href="https://faq.whatsapp.com/5913398998672934" target="_blank">WhatsApp Documentation</a>'
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  },
  // args: {
  //   size: 'la'
  // },
  tags: ['autodocs', 'button', 'whatsapp']
}

export default meta;

export const Showcase: StoryObj<WhatsappButtonComponent> = {}
