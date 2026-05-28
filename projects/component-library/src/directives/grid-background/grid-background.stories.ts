import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {GridBackgroundDirective} from 'component-library';
import {args_to_angular_inputs} from '../../helpers/storybook/args_to_angular_inputs';

const meta: Meta<GridBackgroundDirective> = {
  decorators: [
    moduleMetadata({
      imports: [GridBackgroundDirective]
    })
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Apply a grid background using a directive.<br/>Makes use of two different linear gradients.`
      }
    }
  },
  tags: ['autodocs', 'directive', 'css', 'background'],
  argTypes: {
    mbrGridBackgroundRepeat: {
      options: ['repeat', 'repeat-x', 'repeat-y'],
      control: { type: 'radio' }
    }
  },
  render: (args) => {
    return {
      styles: ['.preview { box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; width: 299px; height: 299px; background-color: #f9f9f9; border-radius: 1rem; }'],
      template: `<div class="preview" mbrGridBackground ${args_to_angular_inputs(args)}></div>`
    }
  }
}

export default meta;

export const Sample: StoryObj = {};

export const ThickerLines: StoryObj = {
  args: {
    mbrGridBackgroundLineThickness: '4px'
  }
};

export const LargerGrid: StoryObj = {
  args: {
    mbrGridBackgroundSize: '50px'

  }
};

export const DifferentColorLines: StoryObj = {
  args: {
    mbrGridBackgroundColorX: 'red',
    mbrGridBackgroundColorY: 'blue'
  }
};

export const Notepad: StoryObj<GridBackgroundDirective> = {
  parameters: {
    docs: {
      description: {
        story: 'Set the <code>repeat</code> variable to <code>"repeat-y"</code> to achieve this effect'
      }
    }
  },
  args: {
    mbrGridBackgroundColorX: '#89abdb',
    mbrGridBackgroundColorY: '#e85fa1',
    mbrGridBackgroundRepeat: 'repeat-y'
  },
  render: (args) => {
    return {
      template: `
        <div class="Notepad" contenteditable="true" mbrGridBackground ${args_to_angular_inputs(args)}>
          <br/>
          Turn any block into an A4 look and feel with this effect
        </div>
        <style>.Notepad { font-family: monospace; padding: 0 1rem 0.5rem 2.5rem; line-height: 30px; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; width: 299px; height: 299px; background-color: #f9f9f9; border-radius: 1rem; }</style>
      `
    }
  }
};

export const LegalPad: StoryObj<GridBackgroundDirective> = {
  parameters: {
    docs: {
      description: {
        story: 'Set the <code>repeat</code> variable to <code>"repeat-y"</code> to achieve this effect'
      }
    }
  },
  args: {
    mbrGridBackgroundColorX: '#2ea29e',
    mbrGridBackgroundColorY: '#ab204a',
    mbrGridBackgroundRepeat: 'repeat-y'
  },
  render: (args) => {
    return {
      template: `
        <div class="legal-pad" contenteditable="true" mbrGridBackground ${args_to_angular_inputs(args)}>
          <br/>
          Turn any block into a notepad look and feel with this effect
        </div>
        <style>.legal-pad { box-shadow: rgb(38, 57, 77) 0 20px 30px -10px; width: 299px; height: 299px; border-radius: 1rem; font-family: monospace; padding: 0rem 1rem 0.5rem 2.5rem; line-height: 30px; background-color: #fff5a2;}</style>
      `
    }
  }
};
