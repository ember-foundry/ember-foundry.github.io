import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';
import {BaseComponent} from '../_base/base.component';

@Component({
  selector: 'lib-ludo-player-ui-front',
  templateUrl: 'ludo-player-ui-front.component.html',
  styleUrl: 'ludo-player-ui-front.component.scss',
  host: {
    '[class.active]': 'is_my_turn()',
    '[style.--character-color]': 'color()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LudoPlayerUIFrontComponent extends BaseComponent {
  public avatar = input.required<string>();
  public color = input.required<'red' | 'blue' | 'green' | 'yellow'>();
  public is_my_turn = model<boolean>(false);
  public last_roll = model<number | null>(null);
  public name = input.required<string>();
}
