import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import {TooltipDirective} from '../../directives/tooltip/tooltip.directive';
import {SunburstChartLegendComponent} from '../sunburst-chart-legend/sunburst-chart-legend.component';
import {CurrencyPipe} from '@angular/common';

export interface SunburstItem {
  label: string;
  tooltip: string;
  value: number;
  color?: string;
  children?: SunburstItem[];
}

@Component({
  selector: 'mbr-sunburst-chart',
  templateUrl: './sunburst-chart.component.html',
  styleUrl: './sunburst-chart.component.scss',
  imports: [
    TooltipDirective,
    SunburstChartLegendComponent,
    CurrencyPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SunburstChartComponent {

  public hierarchy = input.required<SunburstItem[]>();
  public show_legend = input<boolean>(true);

  protected svg_size = signal(550);
  protected svg_half_size = computed(() => this.svg_size() / 2);

  protected root_item = computed<SunburstItem>(() => this.hierarchy()[0]);

  protected root_children = computed(() => this.root_item()?.children ?? []);

  protected flattened_hierarchy = computed<any[]>(() => {
    const root = this.root_item();
    const items = this.root_children();
    const result: any[] = [];
    const center = this.svg_half_size();

    const flatten = (items: SunburstItem[], r_in: number, r_out: number, start_angle: number, parent_angle_span: number, parent_total_val: number) => {
      if (parent_total_val <= 0) return;
      let current_angle = start_angle;

      for (const item of items) {
        const slice_angle = (item.value / parent_total_val) * parent_angle_span;
        if (slice_angle <= 0) continue;

        const mid_angle = current_angle + (slice_angle / 2);
        const text_r = (r_in + r_out) / 2;
        const tx = center + text_r * Math.cos((mid_angle - 90) * Math.PI / 180);
        const ty = center + text_r * Math.sin((mid_angle - 90) * Math.PI / 180);

        let rot = mid_angle;
        if (rot > 90 && rot < 270) { rot -= 180; }

        result.push({
          ...item,
          path: this.get_arc_path(center, center, r_in, r_out, current_angle, current_angle + slice_angle),
          tx,
          ty,
          rot: rot - 90,
          slice_angle,
          fontSize: slice_angle < 10 ? '10' : (r_in < 150 ? '14' : '11'),
          val_str: `£${Math.round(item.value).toLocaleString()}`
        });

        if (item.children && item.children.length > 0) {
          flatten(item.children, r_out + 5, r_out + 95, current_angle, slice_angle, item.value);
        }

        current_angle += slice_angle;
      }
    };

    flatten(items, 80, 175, 0, 360, root.value);
    return result;
  });

  protected get_arc_path(cx: number, cy: number, r_in: number, r_out: number, start_deg: number, end_deg: number): string {
    const start_rad = (start_deg - 90) * Math.PI / 180;
    const end_rad = (end_deg - 90) * Math.PI / 180;

    const x1 = cx + r_in * Math.cos(start_rad);
    const y1 = cy + r_in * Math.sin(start_rad);
    const x2 = cx + r_out * Math.cos(start_rad);
    const y2 = cy + r_out * Math.sin(start_rad);
    const x3 = cx + r_out * Math.cos(end_rad);
    const y3 = cy + r_out * Math.sin(end_rad);
    const x4 = cx + r_in * Math.cos(end_rad);
    const y4 = cy + r_in * Math.sin(end_rad);

    const large_arc = end_deg - start_deg > 180 ? 1 : 0;

    return `M ${x1} ${y1} L ${x2} ${y2} A ${r_out} ${r_out} 0 ${large_arc} 1 ${x3} ${y3} L ${x4} ${y4} A ${r_in} ${r_in} 0 ${large_arc} 0 ${x1} ${y1} Z`;
  }
}
