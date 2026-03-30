import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'mbr-theme-customizer-trigger',
  templateUrl: './theme-customizer-trigger.component.html',
  styleUrl: './theme-customizer-trigger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeCustomizerTriggerComponent {}
