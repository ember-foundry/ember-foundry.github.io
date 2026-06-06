import {booleanAttribute, ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BaseComponent} from '../../_base/base.component';
import {COLORS} from '../../../themes/critter/colors.type';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[mbrCritter], a[mbrCritter]',
  templateUrl: './button-critter.component.html',
  styleUrls: [
    '../../../themes/critter/critter.scss',
    '../button.component.scss',
    './button-critter.component.scss'
  ],
  host: {
    '[class]': 'host_css_classes()',
    '[class.rounded]': 'rounded()',
    '[class.flat]': 'flat()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCritterComponent extends BaseComponent {
  public color = input<COLORS>();
  public size = input<'small' | 'medium' | undefined | 'large' | 'extra-large'>();
  public rounded = input(false, {transform: booleanAttribute});
  public flat = input(false, {transform: booleanAttribute});
  protected readonly host_css_classes = this.computed_host_css_classes_from('size', 'color');
}
