import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarGroupComponent} from '../avatar-group/avatar-group.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {tailwind_size} from '../../types/tailwind-sizes.type';
import {BaseComponent} from '../_base/base.component';

export type BrowserKey = 'chrome' | 'edge' | 'firefox' | 'safari';

const BROWSER_CONFIG = {
  'chrome': { id: 'chrome', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-chrome-icon.svg' },
  'firefox': { id: 'firefox', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/firefox-browser-icon.svg' },
  'edge': { id: 'edge', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/edge-browser-icon.svg' },
  'safari': { id: 'safari', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/safari-icon.svg' }
} as const;

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

  protected groups = computed<{ supported: typeof BROWSER_CONFIG[BrowserKey][], unsupported: typeof BROWSER_CONFIG[BrowserKey][] }>(() => {
    const supported_browsers = this.supported();

    return {
      supported: supported_browsers.map(key => BROWSER_CONFIG[key]),
      unsupported: this.ALL_BROWSERS
        .filter(key => !supported_browsers.includes(key))
        .map(key => BROWSER_CONFIG[key])
    };
  });
}
