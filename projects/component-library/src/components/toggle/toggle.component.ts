import {ChangeDetectionStrategy, Component, effect, model, output} from '@angular/core';

@Component({
  selector: 'mbr-toggle',
  templateUrl: './toggle.component.html',
  host: {
    '(click)': 'toggle()',
    '[class.active]': 'active()',
    '[class.disabled]': 'disabled()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  public active = model<boolean>(false);
  public disabled = model<boolean>(false);
  public state_change = output<boolean>();
  private on_active_change = effect(() => this.state_change.emit(this.active()));

  protected toggle(): void {
    if(this.disabled()) {
      return;
    }
    this.active.update(_ => !_);
  }
}
