import {Meta, StoryObj} from '@storybook/angular';
import {CardWebGradientsComponent} from 'component-library';

const meta: Meta<CardWebGradientsComponent> = {
  component: CardWebGradientsComponent,
  tags: ['autodocs', 'grainy', 'background']
};

export default meta;

export const GrainyBackground: StoryObj<CardWebGradientsComponent> = {
  parameters: {
    docs: {
      description: {
        story: 'Seen on <a href="https://stackoverflow.com/a/49108254/1654250" target="_blank">StackOverflow</a>'
      }
    }
  },
  args: {
    title: 'Grainy Gradient',
    styles: "background: linear-gradient(rgba(255,255,255,.5), rgba(0,0,0,.5)), url(data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycKICB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycKICB3aWR0aD0nMzAwJyBoZWlnaHQ9JzMwMCc+CgogICAgPGZpbHRlciBpZD0nbicgeD0nMCcgeT0nMCc+CiAgICAgICAgICAgIDxmZVR1cmJ1bGVuY2UKICAgICAgICAgICAgICB0eXBlPSdmcmFjdGFsTm9pc2UnCiAgICAgICAgICAgICAgYmFzZUZyZXF1ZW5jeT0nMC43NScKICAgICAgICAgICAgICBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+CiAgICA8L2ZpbHRlcj4KCiAgICA8cmVjdCB3aWR0aD0nMzAwJyBoZWlnaHQ9JzMwMCcgZmlsbD0nI2ZmZicvPgogICAgPHJlY3Qgd2lkdGg9JzMwMCcgaGVpZ2h0PSczMDAnIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0nMC44MCcvPgo8L3N2Zz4=);"
  }
};
