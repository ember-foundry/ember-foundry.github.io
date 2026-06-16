import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LucideSettings} from '@lucide/angular';


@Component({
  selector: 'mbr-vuexy-theme-customizer-trigger',
  templateUrl: './vuexy-theme-customizer-trigger.component.html',
  styleUrl: './vuexy-theme-customizer-trigger.component.scss',
  imports: [
    LucideSettings
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VuexyThemeCustomizerTriggerComponent {
}
