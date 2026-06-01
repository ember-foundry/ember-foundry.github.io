import {InputSignal} from '@angular/core';

export abstract class ComponentWithVariants {
  abstract variant: InputSignal<string|undefined>
}
