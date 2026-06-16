import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {NumericStringPipe, NumericStringPipeOutputs} from '../../../pipes/numeric-string/numeric-string.pipe';

@Component({
  selector: 'mbr-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrl: 'whatsapp-button.component.scss',
  host: {
    '[class]': 'host_css_classes()'
  },
  providers: [
    NumericStringPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappButtonComponent {
  private readonly numeric_string_pipe = inject(NumericStringPipe);

  public size = input<'small' | 'medium' | 'large'>('medium');
  public phone_number = input<NumericStringPipeOutputs, string>('867051314767696', {transform: this.numeric_string_pipe.transform});

  protected link = computed<string>(() => {
    return 'https://wa.me/ais/' + this.phone_number()
  })

  protected host_css_classes = computed<string>(() => {
    const size = this.size();
    return `size-${size}`
  });
}
