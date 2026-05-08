import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'mbr-svg-checkmark-circle-outline-sean-michael',
  templateUrl: './svg-checkmark-circle-outline-sean-michael.component.html',
  styleUrl: '../svg-checkmark-circle-outline.component.scss',
  host: {
    '[attr.aria-hidden]': 'true',
    '[attr.focusable]': 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SVGCheckmarkCircleOutlineSeanMichaelComponent {}
