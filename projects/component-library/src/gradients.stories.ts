import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  tags: ['css', 'gradients']
};

export default meta;

const gradients = [
  {
    label: 'Trello Blue',
    value: 'url(https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/snow.svg)',
    citation: {
      name: 'Trello',
      url: 'https://trello.com/'
    }
  }
];

export const Gradients: StoryObj = {
  render: () => {
    return {
      styles:  [
        '.grid { display: grid; grid-template-columns: auto auto repeat(1, 1fr); grid-column-gap: 4rem; grid-row-gap: 10px; }',
        `
        .card {
            width: 370px;
            height: 420px;
            box-shadow: 0 6px 15px #24252614;
            color: #333435;
            content-visibility: auto;
            background-color: #fff;
            border-radius: 1rem;
            transition: box-shadow .25s, transform .25s;
            position: relative;
            overflow: hidden;
            padding: 1.75rem;
            display: inline-flex;
            flex-direction: column;
          }

          .card .content {
            display: inline-flex;
            flex-grow: 1;
            align-items: center;
            justify-content: center;
          }

          .card .content .preview {
            aspect-ratio: 1;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 50%;
            width: 80%;
            background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
          }

          .card a {
            color: inherit;
          }
        `
      ],
      template:
        `
          <h1>Gradients</h1>
          <div class="grid">
          ${
          gradients
            .map(item => `
                <div class="card">
                    <header>
                       ${item.label}
                    </header>
                    <div class="content">
                        <div class="preview" style="background-image: ${item.value}"></div>
                    </div>
                    <footer>
                        As seen on <a href='${item.citation.url}' target='_blank'>${item.citation.name}</a>
                    </footer>
                </div>
            `)
            .join(' ')
          }
          </div>
        `
    }
  }
};
