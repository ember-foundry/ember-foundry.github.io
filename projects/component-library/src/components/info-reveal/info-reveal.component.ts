import {ChangeDetectionStrategy, Component, model} from '@angular/core';

@Component({
  selector: 'mbr-info-reveal',
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
  public reveal = model(false);
}
