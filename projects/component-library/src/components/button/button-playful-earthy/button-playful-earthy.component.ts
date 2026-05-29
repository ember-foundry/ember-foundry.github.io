import {ChangeDetectionStrategy, Component, input} from '@angular/core';
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
    '[class]': 'host_css_classes()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonPlayfulEarthyComponent extends BaseComponent {
  public size = input<'small'|undefined>();
  public color  = input<'primary'|'secondary'|undefined>();
  protected readonly host_css_classes = this.computed_host_css_classes_from('size', 'color');
}
