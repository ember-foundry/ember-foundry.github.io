import {ChangeDetectionStrategy, Component, computed, effect, inject, input, signal} from '@angular/core';
import {LucideCheck, LucideChevronsDown, LucideDynamicIcon, LucideIconInput, LucideX} from '@lucide/angular';
import {ChipComponent} from '../chip/chip.component';
import {COLORS_TONAL_BRIGHT} from '../../types/colors.type';
import {INVENTORY_STATUS} from '../../types/inventory-status.type';
import {InventoryService} from '../../services/inventory/inventory.service';

@Component({
  selector: 'mbr-critter-inventory-chip',
  templateUrl: './inventory-chip.component.html',
  styleUrl: './inventory-chip.component.scss',
  imports: [
    ChipComponent,
    LucideDynamicIcon
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryChipComponent {
  public status = input<INVENTORY_STATUS>('stocked');

  protected color = signal<COLORS_TONAL_BRIGHT>('success-tonal-bright');

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

  private service = inject(InventoryService);

  constructor() {
    effect(() => {
      this.color.set(this.service.color_from_status(this.status()));
    })
  }
}
