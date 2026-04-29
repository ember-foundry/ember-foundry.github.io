import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-lando-norris-card',
  templateUrl: './lando-norris-card.component.html',
  styleUrl: './lando-norris-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandoNorrisCardComponent {

}
