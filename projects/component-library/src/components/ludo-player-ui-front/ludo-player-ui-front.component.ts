import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';
import {BaseComponent} from '../_base/base.component';
import {DiceFlatComponent} from '../dice-flat/dice-flat.component';
import {LucideSkull, LucideSwords} from '@lucide/angular';

@Component({
  selector: 'mbr-ludo-player-ui-front',
  templateUrl: 'ludo-player-ui-front.component.html',
  styleUrl: 'ludo-player-ui-front.component.scss',
  host: {
    '[class.active]': 'is_my_turn()',
    '[style.--character-color]': 'color()'
  },
  imports: [
    DiceFlatComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LudoPlayerUIFrontComponent extends BaseComponent {
  public avatar = input.required<string>();
  public color = input.required<'red' | 'blue' | 'green' | 'yellow'>();
  public is_my_turn = model<boolean>(false);
  public last_roll = model<number | undefined>(undefined);
  public name = input.required<string>();
}
