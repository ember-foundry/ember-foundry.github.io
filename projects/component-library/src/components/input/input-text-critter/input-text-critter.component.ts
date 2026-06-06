import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[type="text"][mbrCritter]',
  templateUrl: './input-text-critter.component.html',
  styleUrls: [
    '../../../themes/critter/critter.scss',
    './input-text-critter.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextCritterComponent {}
