import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';

const segmenter = new Intl.Segmenter('en', {granularity: 'grapheme'});

@Component({
  selector: 'mbr-lando-norris-sliding-text',
  templateUrl: './lando-norris-sliding-text.component.html',
  styleUrls: [
    '../lando-norris-fonts.scss',
    './lando-norris-sliding-text.component.scss'
  ],
  host: {
    'class': 'mona-sans',
    '[attr.aria-label]': 'text()',
    '[class.hover]': 'is_hovering()',
    '(mouseover)': 'is_hovering.set(true)',
    '(mouseout)': 'is_hovering.set(false)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandoNorrisSlidingTextComponent {
  public text = input.required<string>();
  protected is_hovering = signal(false);

  protected letter_array = computed<string[]>(() => {
    return Array.from(segmenter.segment(this.text())).map(_ => _.segment === ' ' ? ' ' : _.segment);
  })
}
