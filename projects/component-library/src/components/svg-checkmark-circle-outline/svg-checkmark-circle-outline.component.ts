import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-svg-checkmark-circle-outline',
  templateUrl: './svg-checkmark-circle-outline.component.html',
  styleUrl: './svg-checkmark-circle-outline.component.scss',
  host: {
    '[attr.aria-hidden]': 'true',
    '[attr.focusable]': 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SVGCheckmarkCircleOutlineComponent {

}
