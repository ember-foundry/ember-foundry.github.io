import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

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
    'class': 'mona-sans',
    '[attr.aria-label]': 'text()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandoNorrisSlidingTextComponent {
  public text = input.required<string>();

  protected text_array = computed<string[]>(() => {
    return this.text().split('').map(_ => _.toUpperCase());
  })
}
