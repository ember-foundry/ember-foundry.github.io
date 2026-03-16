import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {BaseComponent} from '../_base/base.component';

type PipKey =
  | 'top-left'
  | 'top-right'
  | 'center'
  | 'center-left'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-right';

interface PipPosition {
  key: PipKey;
  className: string;
  cx: number;
  cy: number;
}

@Component({
  selector: 'lib-dice-flat',
  templateUrl: 'dice-flat.component.html',
  styleUrl: 'dice-flat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiceFlatComponent extends BaseComponent {
  public size = input<number>(188);
  public value = input<number|undefined>(undefined);

  protected border_thickness = computed<number>(() => this.size() * 0.085);
  protected border_radius = computed<number>(() => this.size() * 0.125);
  protected border_width = computed<number>(() => this.size() - this.border_thickness());
  protected circle_radius = computed<number>(() => this.size() * 0.085);
  protected inner_width = computed<number>(() => this.size() - this.border_thickness() * 2);
  protected view_box = computed<string>(() => `0 0 ${this.size()} ${this.size()}`);

  protected is_valid_face = computed<boolean>(() => {
    const value = this.value();
    return value !== undefined && value >= 1 && value <= 6;
  });

  protected pip_positions = computed<Record<PipKey, PipPosition>>(() => {
    const border_thickness = this.border_thickness();
    const inner_width = this.inner_width();
    const one_third_inner_width = inner_width / 3;
    const one_sixth_inner_width = one_third_inner_width / 2;

    const left_column_x = border_thickness + one_sixth_inner_width;
    const right_column_x = this.size() - border_thickness - one_sixth_inner_width;

    const center = this.size() / 2;

    const top_row_y = border_thickness + one_sixth_inner_width;
    const bottom_row_y = this.size() - border_thickness - one_sixth_inner_width;

    return {
      'top-left': {
        key: 'top-left',
        className: 'top left',
        cx: left_column_x,
        cy: top_row_y
      },
      'top-right': {
        key: 'top-right',
        className: 'top right',
        cx: right_column_x,
        cy: top_row_y
      },
      'center': {
        key: 'center',
        className: 'center',
        cx: center,
        cy: center
      },
      'center-left': {
        key: 'center-left',
        className: 'center left',
        cx: left_column_x,
        cy: center
      },
      'center-right': {
        key: 'center-right',
        className: 'center right',
        cx: right_column_x,
        cy: center
      },
      'bottom-left': {
        key: 'bottom-left',
        className: 'bottom left',
        cx: left_column_x,
        cy: bottom_row_y
      },
      'bottom-right': {
        key: 'bottom-right',
        className: 'bottom right',
        cx: right_column_x,
        cy: bottom_row_y
      }
    };
  });

  protected pips_by_value = computed<PipPosition[]>(() => {
    const positions = this.pip_positions();

    switch (this.value()) {
      case 1:
        return [
          positions['center']
        ];
      case 2:
        return [
          positions['top-left'],
          positions['bottom-right']
        ];
      case 3:
        return [
          positions['top-left'],
          positions['center'],
          positions['bottom-right']
        ];
      case 4:
        return [
          positions['top-left'],
          positions['top-right'],
          positions['bottom-left'],
          positions['bottom-right']
        ];
      case 5:
        return [
          positions['top-left'],
          positions['top-right'],
          positions['center'],
          positions['bottom-left'],
          positions['bottom-right']
        ];
      case 6:
        return [
          positions['top-left'],
          positions['center-left'],
          positions['bottom-left'],
          positions['top-right'],
          positions['center-right'],
          positions['bottom-right']
        ];
      default:
        return [];
    }
  });
}
