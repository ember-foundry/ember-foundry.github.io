import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'mbr-card-critter',
  templateUrl: './card-critter.component.html',
  styleUrl: './card-critter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardCritterComponent {}
