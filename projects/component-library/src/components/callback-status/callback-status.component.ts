import {ChangeDetectionStrategy, Component, computed, input, model, output} from '@angular/core';
import {BaseComponent} from 'component-library/components/_base/base.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-callback-status',
  templateUrl: './callback-status.component.html',
  styleUrl: './callback-status.component.scss',
  host: {
    '[class]': 'host_css_classes()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackStatusComponent extends BaseComponent {

  status = model<'success'|'error'|'processing'>('processing');

  protected readonly host_css_classes = this.computed_host_css_classes_from('status');

  cta_click = output<void>();
}
