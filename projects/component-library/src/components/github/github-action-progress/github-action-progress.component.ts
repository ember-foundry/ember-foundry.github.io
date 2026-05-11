import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BaseComponent} from '../../_base/base.component';

@Component({
  selector: 'mbr-github-action-progress',
  templateUrl: './github-action-progress.component.html',
  styleUrl: 'github-action-progress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubActionProgressComponent extends BaseComponent {
}
