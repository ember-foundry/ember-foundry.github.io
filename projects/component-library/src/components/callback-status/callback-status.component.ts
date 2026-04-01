import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {BaseComponent} from '../_base/base.component';
import {SVGCheckmarkOutlineComponent} from '../svg-checkmark-outline/svg-checkmark-outline.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-callback-status',
  templateUrl: 'callback-status.component.html',
  styleUrl: 'callback-status.component.scss',
  host: {
    '[class]': 'status()'
  },
  imports: [
    SVGCheckmarkOutlineComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackStatusComponent extends BaseComponent {

  status = input<'success'|'error'|'processing'>('processing');

  cta_click = output<void>();
}
