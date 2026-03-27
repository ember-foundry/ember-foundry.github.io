import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {PlayerSelectComponent} from 'component-library';

const meta: Meta<PlayerSelectComponent> = {
  component: PlayerSelectComponent,
  // decorators: [
  //   moduleMetadata({
  //     imports: [
  //       PlayerSelectComponent
  //     ]
  //   })
  // ],
  tags: ['autodocs','player','player select','game','ui'],
  // argTypes: {
  //   last_roll: {
  //     type: 'number',
  //     min: 1,
  //     max: 6,
  //     step: 1
  //   }
  // },
  // args: {
  //   name: 'Kim',
  //   color: 'red',
  //   is_my_turn: false,
  //   avatar: 'http://localhost:4200/assets/images/kim.png'
  // }
}

export default meta;

type Story = StoryObj<PlayerSelectComponent>;

export const Sample: Story = {}

