import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {ToggleSwitchComponent} from './toggle-switch.component';

describe('ToggleSwitchComponent', () => {
  let component: ToggleSwitchComponent;
  let fixture: ComponentFixture<ToggleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSwitchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToggleSwitchComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('options', ['Preview', 'Code']);
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render both options', () => {
    const options = fixture.nativeElement.querySelectorAll('.option');

    expect(options.length).toBe(2);
    expect(options[0].textContent.trim()).toBe('Preview');
    expect(options[1].textContent.trim()).toBe('Code');
  });

  it('should be unselected by default', () => {
    expect(component.selected()).toBe(false);
  });

  it('should not apply the selected class to the switch by default', () => {
    const switchElement = fixture.nativeElement.querySelector('.switch');

    expect(switchElement.classList.contains('selected')).toBe(false);
  });

  it('should toggle selected when clicked', () => {
    fixture.nativeElement.click();
    fixture.detectChanges();

    expect(component.selected()).toBe(true);

    fixture.nativeElement.click();
    fixture.detectChanges();

    expect(component.selected()).toBe(false);
  });

  it('should apply the selected class to the switch when selected', () => {
    fixture.nativeElement.click();
    fixture.detectChanges();

    const switchElement = fixture.nativeElement.querySelector('.switch');

    expect(switchElement.classList.contains('selected')).toBe(true);
  });

  it('should emit the selected state when clicked', () => {
    const emitSpy = vi.spyOn(component.state_change, 'emit');

    fixture.nativeElement.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenCalledWith(true);
  });

  it('should emit false when clicked after being selected', () => {
    const emitSpy = vi.spyOn(component.state_change, 'emit');

    fixture.nativeElement.click();
    fixture.detectChanges();

    fixture.nativeElement.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenLastCalledWith(false);
  });
});
