import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {BadgeDirective} from '../badge/badge.directive';

@Component({
  selector: 'mbr-critter-footer',
  imports: [
    ButtonComponent,
    BadgeDirective
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  host: {
    'class': 'px-5 pb-3'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
