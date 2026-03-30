import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BaseComponent} from '../../_base/base.component';

// type ColumnValues = 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
type SupportedFlexGrowValues = number | 'inherit' | 'initial' | 'unset' | 'revert';

@Component({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'mbr-column',
  template: '<ng-content></ng-content>',
  styleUrl: './flexbox-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--grow]': 'grow()',
    '[style.--basis]': 'basis()'
  }
})
export class FlexboxColumnComponent extends BaseComponent {
  grow = input<SupportedFlexGrowValues>(0);
  basis = input<string>('auto');
}
