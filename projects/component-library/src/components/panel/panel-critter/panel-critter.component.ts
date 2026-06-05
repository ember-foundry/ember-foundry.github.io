import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'mbr-panel-critter',
  templateUrl: './panel-critter.component.html',
  styleUrls: [
    '../../../themes/critter/critter.scss',
    './panel-critter.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelCritterComponent {
  public title = input.required<string>();
}
