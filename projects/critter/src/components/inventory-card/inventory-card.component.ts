import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {ChipComponent} from '../chip/chip.component';
import {CardComponent} from '../card/card.component';
import {COLORS_TONAL_BRIGHT} from '../../types/colors.type';
import {
  LucideBox,
  LucideCheck,
  LucideChevronsDown,
  LucideDynamicIcon,
  LucideIconInput,
  LucideX
} from '@lucide/angular';

@Component({
  selector: 'mbr-critter-inventory-card',
  imports: [
    ChipComponent,
    AvatarComponent,
    CardComponent,
    LucideBox,
    LucideDynamicIcon
  ],
  templateUrl: './inventory-card.component.html',
  styleUrl: './inventory-card.component.scss',
  host: {
    '[class]': 'host_css_classes()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryCardComponent {
  public status = input<'out' | 'low' | 'stocked'>('stocked');
  public label = input<string>('ITEM');

  protected color = computed<COLORS_TONAL_BRIGHT>(() => {
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

  protected icon = computed<LucideIconInput>(() => {
    switch(this.status()){
      case 'out':
        return LucideX;
      case 'low':
        return LucideChevronsDown;
      case 'stocked':
        return LucideCheck;
    }
  })

  protected host_css_classes = computed<string>(() => {
    return `color-${this.color()} ${this.status()}`
  })
}
