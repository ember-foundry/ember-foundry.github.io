import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  //eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-lando-norris-sliding-text',
  imports: [],
  templateUrl: './lando-norris-sliding-text.component.html',
  styleUrls: [
    '../lando-norris-fonts.scss',
    './lando-norris-sliding-text.component.scss'
  ],
  host: {
    'class': 'mona-sans'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandoNorrisSlidingTextComponent {
  public text = input.required<string[], string>({transform: (received_value:string) => received_value.split('').map(_ => _.toUpperCase())});
}
