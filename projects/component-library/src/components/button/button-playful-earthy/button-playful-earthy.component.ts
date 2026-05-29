import {booleanAttribute, ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BaseComponent} from '../../_base/base.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[mbrButtonPlayfulEarthy], a[mbrButtonPlayfulEarthy]',
  templateUrl: './button-playful-earthy.component.html',
  styleUrls: [
    '../button.component.scss',
    './button-playful-earthy.component.scss'
  ],
  host: {
    '[class]': 'host_css_classes()',
    '[class.rounded]': 'rounded()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonPlayfulEarthyComponent extends BaseComponent {
  public color = input<'primary' | 'secondary' | undefined>();
  public size = input<'small' | 'medium' | undefined | 'large' | 'extra-large'>();
  public rounded = input(false, {transform: booleanAttribute});
  protected readonly host_css_classes = this.computed_host_css_classes_from('size', 'color');
}
