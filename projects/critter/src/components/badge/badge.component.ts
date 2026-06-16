import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'mbr-badge',
  template: '{{content()}}',
  styleUrl: './badge.component.scss',
  host: {
    '[style.--offset]': 'offset()',
    '[style.--size]': 'size()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  public content = input<string>();
  public offset = input<string>();
  public size = input<string>();
}
