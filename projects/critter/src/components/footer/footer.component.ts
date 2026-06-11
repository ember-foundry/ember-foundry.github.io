import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {BadgeDirective} from '../badge/badge.directive';
import {LucideBox, LucideHouse, LucideList, LucideShoppingCart, LucideUsers} from '@lucide/angular';

@Component({
  selector: 'mbr-critter-footer',
  imports: [
    ButtonComponent,
    BadgeDirective,
    LucideHouse,
    LucideList,
    LucideBox,
    LucideUsers,
    LucideShoppingCart
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  host: {
    'class': 'px-5 pb-3'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
