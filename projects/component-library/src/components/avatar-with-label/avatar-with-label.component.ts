import {ChangeDetectionStrategy, Component, Directive, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {BaseComponent} from '../_base/base.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';

@Directive({
  selector: '[libAvatarLabel]',
  host: {
    '[style.font-size]': "'0.8rem'",
    '[style.font-weight]': "'400'"
  }
})
export class AvatarLabelDirective {}

@Component({
  selector: 'lib-avatar-with-label',
  standalone: true,
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
