import {booleanAttribute, ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BaseComponent} from '@ember-foundry/component-library';
import {COLORS} from '../../types/colors.type';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[mbrButton]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'host_css_classes()',
    '[class.rounded]': 'rounded()',
    '[class.flat]': 'flat()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends BaseComponent {
  public color = input<COLORS>();
  public size = input<'small' | 'medium' | undefined>();
  public rounded = input(false, {transform: booleanAttribute});
  public flat = input(false, {transform: booleanAttribute});
  protected readonly host_css_classes = this.computed_host_css_classes_from('size', 'color');
}
