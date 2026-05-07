import {ChangeDetectionStrategy, Component, effect, model, output} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-toggle',
  templateUrl: './toggle.component.html',
  host: {
    '[class.active]': 'active()',
    '(click)': 'active.update(i => !i)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  public active = model<boolean>(false);
  public state_change = output<boolean>();
  private on_active_change = effect(() => this.state_change.emit(this.active()));
}
