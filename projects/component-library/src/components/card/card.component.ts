import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ComponentWithVariants} from '../_component_with_variants/component-with-variants.component';
import {CardWebGradientsComponent} from './card-web-gradients/card-web-gradients.component';

@Component({
  selector: 'mbr-card',
  imports: [
    CardWebGradientsComponent
  ],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent extends ComponentWithVariants {
  public variant = input<string>();
}
