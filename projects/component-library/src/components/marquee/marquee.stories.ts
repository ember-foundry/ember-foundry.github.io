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
  parameters: {
    backgrounds: {
      options: {
        red: { name: 'Red', value: '#f00' },
        green: { name: 'Green', value: '#0f0' },
        blue: { name: 'Blue', value: '#00f' },
      },
    },
  },
  render: (args) => {

    const inputs = [
      args.direction ? `[direction]="'${args.direction}'"` : '',
      args.fade !== undefined ? `[fade]="${args.fade}"` : '',
      args.pause_on_hover !== undefined ? `[pause_on_hover]="${args.pause_on_hover}"` : '',
      args.speed !== undefined ? `[speed]="${args.speed}"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-marquee ${inputs}>
            <ng-template mbrMarqueeTemplate>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
            </ng-template>
        </mbr-marquee>
      `
    }
  }
}

export const VerticalMarquee: Story = {}
