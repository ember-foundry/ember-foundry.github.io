import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, input, signal, viewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'mbr-input-quantity-critter',
  templateUrl: './input-quantity-critter.component.html',
  styleUrls: [
    '../../../themes/critter/critter.scss',
    './input-quantity-critter.component.scss'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputQuantityCritterComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputQuantityCritterComponent implements ControlValueAccessor {

  public min = input<number>(0);
  public max = input<number>(100);
  public step = input<number>(1);

  protected readonly value = signal<number>(1);
  public disabled = signal<boolean>(false);

  private readonly input_element = viewChild.required<ElementRef<HTMLInputElement>>('input');

  private onChange: (value: number) => void = () => {
    // Not implemented
  };

  protected onTouched: () => void = () => {
    // Not implemented
  };

  protected increment(): void {
    if (this.disabled()) return;

    const newValue = Math.min(this.value() + this.step(), this.max());
    this.updateValue(newValue);
  }

  protected decrement(): void {
    if (this.disabled()) return;

    const newValue = Math.max(this.value() - this.step(), this.min());
    this.updateValue(newValue);
  }

  protected changed_manually(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    let parsedValue = parseInt(inputEl.value, 10);

    if (isNaN(parsedValue)) {
      parsedValue = this.min();
    }

    const clampedValue = Math.max(this.min(), Math.min(parsedValue, this.max()));
    this.updateValue(clampedValue);
  }

  private updateValue(newValue: number): void {
    this.input_element().nativeElement.style.animation = 'none';
    this.input_element().nativeElement.getClientRects();
    this.input_element().nativeElement.style.animation = '';

    this.value.set(newValue);
    this.onChange(newValue);
    this.onTouched();
  }

  public writeValue(value: number): void {
    this.value.set(value ?? this.min());
  }

  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
