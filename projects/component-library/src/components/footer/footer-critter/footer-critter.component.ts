import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonCritterComponent} from '../../button/button-critter/button-critter.component';
import {BadgeCritterDirective} from '../../../directives/badge/badge-critter/badge-critter.directive';

@Component({
  selector: 'mbr-footer-critter',
  imports: [
    ButtonCritterComponent,
    BadgeCritterDirective
  ],
  templateUrl: './footer-critter.component.html',
  styleUrls: [
    '../../../themes/critter/critter.scss',
    './footer-critter.component.scss'
  ],
  host: {
    'class': 'px-5 pb-3'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterCritterComponent {

}
