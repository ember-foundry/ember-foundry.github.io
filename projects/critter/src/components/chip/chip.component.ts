import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BaseComponent} from '@ember-foundry/component-library';
import {COLORS_TONAL} from '../../types/colors.type';

@Component({
  selector: 'mbr-chip',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  host: {
    '[class]': 'host_css_classes()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent extends BaseComponent {
  public color = input<COLORS_TONAL>();
  protected readonly host_css_classes = this.computed_host_css_classes_from('color');
}
