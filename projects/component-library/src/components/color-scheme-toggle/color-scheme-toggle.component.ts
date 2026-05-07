import {ChangeDetectionStrategy, Component, effect, model, output} from '@angular/core';
import {ToggleComponent} from '../toggle/toggle.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-color-scheme-toggle',
  templateUrl: './color-scheme-toggle.component.html',
  styleUrl: './color-scheme-toggle.component.scss',
  host: {
    '[class]': 'scheme()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorSchemeToggleComponent extends ToggleComponent {
  public scheme = model<'light' | 'dark'>('light')
  public color_scheme_change = output<'light' | 'dark'>();

  private when_state_changed = effect(() => {
    const active = this.active();
    this.scheme.set(active ? 'dark' : 'light');
    this.color_scheme_change.emit(this.scheme());
  })
}
