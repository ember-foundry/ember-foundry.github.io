import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[type=text][mbrInput]',
  template: '',
  styleUrl: './input-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent {}
