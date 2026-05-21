import {Meta, StoryObj} from '@storybook/angular';
import {DragAndDropComponent} from 'component-library';

const meta: Meta<DragAndDropComponent> = {
  component: DragAndDropComponent,
  tags: ['drag-n-drop', 'file'],
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => ({
    props: args,
    styles: [
      `:host {
        background-color: #F7F7F7;
        /* https://uiverse.io/kennyotsu-monochromia/spotty-cheetah-65 */
        background-image: radial-gradient(#dddada87 2px, transparent 0);
        background-size: 30px 30px;
        background-position: -5px -5px;
      }`
    ]
  })
}

export default meta;

type Story = StoryObj<DragAndDropComponent>;

export const NatashaDragAndDrop: Story = {
  name: 'Natasha\'s Drag and Drop',
  parameters: {
    docs: {
      description: {
        story: 'This is a drag and drop component created by Natasha Hinter'
      }
    }
  }
}
