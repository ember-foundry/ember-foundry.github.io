import {ChangeDetectionStrategy, Component, computed, effect, inject, input, signal} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {CardComponent} from '../card/card.component';
import {COLORS_TONAL_BRIGHT} from '../../types/colors.type';
import {LucideBox} from '@lucide/angular';
import {InventoryChipComponent} from '../inventory-chip/inventory-chip.component';
import {InventoryService} from '../../services/inventory/inventory.service';
import {INVENTORY_STATUS} from '../../types/inventory-status.type';

@Component({
  selector: 'mbr-critter-inventory-card',
  imports: [
    AvatarComponent,
    CardComponent,
    LucideBox,
    InventoryChipComponent
  ],
  templateUrl: './inventory-card.component.html',
  styleUrl: './inventory-card.component.scss',
  host: {
    '[class]': 'host_css_classes()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryCardComponent {
  public status = input<INVENTORY_STATUS>('stocked');
  public label = input<string>('ITEM');
  private service = inject(InventoryService);
  protected color = signal<COLORS_TONAL_BRIGHT>('success-tonal-bright');

  constructor() {
    effect(() => {
      this.color.set(this.service.color_from_status(this.status()));
    })
  }

  protected host_css_classes = computed<string>(() => {
    return `color-${this.color()} ${this.status()}`
  })
}
