import {Directive} from '@angular/core';
import {random_milky_hsl_color} from '../../helpers/random_milky_hsl_color';

@Directive({
  selector: '[mbrRandomMilkyBackground]',
  host: {
    '[style.background-color]': 'random_milky_color'
  }
})
export class RandomMilkyBackgroundDirective {
  protected readonly random_milky_color = random_milky_hsl_color();
}
