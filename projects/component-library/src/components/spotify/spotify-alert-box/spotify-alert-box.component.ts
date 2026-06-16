import { ChangeDetectionStrategy, Component } from '@angular/core';
import {LucideInfo, LucideX} from '@lucide/angular';

@Component({
  selector: 'mbr-spotify-alert-box',
  imports: [
    LucideInfo,
    LucideX
  ],
  templateUrl: './spotify-alert-box.component.html',
  styleUrl: './spotify-alert-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotifyAlertBoxComponent {

}
