import type { Meta, StoryObj } from '@storybook/angular';
import { GoogleTicketComponent } from 'component-library';

const meta: Meta<GoogleTicketComponent> = {
  component: GoogleTicketComponent,
  parameters: {
    docs: {
      description: {
        component: 'As seen on <a href="https://pixelsuperfansexperiences.withgoogle.com/" target="_blank">Google Pixelsuperfans Experiences</a>'
      }
    }
  },
  render: (args) => ({
    props: args,
    styles: [
      `
        :host {
          background: #efebe5;
          padding: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `
    ]
  }),
  tags: ['autodocs']
}

export default meta;

type Story = StoryObj<GoogleTicketComponent>;

export const Sample: Story = {};
