import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ToggleDirective} from '../../../directives/toggle/toggle.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[type="checkbox"][mbrPlayfulEarthy]',
  templateUrl: './checkbox-playful-earthy.component.html',
  styleUrl: './checkbox-playful-earthy.component.scss',
  hostDirectives: [
    {
      directive: ToggleDirective,
      inputs: ['checked', 'disabled'],
      outputs: ['changed', 'checkedChange']
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxPlayfulEarthyComponent {}
