import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {BaseComponent} from '../_base/base.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {AvatarLabelDirective} from './avatar-label.directive';

@Component({
  selector: 'mbr-avatar-with-label',
  templateUrl: 'avatar-with-label.component.html',
  styleUrl: 'avatar-with-label.component.scss',
  imports: [
    AvatarComponent,
    AvatarLabelDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarWithLabelComponent extends BaseComponent {
  bordered = input(false);
  image_url = input<string>();
  label = input<string>();
  name = input.required<string>();
  size = input<tailwind_sizes>();
}
