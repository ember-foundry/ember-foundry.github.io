import type {Meta, StoryObj} from '@storybook/angular';
import {VuexyThemeCustomizerTriggerComponent} from 'component-library';

const meta: Meta<VuexyThemeCustomizerTriggerComponent> = {
  component: VuexyThemeCustomizerTriggerComponent,
  tags: ['autodocs', 'vuexy'],
  parameters: {
    docs: {
      description: {
        component: `Based off the <a href='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/dashboards/crm'>Vuexy Theme Customizer component</a>`
      }
    }
  },
  render:(args) => ({
    props: args,
    styles: [
      `:host{display:block;min-height:50px}`
    ]
  })
}

export default meta;

type Story = StoryObj<VuexyThemeCustomizerTriggerComponent>;

export const Sample: Story = {};
