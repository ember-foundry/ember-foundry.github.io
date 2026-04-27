import {ChangeDetectionStrategy, Component, effect, input, model, output} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-multi-toggle-switch',
  imports: [],
  templateUrl: './multi-toggle-switch.component.html',
  styleUrl: './multi-toggle-switch.component.scss',
  host: {
    '[style.--index]': 'selected_index()',
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
