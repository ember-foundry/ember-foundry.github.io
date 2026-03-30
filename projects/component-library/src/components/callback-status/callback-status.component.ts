import {ChangeDetectionStrategy, Component, computed, input, model, output} from '@angular/core';
import {BaseComponent} from 'component-library/components/_base/base.component';

@Component({
  // eslint-disable-next-line @angular-eslint/directive-selector
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

  title_initial = input<string>('Processing Payment');
  description_initial = input<string>('Please don\'t close this window while we confirm your transaction.');

  title_success = input<string>('Payment Received!');
  description_success = input<string>('Thank you for your purchase. Your order is being processed.');

  title_error = input<string>('Payment Failed');
  description_error = input<string>('The transaction was declined by the provider.');

  protected title = computed<string>(() => {
    const status = this.status();
    if(status === 'success'){
      return this.title_success();
    } else if(status === 'error'){
      return this.title_error();
    } else {
      return this.title_initial();
    }
  })

  protected description = computed<string>(() => {
    const status = this.status();
    if(status === 'success'){
      return this.description_success();
    } else if(status === 'error'){
      return this.description_error();
    } else {
      return this.description_initial();
    }
  })

  protected readonly host_css_classes = this.computed_host_css_classes_from('status');

  cta_click = output<void>();
}
