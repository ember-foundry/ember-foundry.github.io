import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {MultiToggleSwitchComponent} from './multi-toggle-switch.component';

describe('MultiToggleSwitchComponent', () => {
  let component: MultiToggleSwitchComponent;
  let fixture: ComponentFixture<MultiToggleSwitchComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiToggleSwitchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MultiToggleSwitchComponent);
    host = fixture.nativeElement;
    component = fixture.componentInstance;

    fixture.componentRef.setInput('options', ['Yes', 'No', 'Maybe']);
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match visually', async () => {
    expect(host).toHaveStyle('font-size: 14px');
    expect(host).toHaveStyle('border-radius: 21px');
    expect(host).toHaveStyle('background: #1c202a');
    expect(host).toHaveStyle('color: white');

    await expect(host).toMatchScreenshot('multi-toggle-switch');
  });

  it('should render all options', () => {
    const options = fixture.nativeElement.querySelectorAll('.option');

    expect(options.length).toBe(3);
    expect(options[0].textContent.trim()).toBe('Yes');
    expect(options[1].textContent.trim()).toBe('No');
    expect(options[2].textContent.trim()).toBe('Maybe');
  });

  it('should render the switch element', () => {
    const switchElement = fixture.nativeElement.querySelector('.switch');

    expect(switchElement).toBeTruthy();
  });

  it('should select the first option by default', () => {
    expect(component.selected_index()).toBe(0);
    expect(host.style.getPropertyValue('--index')).toBe('0');
  });

  it('should set the items length CSS variable from the options input', () => {
    expect(host.style.getPropertyValue('--items-length')).toBe('3');
  });

  it('should update the selected index when an option is clicked', () => {
    const options = host.querySelectorAll<HTMLElement>('.option');

    options[1].click();
    fixture.detectChanges();

    expect(component.selected_index()).toBe(1);
    expect(host.style.getPropertyValue('--index')).toBe('1');
  });

  it('should emit the selected index and value when an option is clicked', () => {
    const emitSpy = vi.spyOn(component.selected_index_changed, 'emit');
    const options = host.querySelectorAll<HTMLElement>('.option');

    options[1].click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenCalledWith({
      index: 1,
      value: 'No'
    });
  });

  it('should emit the first option when selected again after another option', () => {
    const emitSpy = vi.spyOn(component.selected_index_changed, 'emit');
    const options = host.querySelectorAll<HTMLElement>('.option');

    options[1].click();
    fixture.detectChanges();

    options[0].click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenLastCalledWith({
      index: 0,
      value: 'Yes'
    });
  });

  it('should support more than two options', () => {
    fixture.componentRef.setInput('options', ['Preview', 'Code', 'Docs']);
    fixture.detectChanges();

    const options = host.querySelectorAll<HTMLElement>('.option');

    expect(options.length).toBe(3);
    expect(options[2].textContent.trim()).toBe('Docs');
    expect(host.style.getPropertyValue('--items-length')).toBe('3');

    options[2].click();
    fixture.detectChanges();

    expect(component.selected_index()).toBe(2);
    expect(host.style.getPropertyValue('--index')).toBe('2');
  });
});
