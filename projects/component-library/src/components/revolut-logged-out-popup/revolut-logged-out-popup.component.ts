import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-revolut-logged-out-popup',
  templateUrl: './revolut-logged-out-popup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RevolutLoggedOutPopupComponent {}
