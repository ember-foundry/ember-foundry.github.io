import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'mbr-badge-critter',
  template: '{{content()}}',
  styleUrl: './badge-critter.component.scss',
  host: {
    '[style.--offset]': 'offset()',
    '[style.--size]': 'size()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeCritterComponent {
  public content = input<string>();
  public offset = input<string>();
  public size = input<string>();
}
