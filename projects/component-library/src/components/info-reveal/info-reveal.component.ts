import {ChangeDetectionStrategy, Component, model} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-info-reveal',
  imports: [],
  templateUrl: './info-reveal.component.html',
  styleUrl: './info-reveal.component.scss',
  host: {
    '[class.reveal]': 'reveal()',
    '(mouseover)': 'reveal.set(true)',
    '(mouseleave)': 'reveal.set(false)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoRevealComponent {
  public reveal = model(false)
}
