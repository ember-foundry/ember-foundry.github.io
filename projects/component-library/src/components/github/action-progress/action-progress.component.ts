import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BaseComponent} from '../../_base/base.component';

@Component({
  selector: 'lib-action-progress',
  templateUrl: './action-progress.component.html',
  styleUrl: 'action-progress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionProgressComponent extends BaseComponent {}
