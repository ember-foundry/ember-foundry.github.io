import {ChangeDetectionStrategy, Component, model, output, signal} from '@angular/core';

const states = ['human', 'cpu', 'inactive'] as const;

export interface SelectedPlayer {
  state: PlayerState;
  id: string;
}

export interface PlayerAvailableForSelection extends SelectedPlayer {
  color: string;
  image_url: string;
}

type PlayerState = typeof states[number];

@Component({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'mbr-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MBRPlayerSelectComponent {

  public players = model<PlayerAvailableForSelection[]>([]);
  public ready = output<SelectedPlayer[]>();
  protected valid = signal(true);

  protected cycle_player_state(player_to_update: PlayerAvailableForSelection): void {
    const current_state_index = states.indexOf(player_to_update.state);

    this.players.update((players) => players!.map(player => {
      if (player.image_url !== player_to_update.image_url) {
        return player;
      }
      player.state = states[(current_state_index + 1) % states.length];
      return player;
    }));
  }

  protected get_human_player_index(index: number): number {
    return this.players()!
      .slice(0, index)
      .filter(p => p.state === 'human')
      .length;
  }

  protected async start(): Promise<void> {
    const players = this.players()!.filter(p => p.state !== 'inactive');
    if(players.length < 2){
      this.valid.set(false);
      return;
    }
    this.valid.set(true);
    this.ready.emit(players);
  }
}
