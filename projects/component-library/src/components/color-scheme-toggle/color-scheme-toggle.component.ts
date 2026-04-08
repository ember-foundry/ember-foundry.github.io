import {ChangeDetectionStrategy, Component, model, output} from '@angular/core';
import {BaseComponent} from '../_base/base.component';

@Component({
  selector: 'mbr-color-scheme-toggle-mask',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class ColorSchemeToggleMaskComponent {}

@Component({
  selector: 'mbr-color-scheme-toggle',
  templateUrl: './color-scheme-toggle.component.html',
  styleUrl: './color-scheme-toggle.component.scss',
  host: {
    '[class]': 'scheme()',
    '(click)': 'toggle()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSchemeToggleComponent extends BaseComponent {
  public scheme = model<'light' | 'dark'>('light')
  public color_scheme_change = output<'light' | 'dark'>();

  protected toggle = () => {
    this.scheme.update(s => s === 'light' ? 'dark' : 'light')
    this.color_scheme_change.emit(this.scheme());
  }
}
