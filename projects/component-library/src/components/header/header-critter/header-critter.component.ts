import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BadgeCritterDirective, ButtonCritterComponent} from 'component-library';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'mbr-header-critter',
  imports: [
    ButtonCritterComponent,
    BadgeCritterDirective,
    RouterLink
  ],
  templateUrl: './header-critter.component.html',
  styleUrl: './header-critter.component.scss',
  host: {
    'class': 'flex items-center w-full'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderCritterComponent {

}
