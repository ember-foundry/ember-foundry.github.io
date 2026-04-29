import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

const segmenter = new Intl.Segmenter('en', {granularity: 'grapheme'});

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
    const _text = this.text();
    return Array.from(segmenter.segment(_text)).map(_ => _.segment.toUpperCase());
  })
}
