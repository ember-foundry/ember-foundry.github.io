import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {ToggleSwitchComponent} from './toggle-switch.component';

describe('ToggleSwitchComponent', () => {
  let component: ToggleSwitchComponent;
  let fixture: ComponentFixture<ToggleSwitchComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSwitchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToggleSwitchComponent);
    host = fixture.nativeElement;
    component = fixture.componentInstance;

    fixture.componentRef.setInput('options', ['Preview', 'Code']);
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

    await expect(host).toMatchScreenshot('toggle-switch');
  });

  it('should render both options', () => {
    const options = fixture.nativeElement.querySelectorAll('.option');

    expect(options.length).toBe(2);
    expect(options[0].textContent.trim()).toBe('Preview');
    expect(options[1].textContent.trim()).toBe('Code');
  });

  it('should be inactive by default', () => {
    expect(component.active()).toBe(false);
  });

  it('should not apply the active class to the switch by default', () => {
    const switchElement = fixture.nativeElement.querySelector('.switch');

    expect(switchElement.classList.contains('active')).toBe(false);
  });

  it('should toggle active when clicked', () => {
    fixture.nativeElement.click();
    fixture.detectChanges();

    expect(component.active()).toBe(true);

    fixture.nativeElement.click();
    fixture.detectChanges();

    expect(component.active()).toBe(false);
  });

  it('should apply the active class to the switch when active',() => {
    fixture.nativeElement.click();
    fixture.detectChanges();

    const switchElement = fixture.nativeElement

    expect(switchElement.classList.contains('active')).toBe(true);
  });

  it('should emit the active state when clicked', () => {
    const emitSpy = vi.spyOn(component.state_change, 'emit');

    fixture.nativeElement.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenCalledWith(true);
  });

  it('should emit false when clicked after being active', () => {
    const emitSpy = vi.spyOn(component.state_change, 'emit');

    host.click();
    fixture.detectChanges();

    host.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenLastCalledWith(false);
  });
});
