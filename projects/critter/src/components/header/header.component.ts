import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BadgeDirective} from '../badge/badge.directive';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'mbr-critter-header',
  imports: [
    BadgeDirective,
    ButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    'class': 'flex items-center w-full mb-6'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
