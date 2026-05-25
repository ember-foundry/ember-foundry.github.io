import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[mbrButtonBasic]',
  templateUrl: './button-basic.component.html',
  styleUrls: [
    '../button.component.scss',
    './button-basic.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonBasicComponent {

}
