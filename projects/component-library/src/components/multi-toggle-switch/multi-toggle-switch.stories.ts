import {Meta, StoryObj} from '@storybook/angular';
import {MultiToggleSwitchComponent} from 'component-library';
import {action} from 'storybook/actions';
import {expect, fn} from 'storybook/test';
import {array_to_angular_input} from 'component-library/helpers/storybook/array_to_angular_input';

const meta: Meta<MultiToggleSwitchComponent> = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Based on the Preview / Code toggle seen on <a href='https://tailwindcss.com/plus/ui-blocks/preview' target='_blank'>Tailwind's Site</a>.<br/>⚠️&nbsp;All the options are the same dimensions`
      }
    }
  },
  component: MultiToggleSwitchComponent,
  tags: ['autodocs', 'toggle', 'switch', 'animation'],
  argTypes: {
    options: {control: 'object'},
    selected_index: {control: 'number'},
    selected_index_changed: {
      action: 'selected_index_changed'
    }
  },
  args: {
    options: ['Yes', 'No', 'Maybe']
  }
}

export default meta;

type Story = StoryObj<MultiToggleSwitchComponent>;

export const Sample: Story = {};

export const JustTwoOptions: Story = {
  args: {
    options: ['Yes', 'No']
  }
};

export const LoadsOfOptions: Story = {
  args: {
    options: ['Yes', 'No', 'Maybe', 'Not Sure', 'Definitely Not', 'Absolutely']
  }
};

export const PreselectedOption: Story = {
  args: {
    selected_index: 1
  }
};

export const ListenToEventWithCustomRender: Story = {
  args: Sample.args,
  render: (args) => {
    return {
      props: {
        ...args,
        on_state_change: action('state_changed_with_custom_render')
      },
      template: `
        <mbr-multi-toggle-switch
          [options]="options"
          (selected_index_changed)="on_state_change($event)"
        />
      `
    }
  }
};

export const InteractionTest: Story = {
  args: {
    selected_index_changed: fn()
  },
  play: async ({canvasElement: storybook_element, args, userEvent}) => {
    const first_option = storybook_element.querySelector<HTMLElement>('mbr-multi-toggle-switch .option:nth-child(1)')!;
    const second_option = storybook_element.querySelector<HTMLElement>('mbr-multi-toggle-switch .option:nth-child(2)')!;
    const third_option = storybook_element.querySelector<HTMLElement>('mbr-multi-toggle-switch .option:nth-child(3)')!;

    await expect(args.selected_index_changed).toHaveBeenCalledWith({index: 0, value: 'Yes'});
    await new Promise(resolve => setTimeout(resolve, 1000));

    await userEvent.click(second_option);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.selected_index_changed).toHaveBeenCalledWith({index: 1, value: 'No'});

    await userEvent.click(first_option);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.selected_index_changed).toHaveBeenCalledWith({index: 0, value: 'Yes'});

    await userEvent.click(second_option);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.selected_index_changed).toHaveBeenCalledWith({index: 1, value: 'No'});

    await userEvent.click(third_option);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.selected_index_changed).toHaveBeenCalledWith({ index: 2, value: 'Maybe'});
  }
};

export const InteractionTestWhenTurnedOnInitially: Story = {
  args: {
    selected_index: 1,
    selected_index_changed: fn()
  },
  play: async ({canvasElement: storybook_element, args, userEvent}) => {
    const first_option = storybook_element.querySelector<HTMLElement>('mbr-multi-toggle-switch .option:nth-child(1)')!;
    const second_option = storybook_element.querySelector<HTMLElement>('mbr-multi-toggle-switch .option:nth-child(2)')!;
    const third_option = storybook_element.querySelector<HTMLElement>('mbr-multi-toggle-switch .option:nth-child(3)')!;

    await expect(args.selected_index_changed).toHaveBeenCalledWith({index: 1, value: 'No'});
    await new Promise(resolve => setTimeout(resolve, 1000));

    await userEvent.click(first_option);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.selected_index_changed).toHaveBeenCalledWith({index: 0, value: 'Yes'});

    await userEvent.click(second_option);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.selected_index_changed).toHaveBeenCalledWith({index: 1, value: 'No'});

    await userEvent.click(third_option);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(args.selected_index_changed).toHaveBeenCalledWith({ index: 2, value: 'Maybe'});
  }
};

export const OneReallyLongOption: Story = {
  parameters: {
    docs: {
      description: {
        story: '⚠️&nbsp;Here you can see the flaw of this component when it has a really long option'
      }
    }
  },
  args: {
    options: ['This is a really long option', 'No']
  }
};

export const Variant: Story = {
  args: {
    options: ['Standard', 'Premium', 'Elite']
  },
  render: (args) => {
    return {
      props: args,
      styles: [
        `:host {
          --multi-toggle-background-color: #333333;
          --multi-toggle-border-radius: 8.75px;
          --multi-toggle-option-padding: 7px 14px;
          --multi-toggle-option-focus-color: #d4af37;
          --multi-toggle-option-selected-color: rgb(0, 0, 0);
          --multi-toggle-switch-background-color: #d4af37;
          --multi-toggle-switch-border-color: #d4af37;
          --multi-toggle-switch-border-radius: 6.75px;
        }`
      ],
      template: `
        <style>
        :host {
          --multi-toggle-background-color: #333333;
          --multi-toggle-border-radius: 8.75px;
          --multi-toggle-option-padding: 7px 14px;
          --multi-toggle-option-focus-color: #d4af37;
          --multi-toggle-option-selected-color: rgb(0, 0, 0);
          --multi-toggle-switch-background-color: #d4af37;
          --multi-toggle-switch-border-color: #d4af37;
          --multi-toggle-switch-border-radius: 6.75px;
        }
        </style>
        <mbr-multi-toggle-switch [options]="${array_to_angular_input(args.options)}" />
      `
    }
  }
};
