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
import {RouterLink, RouterLinkActive} from '@angular/router';

export interface FooterMenuItem {
  title: string
  lucide_icon: LucideIconInput
  route?: string
}

@Component({
  selector: 'mbr-critter-footer',
  imports: [
    ButtonComponent,
    BadgeDirective,
    LucideDynamicIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  host: {
    'class': 'px-5 pb-3'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public items = input<[FooterMenuItem, FooterMenuItem, FooterMenuItem, FooterMenuItem, FooterMenuItem]>([
    {
      title: 'Home',
      lucide_icon: LucideHouse
    },
    {
      title: 'Master',
      lucide_icon: LucideList
    },
    {
      title: 'Cart',
      lucide_icon: LucideShoppingCart
    },
    {
      title: 'Pantry',
      lucide_icon: LucideBox
    },
    {
      title: 'Family',
      lucide_icon: LucideUsers
    }
  ]);

  public cart_count = input<number>(4)
}
