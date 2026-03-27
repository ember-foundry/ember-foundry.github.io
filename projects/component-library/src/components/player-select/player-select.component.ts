import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

const states = ['human', 'cpu', 'inactive'] as const;
type PlayerState = typeof states[number];

const AVAILABLE_CHARACTERS: { state: PlayerState, image: string }[] = [
  {
    state: 'human',
    image: 'http://localhost:4200/assets/images/pose-rory-transparent.png'
  },
  {
    state: 'human',
    image: 'http://localhost:4200/assets/images/pose-ahmed-transparent.png'
  },
  {
    state: 'human',
    image: 'http://localhost:4200/assets/images/pose-kim-transparent.png'
  },
  {
    state: 'human',
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

  protected cycle_player_state(player_to_update: typeof AVAILABLE_CHARACTERS[number]): void {
    const current_state_index = states.indexOf(player_to_update.state);

    this.players.update((players) => players.map(player => {
      if (player.image !== player_to_update.image) {
        return player;
      }
      player.state = states[(current_state_index + 1) % states.length];
      return player;
    }));
  }

  protected get_human_player_index(index: number): number {
    return this.players()
      .slice(0, index)
      .filter(p => p.state === 'human')
      .length;
  }

  protected async start(): Promise<void> {
    console.log('players', this.players().filter(p => p.state !== 'inactive'));
  }
}
