import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ToggleComponent} from '../../toggle/toggle.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-ko-fi-menu-toggle',
  templateUrl: './ko-fi-menu-toggle.component.html',
  styleUrl: './ko-fi-menu-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KoFiMenuToggleComponent extends ToggleComponent {}
