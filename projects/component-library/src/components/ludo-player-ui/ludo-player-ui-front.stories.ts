import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {FlipCardComponent, LudoPlayerUIFrontComponent} from 'component-library';

const meta: Meta<LudoPlayerUIFrontComponent> = {
  component: LudoPlayerUIFrontComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FlipCardComponent
      ]
    })
  ],
  tags: ['autodocs','ludo','player','game','ui'],
  argTypes: {
    last_roll: {
      type: 'number',
      min: 1,
      max: 6,
      step: 1
    }
  },
  args: {
    name: 'Kim',
    color: 'red',
    is_my_turn: false,
    avatar: 'http://localhost:4200/assets/images/kim.png'
  }
}

export default meta;

type Story = StoryObj<LudoPlayerUIFrontComponent>;

export const Sample: Story = {}

export const FlippingLudoUI: Story = {
  render: (args) => {
    const inputs = [
      args.name ? `[name]="'${args.name}'"` : '',
      args.color ? `[color]="'${args.color}'"` : '',
      args.avatar ? `[avatar]="'${args.avatar}'"` : ''
    ].join(' ');
    return {
      template: `
        <lib-flip-card >
            <lib-ludo-player-ui ngProjectAs="front" ${inputs}/>
            <lib-ludo-player-ui ngProjectAs="back" [name]="'John Doe'" [color]="'blue'" [avatar]="'http://localhost:4200/assets/images/ahmed.png'" />
       </lib-flip-card>
      `
    }
  }
}
