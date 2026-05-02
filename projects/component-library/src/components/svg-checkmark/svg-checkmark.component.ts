import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-svg-checkmark',
  templateUrl: './svg-checkmark.component.html',
  styleUrl: './svg-checkmark.component.scss',
  host: {
    '[attr.aria-hidden]': 'true',
    '[attr.focusable]': 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SVGCheckmarkComponent {

}
