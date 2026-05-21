import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  tags: ['typography' ],
  args: {
    example_text: 'Ember Foundry'
  }
};

export default meta;

const all_font_weights = [
  {
    label: 'Thin',
    value: 100
  },
  {
    label: 'Extra-Light',
    value: 200
  },
  {
    label: 'Light',
    value: 300
  },
  {
    label: 'Regular',
    value: 400
  },
  {
    label: 'Medium',
    value: 500
  },
  {
    label: 'Semi-Bold',
    value: 600
  },
  {
    label: 'Bold',
    value: 700
  },
  {
    label: 'ExtraBold / Heavy',
    value: 800
  },
  {
    label: 'Black',
    value: 900
  }
];

export const FontWeights: StoryObj = {
  render: (args) => {
    return {
      styles:  [
        ':host { font-size: 32px; }',
        'h1 { margin: 0; }',
        '.grid { display: grid; grid-template-columns: auto auto repeat(1, 1fr); grid-column-gap: 4rem; grid-row-gap: 10px; }'

      ],
      template:
        `
          <h1>Font Weights</h1>
          <div class="grid">
          ${
            all_font_weights
            .map(weight => `
                    <div style="font-weight:${weight.value}">${weight.value}</div>
                    <div style="font-weight:${weight.value}">${weight.label}</div>
                    <div style="font-weight:${weight.value}">${args['example_text']}</div>
            `)
            .join(' ')
          }
          </div>
        `
    }
  }
};
