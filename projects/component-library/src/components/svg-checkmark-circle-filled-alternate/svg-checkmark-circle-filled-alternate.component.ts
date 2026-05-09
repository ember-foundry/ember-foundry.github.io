import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'mbr-svg-checkmark-circle-filled-alternate',
  templateUrl: './svg-checkmark-circle-filled-alternate.component.html',
  styleUrl: './svg-checkmark-circle-filled-alternate.component.scss',
  host: {
    '[attr.aria-hidden]': 'true',
    '[attr.focusable]': 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SVGCheckmarkCircleFilledAlternateComponent {
}
