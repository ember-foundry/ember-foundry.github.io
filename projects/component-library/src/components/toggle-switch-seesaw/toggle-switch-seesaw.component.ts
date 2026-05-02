import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';

@Component({
  //eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-toggle-switch-seesaw',
  imports: [],
  templateUrl: './toggle-switch-seesaw.component.html',
  styleUrl: './toggle-switch-seesaw.component.scss',
  host: {
    '(click)': 'toggle()',
    '[class.active]': 'active()',
    '[class.disabled]': 'disabled()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleSwitchSeesawComponent {
  public active = model<boolean>(false);
  public disabled = input<boolean>(false);

  protected toggle(): void {
    if(this.disabled()) {
      return;
    }
    this.active.update(_ => !_);
  }
}
