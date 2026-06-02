import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ToggleComponent} from '../../toggle/toggle.component';

@Component({
  selector: 'input[type="checkbox"][mbrPlayfulEarthy], mbr-checkbox-playful-earthy',
  templateUrl: './checkbox-playful-earthy.component.html',
  styleUrl: './checkbox-playful-earthy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxPlayfulEarthyComponent extends ToggleComponent {

}
