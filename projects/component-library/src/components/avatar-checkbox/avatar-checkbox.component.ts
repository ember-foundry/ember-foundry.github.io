import {ChangeDetectionStrategy, Component, Directive, effect, input, signal} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarBadgeComponent} from '../avatar-badge/avatar-badge.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {BaseComponent} from '../_base/base.component';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'lib-avatar-checkbox lib-avatar',
  host: {
    '[style.--avatar-padding]': "'var(--avatar-border-width)'"
  }
})
export class AvatarInsideAvatarCheckboxDirective {}


@Component({
  selector: 'lib-avatar-checkbox',
  imports: [
    AvatarBadgeComponent,
    AvatarComponent,
    AvatarInsideAvatarCheckboxDirective
  ],
  templateUrl: './avatar-checkbox.component.html',
  styleUrl: './avatar-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.selected]': 'real_selected_value()',
    '(click)': 'real_selected_value.set(!real_selected_value())'
  }
})
export class AvatarCheckboxComponent extends BaseComponent {

  image_url = input<string>('https://mockmind-api.uifaces.co/content/human/1.jpg?v=' + new Date().getTime());
  size = input<tailwind_sizes>(tailwind_sizes.md);
  selected = input(false);

  protected real_selected_value = signal(this.selected());
  private readonly when_selected_input_changed = effect(() => this.real_selected_value.set(this.selected()))
}
