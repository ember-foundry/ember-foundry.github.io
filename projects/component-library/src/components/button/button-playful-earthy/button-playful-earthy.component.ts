import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[mbrButtonPlayfulEarthy], a[mbrButtonPlayfulEarthy]',
  templateUrl: './button-playful-earthy.component.html',
  styleUrls: [
    '../button.component.scss',
    './button-playful-earthy.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonPlayfulEarthyComponent {

}
