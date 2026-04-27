import {ChangeDetectionStrategy, Component, input, model, output} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-toggle-switch',
  imports: [],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss',
  host: {
    '(click)': 'selected.update(_ => !_); state_change.emit()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleSwitchComponent {
  public options = input.required<[string, string]>();
  public selected = model(false);
  public state_change = output<void>();
}
