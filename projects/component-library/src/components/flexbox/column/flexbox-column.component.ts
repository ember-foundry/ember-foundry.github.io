import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BaseComponent} from '../../_base/base.component';

// type ColumnValues = 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
type SupportedFlexGrowValues = number | undefined | 'inherit' | 'initial' | 'unset' | 'revert';

@Component({
  selector: 'mbr-column',
  template: '<ng-content></ng-content>',
  styleUrl: './flexbox-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--grow]': 'grow()',
    '[style.--shrink]': 'shrink()',
    '[style.--basis]': 'basis()'
  }
})
export class FlexboxColumnComponent extends BaseComponent {
  grow = input<SupportedFlexGrowValues>(undefined);
  shrink = input<SupportedFlexGrowValues>(undefined);
  basis = input<string | undefined>(undefined);
}
