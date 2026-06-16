import {booleanAttribute, ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BaseComponent, InitialsPipe} from '@ember-foundry/component-library';
import {COLORS,COLORS_TONAL} from '../../types/colors.type';

@Component({
  selector: 'mbr-critter-avatar',
  imports: [
    InitialsPipe
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  host: {
    '[class]': 'host_css_classes()',
    '[class.flat]': 'flat()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent extends BaseComponent {
  public name = input<string>('Unknown User');
  public color = input<COLORS|COLORS_TONAL>();
  public flat = input(false, {transform: booleanAttribute});
  protected readonly host_css_classes = this.computed_host_css_classes_from('color');
}
