import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarGroupComponent} from '../avatar-group/avatar-group.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {tailwind_size} from '../../types/tailwind-sizes.type';
import {BaseComponent} from '../_base/base.component';

export type BrowserKey = 'chrome' | 'edge' | 'firefox' | 'safari';

@Component({
  selector: 'lib-baseline-availability',
  imports: [
    AvatarGroupComponent,
    AvatarComponent
  ],
  templateUrl: './baseline-availability.component.html',
  styleUrl: './baseline-availability.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaselineAvailabilityComponent extends BaseComponent {
  size = input<tailwind_size>(tailwind_sizes['3xs']);
  supported = input<BrowserKey[]>([]);

  protected readonly image_url_supported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg' as const;
  protected readonly image_url_unsupported = 'https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg' as const;

  private readonly ALL_BROWSERS = ['chrome', 'edge', 'firefox', 'safari'] as const;

  protected groups = computed<{ supported: BrowserKey[], unsupported: BrowserKey[] }>(() => {
    const supported_browsers = this.supported();

    return {
      supported: supported_browsers,
      unsupported: this.ALL_BROWSERS
        .filter(key => !supported_browsers.includes(key))
    };
  });
}
