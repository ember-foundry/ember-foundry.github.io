import {ChangeDetectionStrategy, Component, computed, contentChildren, input} from '@angular/core';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {AvatarComponent} from '../avatar/avatar.component';
import {BaseComponent} from '../_base/base.component';

@Component({
  selector: 'ode-avatar-badge',
  templateUrl: './avatar-badge.component.html',
  styleUrl: 'avatar-badge.component.scss',
  imports: [
    AvatarComponent
  ],
  host: {
    '[class]': 'host_css_classes()',
    '[style.--size]': 'css_size_var()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarBadgeComponent extends BaseComponent {
  status = input<'away' | 'busy' | 'focus' | 'offline' | 'online' | 'reachable'>('offline');
  size = input<tailwind_sizes>(tailwind_sizes.md);
  mode = input<'notch'|'overlay'>('notch')

  private avatars = contentChildren(AvatarComponent);

  protected host_css_classes = computed<string>(() => {
    const status = this.status();
    const mode = this.mode();

    return `${status} ${mode}`
  });

  protected css_size_var = computed<string>(() => {
    const s = this.size();
    return `var(--size-${s})`;
  });
}
