import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {BaseComponent} from '../_base/base.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[lib-avatar-label], [libAvatarLabel]',
  standalone: true,
  template: `<ng-content />`,
  styles: `
    :host {
      font-size: 0.8rem;
      font-weight: 400;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarLabelComponent {}

@Component({
  selector: 'lib-avatar-with-label',
  standalone: true,
  templateUrl: 'avatar-with-label.component.html',
  styleUrl: 'avatar-with-label.component.scss',
  imports: [
    AvatarComponent,
    AvatarLabelComponent
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
