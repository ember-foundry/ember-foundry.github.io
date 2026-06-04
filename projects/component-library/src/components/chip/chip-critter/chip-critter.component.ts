import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {COLORS_TONAl} from '../../../themes/critter/colors.type';
import {BaseComponent} from '../../_base/base.component';

@Component({
  selector: 'mbr-chip-critter',
  templateUrl: './chip-critter.component.html',
  styleUrls: [
    '../../../themes/critter/critter.scss',
    './chip-critter.component.scss'
  ],
  host: {
    '[class]': 'host_css_classes()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipCritterComponent extends BaseComponent {
  public color = input<COLORS_TONAl>('success-tonal');
  protected readonly host_css_classes = this.computed_host_css_classes_from('color');
}
