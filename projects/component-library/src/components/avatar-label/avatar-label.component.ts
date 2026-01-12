import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {tailwind_size} from '../../types/tailwind-sizes.type';
import {BaseComponent} from '../_base/base.component';

@Component({
  selector: 'lib-avatar-label',
  standalone: true,
  templateUrl: 'avatar-label.component.html',
  styleUrl: 'avatar-label.component.scss',
  imports: [
    AvatarComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarLabelComponent extends BaseComponent {
  bordered = input(false);
  image_url = input<string>();
  label = input<string>();
  name = input.required<string>();
  size = input<tailwind_size>();
}
