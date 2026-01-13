import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import {InitialsPipe} from '../../pipes/initials/initials.pipe';
import {tailwind_size} from '../../types/tailwind-sizes.type';
import {BaseComponent} from '../_base/base.component';

@Component({
  selector: 'lib-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  imports: [
    InitialsPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.aria-label]': 'name()',
    '[style.--avatar-border-style]': `bordered() ? 'solid' : undefined`,
    '[style.--size]': 'css_size_variable()'
  }
})
export class AvatarComponent extends BaseComponent {
  bordered = input<boolean>();
  image_url = input<string>();
  name = input<string>();
  size = input<tailwind_size>();

  protected css_size_variable = computed<string | undefined>(() => {
    const size = this.size();
    return size === undefined ? size : `var(--size-${size})`
  })

  protected image_load_error = signal<boolean>(false);

  protected on_image_error = (): void => this.image_load_error.set(true)
}
