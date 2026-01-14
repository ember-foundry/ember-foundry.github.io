import {Directive, input} from '@angular/core';

@Directive({
  selector: '[libAvatarImage]',
  host: {
    '[style.border-radius]': "'inherit'",
    '[style.height]': "'100%'",
    '[style.width]': "'100%'",
    '[style.object-fit]': "'var(--avatar-image-object-fit, cover)'",
    '[attr.alt]': "alt() || 'Avatar Image'"
  }
})
export class AvatarImageDirective {
  alt = input<string>('');
}
