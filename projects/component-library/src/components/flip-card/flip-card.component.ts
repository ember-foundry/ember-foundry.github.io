import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {BaseComponent} from '../_base/base.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.scss',
  host: {
    '[style.cursor]': `flip_on() === 'click' ? 'pointer' : undefined`,
    '[class]': 'host_css_classes()',
    '[class.flipped]': 'flipped()',
    '(click)': 'flip_on_click()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlipCardComponent extends BaseComponent {
  public flip_axis = input<'x' | 'y'>('y');
  public flip_on = input<'click' | 'hover'>('hover');
  public horizontal_alignment = input<'none' | 'center'>('center');
  public vertical_alignment = input<'none' | 'center'>('center');
  protected readonly host_css_classes = this.computed_host_css_classes_from('vertical_alignment', 'horizontal_alignment', 'flip_axis', 'flip_on');

  protected flipped = signal<boolean|undefined>(undefined);

  protected flip_on_click = () => {
    if(this.flip_on() === 'hover'){
      this.flipped.set(undefined);
      return
    }

    this.flipped.update(flipped => !flipped);
  }
}
