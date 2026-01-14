import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarGroupComponent} from '../avatar-group/avatar-group.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {BaseComponent} from '../_base/base.component';

const ALL_BROWSERS = ['chrome', 'edge', 'firefox', 'safari'];
type Browser = (typeof ALL_BROWSERS)[number];

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
  supported = input<Browser[]>([]);


  protected groups = computed<{ browsers: Browser[], status: 'supported' | 'unsupported' }[]>(() => {
    const supported_browsers = this.supported();

    return [
      { browsers: supported_browsers, status: 'supported' },
      { browsers: ALL_BROWSERS.filter(key => !supported_browsers.includes(key)), status: 'unsupported' }
    ]
  });
}
