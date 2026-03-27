import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {FlexboxColumnComponent, FlexboxRowComponent} from 'component-library';

const meta: Meta<FlexboxRowComponent> = {
  component: FlexboxRowComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FlexboxRowComponent,
        FlexboxColumnComponent
      ]
    })
  ],
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'number'
    },
    inline: {
      control: 'boolean'
    },
    align_items: {
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      control: 'select'
    },
    justify_content: {
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
      control: 'select'
    },
    align_content: {
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: 'select'
    },
    direction: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: 'select'
    }
  }
}

export default meta;

type Story = StoryObj<FlexboxRowComponent>;

const host_flexbox_styles = `:host {
  display: block;
  min-height: 200px;
  min-width: 250px;
}`

const row_styles = `row {
  --example-block-size-small: 50px;
  --example-block-size-medium: calc(var(--example-block-size-small) * 1.5);
  --example-block-size-large: calc(var(--example-block-size-small) * 2);
  border-radius: 16px;
  padding: var(--gap);
  border: 6px solid #010100;
  display: inline-flex;
  width: 300px;
}`;

const column_styles = `column {
  background: #e01c49;
  border-radius: 16px;
  color: white;
  align-content: center;
  text-align: center;
  padding: 1rem;
}`

export const Sample: Story = {
  render: (args) => {
    return {
      props: args,
      styles: [
        host_flexbox_styles,
        row_styles,
        column_styles,
        `.row { min-height: 200px; min-width: 400px;}`
      ],
      template: `
        <mbr-row
            [gap]="${args.gap}"
            [direction]="${args.direction}"
            [inline]="${args.inline}"
            [align_items]="${args.align_items}"
            [justify_content]="${args.justify_content}"
            [align_content]="${args.align_content}"
        >
          <mbr-column>1</mbr-column>
          <mbr-column style="width: var(--example-block-size-large)">2</mbr-column>
          <mbr-column style="width: var(--example-block-size-large)">3</mbr-column>
          <mbr-column>4</mbr-column>
          <mbr-column style="width: var(--example-block-size-large)">5</mbr-column>
          <mbr-column style="width: var(--example-block-size-large)">6</mbr-column>
          <mbr-column>7</mbr-column>
          <mbr-column style="width: var(--example-block-size-large)">8</mbr-column>
          <mbr-column style="width: var(--example-block-size-large)">9</mbr-column>
        </mbr-row>
      `
    }
  },
  args: {
    gap: 10,
    direction: 'row'
  }
};
export const FlexDirectionRow: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <mbr-row [gap]="10" direction="row">
        <mbr-column>1</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">2</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">3</mbr-column>
        <mbr-column>4</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">5</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">6</mbr-column>
        <mbr-column>7</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">8</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">9</mbr-column>
      </mbr-row>
    `
  })
};

export const FlexDirectionRowReverse: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <mbr-row [gap]="10" direction="row-reverse">
        <mbr-column>1</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">2</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">3</mbr-column>
        <mbr-column>4</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">5</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">6</mbr-column>
        <mbr-column>7</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">8</mbr-column>
        <mbr-column style="width: var(--example-block-size-large)">9</mbr-column>
      </mbr-row>
    `
  })
};

export const FlexDirectionColumn: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      `.row { width: unset; height: 302px; }`
    ],
    template: `
      <mbr-row [gap]="10" [inline]="true" direction="column">
        <mbr-column>1</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">2</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">3</mbr-column>
        <mbr-column>4</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">5</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">6</mbr-column>
        <mbr-column>7</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">8</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">9</mbr-column>
      </mbr-row>
    `
  })
};

export const FlexDirectionColumnReverse: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      `.row { width: unset; height: 302px; }`
    ],
    template: `
      <mbr-row [gap]="10" [inline]="true" direction="column-reverse">
        <mbr-column>1</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">2</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">3</mbr-column>
        <mbr-column>4</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">5</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">6</mbr-column>
        <mbr-column>7</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">8</mbr-column>
        <mbr-column style="height: var(--example-block-size-large)">9</mbr-column>
      </mbr-row>
    `
  })
};

export const AlignItemsFlexStart: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <mbr-row [gap]="10" align_items="flex-start">
        <mbr-column>1</mbr-column>
        <mbr-column style="width: var(--example-block-size-small); height: var(--example-block-size-large)">2</mbr-column>
        <mbr-column style="width: var(--example-block-size-small); height: var(--example-block-size-medium)">3</mbr-column>
      </mbr-row>
    `
  })
};

export const AlignItemsCenter: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <mbr-row [gap]="10" align_items="center">
        <mbr-column>1</mbr-column>
        <lib-column style="width: var(--example-block-size-small); min-height: var(--example-block-size-large)">2</mbr-column>
        <lib-column style="width: var(--example-block-size-small); min-height: var(--example-block-size-medium)">3</mbr-column>
      </mbr-row>
    `
  })
};

export const AlignItemsFlexEnd: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <lib-row [gap]="10" align_items="flex-end">
        <lib-column>1</mbr-column>
        <lib-column style="width: var(--example-block-size-small); min-height: var(--example-block-size-large)">2</mbr-column>
        <lib-column style="width: var(--example-block-size-small); min-height: var(--example-block-size-medium)">3</lib-column>
      </lib-row>
    `
  })
};

export const AlignItemsStretch: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles
    ],
    template: `
      <lib-row [gap]="10">
        <lib-column>1</lib-column>
        <lib-column style="width: var(--example-block-size-small); min-height: var(--example-block-size-large)">2</lib-column>
        <lib-column style="width: var(--example-block-size-small); min-height: var(--example-block-size-medium)">3</lib-column>
      </lib-row>
    `
  })
};

const justify_content_styles = `.row { min-width: 400px; min-height: 150px;}`
export const JustifyContentFlexStart: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
      <lib-row [gap]="10">
        <lib-column>1</lib-column>
        <lib-column style="width: var(--example-block-size-medium)">2</lib-column>
        <lib-column>3</lib-column>
      </lib-row>
    `
  })
};

export const JustifyContentCenter: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
     <lib-row [gap]="10" justify_content="center">
      <lib-column>1</lib-column>
      <lib-column style="width: var(--example-block-size-medium)">2</lib-column>
      <lib-column>3</lib-column>
    </lib-row>
    `
  })
};

export const JustifyContentFlexEnd: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
     <lib-row [gap]="10" justify_content="flex-end">
      <lib-column>1</lib-column>
      <lib-column style="width: var(--example-block-size-medium)">2</lib-column>
      <lib-column>3</lib-column>
     </lib-row>
    `
  })
};

export const JustifyContentSpaceBetween: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
      <lib-row [gap]="10" justify_content="space-between">
        <lib-column>1</lib-column>
        <lib-column style="width: var(--example-block-size-medium)">2</lib-column>
        <lib-column>3</lib-column>
      </lib-row>
    `
  })
};

export const JustifyContentSpaceAround: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
      <lib-row [gap]="10" justify_content="space-around">
        <lib-column>1</lib-column>
        <lib-column style="width: var(--example-block-size-medium)">2</lib-column>
        <lib-column>3</lib-column>
      </lib-row>
    `
  })
};

export const JustifyContentSpaceEvenly: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      justify_content_styles
    ],
    template: `
      <lib-row [gap]="10" justify_content="space-evenly">
        <lib-column>1</lib-column>
        <lib-column style="width: var(--example-block-size-medium)">2</lib-column>
        <lib-column>3</lib-column>
      </lib-row>
    `
  })
};

const align_content_styles = `.row { max-width: 250px; min-height: 300px;}`
export const AlignContentFlexStart: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <lib-row [gap]="10">
        <lib-column style="height: var(--example-block-size-small);">1</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</lib-column>
        <lib-column style="height: var(--example-block-size-small);">4</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</lib-column>
      </lib-row>
    `
  })
};

export const AlignContentCenter: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <lib-row [gap]="10" align_content="center">
        <lib-column style="height: var(--example-block-size-small);">1</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</lib-column>
        <lib-column style="height: var(--example-block-size-small);">4</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</lib-column>
      </lib-row>
    `
  })
};

export const AlignContentFlexEnd: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <lib-row [gap]="10" align_content="flex-end">
        <lib-column style="height: var(--example-block-size-small);">1</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</lib-column>
        <lib-column style="height: var(--example-block-size-small);">4</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</lib-column>
      </lib-row>
    `
  })
};

export const AlignContentStretch: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <lib-row [gap]="10" align_content="stretch">
        <lib-column>1</lib-column>
        <lib-column style="width: var(--example-block-size-medium)">2</lib-column>
        <lib-column style="width: var(--example-block-size-medium)">3</lib-column>
        <lib-column>4</lib-column>
        <lib-column style="width: var(--example-block-size-medium)">5</lib-column>
        <lib-column style="width: var(--example-block-size-medium)">6</lib-column>
      </lib-row>
    `
  })
};

export const AlignContentSpaceBetween: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <lib-row [gap]="10" align_content="space-between">
        <lib-column style="height: var(--example-block-size-small);">1</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</lib-column>
        <lib-column style="height: var(--example-block-size-small);">4</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</lib-column>
      </lib-row>
    `
  })
};

export const AlignContentSpaceAround: Story = {
  render: (args) => ({
    props: args,
    styles: [
      host_flexbox_styles,
      row_styles,
      column_styles,
      align_content_styles
    ],
    template: `
      <lib-row [gap]="10" align_content="space-around">
        <lib-column style="height: var(--example-block-size-small);">1</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">2</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">3</lib-column>
        <lib-column style="height: var(--example-block-size-small);">4</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">5</lib-column>
        <lib-column style="width: var(--example-block-size-medium); height: var(--example-block-size-small);">6</lib-column>
      </lib-row>
    `
  })
};
