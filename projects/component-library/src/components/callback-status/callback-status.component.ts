import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {BaseComponent} from 'component-library/components/_base/base.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-callback-status',
  templateUrl: './callback-status.component.html',
  styleUrl: './callback-status.component.scss',
  host: {
    '[class]': "status()"
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackStatusComponent extends BaseComponent {

  status = input<'success'|'error'|'processing'>('processing');

  cta_click = output<void>();
}
