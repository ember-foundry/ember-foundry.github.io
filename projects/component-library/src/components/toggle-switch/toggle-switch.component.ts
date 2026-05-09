import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ToggleComponent} from '../toggle/toggle.component';

@Component({
  selector: 'mbr-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleSwitchComponent extends ToggleComponent {
  public options = input.required<[string, string]>();
}
