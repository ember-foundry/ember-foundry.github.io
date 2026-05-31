import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'mbr-badge-playful-earth',
  template: '{{content()}}',
  styleUrl: './badge-playful-earthy.component.scss',
  host: {
    '[style.--offset]': 'offset()',
    '[style.--size]': 'size()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgePlayfulEarthyComponent {
  public content = input<string>();
  public offset = input<string>();
  public size = input<string>();
}
