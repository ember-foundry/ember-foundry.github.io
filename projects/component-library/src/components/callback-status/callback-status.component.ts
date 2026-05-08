import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {BaseComponent} from '../_base/base.component';
import {SVGCheckmarkCircleOutlineComponent} from '../svg-checkmark-circle-outline/svg-checkmark-circle-outline.component';

@Component({
  selector: 'mbr-callback-status',
  templateUrl: 'callback-status.component.html',
  styleUrl: 'callback-status.component.scss',
  host: {
    '[class]': 'status()'
  },
  imports: [
    SVGCheckmarkCircleOutlineComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackStatusComponent extends BaseComponent {

  status = input<'success' | 'error' | 'processing'>('processing');

  cta_click = output<void>();
}
