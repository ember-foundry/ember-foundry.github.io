import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ToggleComponent} from '../toggle/toggle.component';

@Component({
  selector: 'mbr-toggle-switch-seesaw',
  templateUrl: './toggle-switch-seesaw.component.html',
  styleUrl: './toggle-switch-seesaw.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleSwitchSeesawComponent extends ToggleComponent {
}
