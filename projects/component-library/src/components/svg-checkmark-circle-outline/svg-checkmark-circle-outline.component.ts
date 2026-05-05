import {ChangeDetectionStrategy, Component, computed} from '@angular/core';

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

  protected size = 52;
  protected stroke_width = 4;
  protected center = computed<number>(() => this.size / 2);
  protected circle_radius = computed<number>(() => (this.size / 2) - (this.stroke_width / 2));
}
