import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'mbr-price-plan',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './price-plan.component.html',
  styleUrl: './price-plan.component.scss',
  host: {
    '[class.popular]': 'popular()',
    '[class.selected]': 'selected()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricePlanComponent {
  popular = input<boolean>(false);
  title = input.required<string>();
  price = input.required<number>();
  description = input.required<string>();
  features = input.required<string[]>();
  cta_text = input<string>('Select Package');
  selected = input<boolean>(false);
}
