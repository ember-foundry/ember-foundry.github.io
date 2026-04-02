import {Meta, moduleMetadata} from '@storybook/angular';
import {MarqueeComponent, MarqueeItemTemplateDirective} from 'component-library';

const meta: Meta<MarqueeComponent> = {
  component: MarqueeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MarqueeItemTemplateDirective
      ]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: '✅ Supports reduced motion preference'
      }
    }
  },
  tags: ['autodocs', 'carousel'],
  argTypes: {
    direction: {
      options: ['left', 'right'],
      control: { type: 'select' }
    },
    fade: {
      control: { type: 'boolean' }
    },
    pause_on_hover: {
      control: { type: 'boolean' }
    },
    speed: {
      control: { type: 'range', min: 0.1, max: 5, step: 0.1 }
    }
  }
}

export default meta;

type Story = Meta<MarqueeComponent>;

export const Sample: Story = {
  render: (args) => {
    const inputs = [
      args.direction ? `[direction]="'${args.direction}'"` : '',
      args.fade !== undefined ? `[fade]="${args.fade}"` : '',
      args.pause_on_hover !== undefined ? `[pause_on_hover]="${args.pause_on_hover}"` : '',
      args.speed !== undefined ? `[speed]="${args.speed}"` : ''
    ].join(' ')
    return {
      styles: [
        `
          :host {
            height: calc(100vh - 32px);
            background: #121734;
            display: flex;
            align-items: center;
          }
        `
      ],
      template: `
        <mbr-marquee ${inputs}>
            <ng-template mbrMarqueeTemplate>
              <div style="background-color: #01ffb3;">1</div>
              <div style="background-color: #01ffb3;">2</div>
              <div style="background-color: #01ffb3;">3</div>
              <div style="background-color: #01ffb3;">4</div>
              <div style="background-color: #01ffb3;">5</div>
              <div style="background-color: #01ffb3;">6</div>
              <div style="background-color: #01ffb3;">7</div>
              <div style="background-color: #01ffb3;">8</div>
              <div style="background-color: #01ffb3;">9</div>
              <div style="background-color: #01ffb3;">10</div>
            </ng-template>
        </mbr-marquee>
      `
    }
  }
}

export const VerticalMarquee: Story = {}
