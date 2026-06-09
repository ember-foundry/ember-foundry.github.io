import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ToggleDirective} from 'component-library';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[type="checkbox"][mbrCheckbox]',
  template: ``,
  styleUrl: './checkbox.component.scss',
  hostDirectives: [
    {
      directive: ToggleDirective,
      inputs: ['checked', 'disabled'],
      outputs: ['changed', 'checkedChange']
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {}
