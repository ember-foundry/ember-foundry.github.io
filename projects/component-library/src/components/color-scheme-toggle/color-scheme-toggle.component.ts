import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

let unique_color_scheme_component_id = 0;

@Component({
  selector: 'mbr-color-scheme-toggle',
  templateUrl: './color-scheme-toggle.component.html',
  styleUrl: './color-scheme-toggle.component.scss',
  host: {
    '[class]': 'scheme()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorSchemeToggleComponent extends ToggleComponent {
  protected scheme = computed<'light' | 'dark'>(() => this.active() ? 'dark' : 'light');
  protected mask_id = computed<string>(() => `moon-mask-${unique_color_scheme_component_id++}`);
}
