import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {BaseComponent} from '../_base/base.component';

@Component({
  selector: 'lib-dice-flat',
  templateUrl: 'dice-flat.component.html',
  styleUrl: 'dice-flat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiceFlatComponent extends BaseComponent {
  public size = input<number>(188);
  public value = input<number|undefined>();

  protected border_thickness = computed<number>(() => this.size() * 0.085);
  protected border_radius = computed<number>(() => this.size() * 0.125);
  protected border_width = computed<number>(() => this.size() - this.border_thickness());
  protected circle_radius = computed<number>(() => this.size() * 0.085);
  protected inner_width = computed<number>(() => this.size() - this.border_thickness() * 2);
  protected view_box = computed<string>(() => `0 0 ${this.size()} ${this.size()}`);
}
