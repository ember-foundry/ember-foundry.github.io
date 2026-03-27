import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {form} from '@angular/forms/signals';

const states = ['human', 'cpu', 'inactive'] as const;
type PlayerState = typeof states[number];

const AVAILABLE_CHARACTERS: {state: PlayerState, name: string, image: string}[] = [
  {
    state: 'human',
    name: 'Rory',
    image: 'http://localhost:4200/assets/images/pose-rory-transparent.png'
  },
  {
    state: 'human',
    name: 'Ahmed',
    image: 'http://localhost:4200/assets/images/pose-ahmed-transparent.png'
  },
  {
    state: 'human',
    name: 'Kim',
    image: 'http://localhost:4200/assets/images/pose-kim-transparent.png'
  },
  {
    state: 'human',
    name: 'Tumi',
    image: 'http://localhost:4200/assets/images/pose-tumi-transparent.png'
  }
];

@Component({
  selector: 'player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerSelectComponent {
    protected players = signal(AVAILABLE_CHARACTERS);
    private readonly player_selection_form = form(this.players);

    protected cycle_player_state(player_to_update: typeof AVAILABLE_CHARACTERS[number]): void {
      const current_state_index = states.indexOf(player_to_update.state);

      this.players.update((players) => players.map(player => {
        if(player.name !== player_to_update.name) {
          return player;
        }
        player.state = states[(current_state_index + 1) % states.length];
        return player;
      }));

    }
}
