import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {SunburstItem} from '../sunburst-chart/sunburst-chart.component';

@Component({
  selector: 'mbr-sunburst-chart-legend',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './sunburst-chart-legend.component.html',
  styleUrl: './sunburst-chart-legend.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SunburstChartLegendComponent {
  hierarchy = input.required<SunburstItem[]>();
}
