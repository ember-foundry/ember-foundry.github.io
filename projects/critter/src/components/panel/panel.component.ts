import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'mbr-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent {
  public title = input.required<string>();
}
