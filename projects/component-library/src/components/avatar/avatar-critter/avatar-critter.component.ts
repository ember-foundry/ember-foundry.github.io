import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {InitialsPipe} from '../../../pipes/initials/initials.pipe';
import {COLORS} from '../../../themes/critter/colors.type';
import {BaseComponent} from '../../_base/base.component';

@Component({
  selector: 'mbr-avatar-critter',
  imports: [
    InitialsPipe
  ],
  templateUrl: './avatar-critter.component.html',
  styleUrls: [
    '../../../themes/critter/critter.scss',
    './avatar-critter.component.scss'
  ],
  host: {
    '[class]': 'host_css_classes()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarCritterComponent extends BaseComponent {
  public name = input<string>('Unknown User');
  public color = input<COLORS>();
  protected readonly host_css_classes = this.computed_host_css_classes_from('color');
}
