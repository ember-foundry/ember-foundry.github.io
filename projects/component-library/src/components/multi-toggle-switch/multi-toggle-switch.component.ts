import {ChangeDetectionStrategy, Component, effect, input, model, output} from '@angular/core';

@Component({
  selector: 'mbr-multi-toggle-switch',
  templateUrl: './multi-toggle-switch.component.html',
  styleUrl: './multi-toggle-switch.component.scss',
  host: {
    '[style.--selected-index]': 'selected_index()',
    '[style.--items-length]': 'options().length'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiToggleSwitchComponent {
  public options = input.required<string[]>();
  public selected_index = model<number>(0);
  public selected_index_changed = output<{ index: number, value: string }>();

  private on_selected_change = effect(() => {
    const index = this.selected_index();
    const value = this.options()[index];
    this.selected_index_changed.emit({
      index,
      value
    })
  });
}
