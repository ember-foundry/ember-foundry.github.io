import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import {BaseComponent} from 'component-library/components/_base/base.component';

@Component({
  selector: 'lib-dice-flat',
  templateUrl: 'dice-flat.component.html',
  styleUrl: 'dice-flat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiceFlatComponent extends BaseComponent {
  public border_thickness = input<number>(16);
  public size = input<number>(192);
  public value = input<number|undefined>();

  protected border_width = computed<number>(() => {
    return this.size() - this.border_thickness();
  });
}
