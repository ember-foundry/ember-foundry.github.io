import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarGroupComponent} from '../avatar-group/avatar-group.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
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
  size = input<tailwind_sizes>(tailwind_sizes['3xs']);
  supported = input<BrowserKey[]>([]);

  private readonly ALL_BROWSERS = ['chrome', 'edge', 'firefox', 'safari'] as const;

  protected groups = computed<{ browsers: BrowserKey[], status: 'supported' | 'unsupported' }[]>(() => {
    const supported_browsers = this.supported();

    return [
      { browsers: supported_browsers, status: 'supported' },
      { browsers: this.ALL_BROWSERS.filter(key => !supported_browsers.includes(key)), status: 'unsupported' }
    ]
  });
}
