import {booleanAttribute, Directive, input, model, output} from '@angular/core';

@Directive({
  selector: 'input[type="checkbox"][mbrToggle]',
  host: {
    '(click)': 'toggle()',
    '[checked]': 'checked()',
    '[disabled]': 'disabled()',
    '[class.checked]': 'checked()',
    '[class.disabled]': 'disabled()'
  }
})
export class ToggleDirective {
  public checked = model(false);
  public disabled = input(false, {transform: booleanAttribute});
  public changed = output<boolean>();

  protected toggle(): void {
    if(this.disabled()) {
      return;
    }
    this.checked.update(_ => !_);
    this.changed.emit(this.checked());
  }
}
