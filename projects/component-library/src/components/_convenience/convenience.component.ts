import {ChangeDetectionStrategy, Component, InputSignal} from '@angular/core';

@Component({
  selector: 'mbr-convenience',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class ConvenienceComponent {
  abstract variant: InputSignal<string|undefined>
}
