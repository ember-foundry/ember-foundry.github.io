import {ChangeDetectionStrategy, Component, input} from '@angular/core';

// type ColumnValues = 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
type SupportedFlexGrowValues = number | 'inherit' | 'initial' | 'unset' | 'revert';

@Component({
  selector: 'lib-column',
  template: '<ng-content></ng-content>',
  styleUrl: './flexbox-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'column',
    '[style.--grow]': 'grow()',
    '[style.--basis]': 'basis()'
  }
})
export class FlexboxColumnComponent {
  grow = input<SupportedFlexGrowValues>(0);
  basis = input<string>('auto');
}
