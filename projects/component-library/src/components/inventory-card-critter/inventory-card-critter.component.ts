import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {ChipCritterComponent} from '../chip/chip-critter/chip-critter.component';
import {BaseComponent} from '../_base/base.component';
import {AvatarCritterComponent} from 'component-library';

@Component({
  selector: 'mbr-inventory-card-critter',
  imports: [
    ChipCritterComponent,
    AvatarCritterComponent
  ],
  templateUrl: './inventory-card-critter.component.html',
  styleUrls: [
    '../../themes/critter/critter.scss',
    './inventory-card-critter.component.scss'
  ],
  host: {
    '[class]': 'host_css_classes()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryCardCritterComponent extends BaseComponent {
  public status = input<'out' | 'low' | 'stocked'>('stocked');
  public label = input<string>('ITEM');

  protected color = computed<'danger-tonal-bright'|'warning-tonal-bright'|'success-tonal-bright'>(() => {
    let _color: 'danger'|'warning'|'success' = 'success';
    switch(this.status()){
      case 'out':
        _color = 'danger';
        break;
      case 'low':
        _color = 'warning';
        break;
      case 'stocked':
        _color = 'success';
        break;
    }
    return `${_color}-tonal-bright`
  });

  protected host_css_classes = computed<string>(() => {
    return `color-${this.color()} ${this.status()}`
  })
}
