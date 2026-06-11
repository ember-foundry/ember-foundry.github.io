import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {BadgeDirective} from '../badge/badge.directive';
import {
  LucideBox,
  LucideDynamicIcon,
  LucideHouse,
  LucideIconInput,
  LucideList,
  LucideShoppingCart,
  LucideUsers
} from '@lucide/angular';
import {RouterLink} from '@angular/router';

interface FooterItem {
  title: string
  icon: LucideIconInput
  route?: string
}

@Component({
  selector: 'mbr-critter-footer',
  imports: [
    ButtonComponent,
    BadgeDirective,
    LucideDynamicIcon,
    RouterLink,
    LucideHouse
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  host: {
    'class': 'px-5'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public items = input<[FooterItem, FooterItem, FooterItem, FooterItem, FooterItem]>([
    {
      title: 'Home',
      icon: LucideHouse
    },
    {
      title: 'Master',
      icon: LucideList
    },
    {
      title: 'Cart',
      icon: LucideShoppingCart
    },
    {
      title: 'Pantry',
      icon: LucideBox
    },
    {
      title: 'Family',
      icon: LucideUsers
    }
  ]);

  public cart_count = input<number>(4)
}
