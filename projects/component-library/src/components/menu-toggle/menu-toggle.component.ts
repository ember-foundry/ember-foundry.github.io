import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {KoFiMenuToggleComponent} from '../ko-fi/ko-fi-menu-toggle/ko-fi-menu-toggle.component';

@Component({
  selector: 'mbr-menu-toggle',
  imports: [
    KoFiMenuToggleComponent
  ],
  templateUrl: './menu-toggle.component.html',
  styleUrl: './menu-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuToggleComponent {
  variant = input<'ko-fi'>('ko-fi');
}
