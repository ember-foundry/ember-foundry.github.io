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
      `:host { background-color: #F7F7F7; }`
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
