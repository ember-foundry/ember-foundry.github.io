import { Meta, StoryObj } from '@storybook/angular';
import {expect} from 'storybook/test';

const meta: Meta = {
  tags: ['css', 'gradients'],
  parameters: {
    docs: {
      description: {
        story: 'Inspired by https://m2.material.io/design/interaction/states.html#usage'
      }
    }
  }
};

export default meta;

export const Buttons: StoryObj = {
  render: () => {
    return {
      styles:  [
        ':host { --color-primary: #FF581B; --color-muted-lighter: #dddada;}',
        '.grid { display: grid; grid-template-columns: auto auto repeat(1, 1fr); grid-column-gap: 1rem; grid-row-gap: 10px; }',
        'button { background: var(--color-primary); border-color: transparent; border-radius: 0.25rem; color: #FFF; cursor: pointer; font-size: 0.875rem; font-weight: 600; padding: 12px 40px; }',
        'button:disabled { background-color: var(--color-muted-lighter); color: hsl(from var(--color-muted-lighter) h s 65%); cursor: not-allowed; user-select: none; }'
      ],
      template:
        `
          <h1>Buttons</h1>
          <div class="grid">
            <button>BUTTON</button>
            <button disabled="disabled">BUTTON</button>
          </div>
        `
    }
  },
  play: async ({canvasElement}) => {
    const button_standard = canvasElement.querySelector<HTMLButtonElement>('button:first-child')!;
    const button_standard_styles: CSSStyleDeclaration = getComputedStyle(button_standard);
    await expect(button_standard).toHaveStyle('cursor: pointer');

    const button_disabled = canvasElement.querySelector<HTMLButtonElement>('button:disabled')!;
    const expected_disabled_styles = {
      'background-color': '#dddada',
      'color': 'color(srgb 0.664789 0.635211 0.635211)',
      'cursor': 'not-allowed',
      'outline-color': 'color(srgb 0.664789 0.635211 0.635211)',
      'text-decoration-color': 'color(srgb 0.664789 0.635211 0.635211)',
      'text-emphasis-color': 'color(srgb 0.664789 0.635211 0.635211)',
      'user-select': 'none'
    }

    const ignored_disabled_properties = ['caret-color', 'column-rule-color'];

    // TODO: test contrast ratio

    Array.from(button_standard_styles)
      .forEach((style_property) => {
        /**
         * Ignore webkit things
         */
        if(style_property.indexOf('-webkit-') === 0){
          return
        }

        if(ignored_disabled_properties.includes(style_property)){
          return;
        }

        let expected_style_value: string = button_standard_styles.getPropertyValue(style_property);
        if(Object.keys(expected_disabled_styles).includes(style_property)) {
          // @ts-expect-error: Suppress TS7053 because the key is dynamic
          expected_style_value = expected_disabled_styles[style_property];
        }
        const expected_style_declaration = `${style_property}: ${expected_style_value}`;
        expect(button_disabled).toHaveStyle(expected_style_declaration);
      });

    await expect(button_disabled).toHaveStyle('cursor: not-allowed');
  }
};
