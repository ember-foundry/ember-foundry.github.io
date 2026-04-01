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
    gradient_mask: {
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
      args.speed ? `[speed]="${args.speed}"` : ''
    ].join(' ')
    return {
      template: `
        <mbr-marquee
          ${inputs}
          [gradient_mask]="${args.gradient_mask}"
          [pause_on_hover]="${args.pause_on_hover}"
        >
            <ng-template mbrMarqueeTemplate>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </ng-template>
        </mbr-marquee>
      `
    }
  }
}
