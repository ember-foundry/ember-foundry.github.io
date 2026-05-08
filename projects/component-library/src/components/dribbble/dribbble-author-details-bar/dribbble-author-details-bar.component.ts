import { ChangeDetectionStrategy, Component } from '@angular/core';
import {AvatarComponent} from 'component-library/components/avatar/avatar.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-dribbble-author-details-bar',
  imports: [
    AvatarComponent
  ],
  templateUrl: './dribbble-author-details-bar.component.html',
  styleUrl: './dribbble-author-details-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DribbbleAuthorDetailsBarComponent {

}
