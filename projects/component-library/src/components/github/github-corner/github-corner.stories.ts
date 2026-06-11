import type { Meta, StoryObj } from '@storybook/angular';
import { GithubCornerComponent, pause } from '@ember-foundry/component-library';

const default_story_styles = `:host { display:block; min-height: 120px; }`;

const meta: Meta<GithubCornerComponent> = {
  component: GithubCornerComponent,
  tags: ['autodocs', 'github'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    username: {
      type: 'string',
      control: {type: 'text'},
      description: 'Github username to link to'
    },
    position: {
      type: 'string',
      control: {type: 'radio'},
      options: ['top-left','top-right','bottom-left','bottom-right'],
      description: 'Position of the corner',
      table: {
        defaultValue: {summary: 'top-right'}
      }
    }
  },
  args: {
    username: 'craigiswayne',
    position: 'top-right'
  },
  render: (args) => ({
    props: args,
    styles: [
      default_story_styles
    ]
  })
}

export default meta;

type Story = StoryObj<GithubCornerComponent>;

export const Sample: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Inherits the color from the parent element'
      }
    }
  }
};

export const CustomColorUsingParent: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Set the color on the parent element, and it will be inherited by the component'
      }
    }
  },
  render: (args) => ({
    styles: [default_story_styles],
    template: `
      <style>:host {color: #FD6C6C; }</style>
      <mbr-github-corner
        username="${args.username}"
        [position]="'${args.position}'"
      />
    `
  })
};

export const CustomColorInlineStyles: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Set the color on the host element'
      }
    }
  },
  render: (args) => ({
    styles: [
      default_story_styles
    ],
    template: `
      <mbr-github-corner
        username="${args.username}"
        [position]="'${args.position}'"
        style="color: #64CEAA"
      />
    `
  })
};

export const CustomColorUsingCSSVariable: Story = {
  parameters: {
    docs: {
      description: {
        story: `Set the css variable <code>--github-corner-color</code>`
      }
    }
  },
  render: (args) => ({
    styles: [default_story_styles],
    template: `
      <style>:host { --github-corner-color: #70B7FD; }</style>
      <mbr-github-corner
        username="${args.username}"
        [position]="'${args.position}'"
      />
    `
  })
};

export const CustomPosition: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Specify the corner placement'
      }
    }
  },
  args: {
    position: 'bottom-left'
  }
};

export const CustomSize: Story = {
  parameters: {
    docs: {
      description: {
        story: `Set the css variable <code>--github-corner-color</code>`
      }
    }
  },
  render: (args) => ({
    styles: [default_story_styles, ':host { min-height: 200px; }'],
    template: `
      <style>:host { --github-corner-size: 150px }</style>
      <mbr-github-corner
        username="${args.username}"
        [position]="'${args.position}'"
      />
    `
  })
};

export const InteractionTests: Story = {
  play: async ({userEvent, canvasElement}) => {
    await pause(1);
    const host = canvasElement.querySelector('mbr-github-corner')!;
    await userEvent.hover(host);
    await pause(1);
  }
}
