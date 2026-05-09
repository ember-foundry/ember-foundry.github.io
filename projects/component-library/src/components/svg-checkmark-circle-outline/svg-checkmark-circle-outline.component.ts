import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {SVGCheckmarkCircleOutlineAlexanderHaniotisComponent} from './svg-checkmark-circle-outline-alexander-haniotis/svg-checkmark-circle-outline-alexander-haniotis.component';
import {SVGCheckmarkCircleOutlineSeanMichaelComponent} from './svg-checkmark-circle-outline-sean-michael/svg-checkmark-circle-outline-sean-michael.component';

@Component({
  selector: 'mbr-svg-checkmark-circle-outline',
  imports: [
    SVGCheckmarkCircleOutlineAlexanderHaniotisComponent,
    SVGCheckmarkCircleOutlineSeanMichaelComponent
  ],
  templateUrl: './svg-checkmark-circle-outline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SVGCheckmarkCircleOutlineComponent {
  public variant = input<'alexander-haniotis' | 'sean-michael'>('alexander-haniotis');
}
