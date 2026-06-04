import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[mbrButtonChromatic], a[mbrButtonChromatic]',
  templateUrl: './button-monochromatic.component.html',
  styleUrls: [
    '../button.component.scss',
    './button-monochromatic.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonMonochromaticComponent {

}
