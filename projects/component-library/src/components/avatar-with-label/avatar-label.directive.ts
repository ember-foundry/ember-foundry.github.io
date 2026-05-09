import {Directive} from '@angular/core';

@Directive({
  selector: '[mbrAvatarLabel]',
  host: {
    'style.font-size': '0.8rem',
    'style.font-weight': '400'
  }
})
export class AvatarLabelDirective {
}
