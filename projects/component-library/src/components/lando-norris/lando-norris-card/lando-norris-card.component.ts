import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-lando-norris-card',
  templateUrl: './lando-norris-card.component.html',
  styleUrls: [
    '../lando-norris-fonts.scss',
    './lando-norris-card.component.scss'
  ],
  host: {
    'class': 'mona-sans'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandoNorrisCardComponent {

}
