import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'mbr-svg-checkmark-circle-filled',
  templateUrl: './svg-checkmark-circle-filled.component.html',
  styleUrl: './svg-checkmark-circle-filled.component.scss',
  host: {
    '[attr.aria-hidden]': 'true',
    '[attr.focusable]': 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SVGCheckmarkCircleFilledComponent {

}
