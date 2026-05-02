import {ChangeDetectionStrategy, Component, effect, input, model, output} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-toggle-switch',
  imports: [],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss',
  host: {
    '(click)': 'selected.update(_ => !_)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleSwitchComponent {
  public options = input.required<[string, string]>();
  public selected = model<boolean>(false);
  public state_change = output<boolean>();
  private on_selected_change = effect(() => this.state_change.emit(this.selected()));
}
