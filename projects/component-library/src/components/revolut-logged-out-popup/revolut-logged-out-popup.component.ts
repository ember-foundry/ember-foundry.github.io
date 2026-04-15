import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-revolut-logged-out-popup',
  imports: [],
  templateUrl: './revolut-logged-out-popup.component.html',
  styleUrl: './revolut-logged-out-popup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RevolutLoggedOutPopupComponent {}
