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
  },
  {
    label: 'Matchday Experience',
    value: 'linear-gradient(to right bottom, oklab(0.766529 -0.00252706 0.138662 / 0.2) 0%, oklab(0.766529 -0.00252706 0.138662 / 0.05) 100%)'
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

          .card h4 {margin: 0;}

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


        .card header,
        .card footer {
          display: inline-flex;
          justify-content: space-between;
        }

        .card button {
          appearance: none;
          outline: none;
          border: none;
          background: none;
          position: relative;
          cursor: pointer;
        }

        .card button:before {
          content: '';
          width: 10px;
          background: black;
          height: 1px;
          position: absolute;
          top: 100%;
          right: unset;
          left: 10px;
          transition: all 0.2s ease-in;
        }

        .card button:hover:before {
          width: calc(100% - 20px);
        }
        `
      ],
      template:
        `
          <h1>Gradients</h1>
          <p>Inspired by <a href="https://webgradients.com/" target="_blank">webgradients.com</a></p>
          <div class="grid">
          ${
          gradients
            .map(item => {
              const footer_left_text = item.citation ? `As seen on <a href='${item.citation.url}' target='_blank'>${item.citation.name}</a>` : '';
              return `
                  <div class="card">
                      <header>
                         <h4>${item.label}</h4>
                      </header>
                      <div class="content">
                          <div class="preview" style="background-image: ${item.value}"></div>
                      </div>
                      <footer>
                          <span>${footer_left_text}</span>
                          <button>Copy CSS</button>
                      </footer>
                  </div>
              `;
            })
            .join('')
          }
          </div>
        `
    }
  }
};
