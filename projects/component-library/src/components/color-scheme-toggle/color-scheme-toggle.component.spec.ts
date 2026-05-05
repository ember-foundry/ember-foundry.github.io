import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, afterEach, beforeEach, vi} from 'vitest';
import {ColorSchemeToggleComponent} from './color-scheme-toggle.component';
import {pause} from '../../helpers/pause';

describe('ColorSchemeToggleComponent', () => {
  let component: ColorSchemeToggleComponent;
  let fixture: ComponentFixture<ColorSchemeToggleComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorSchemeToggleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ColorSchemeToggleComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(async () => {
    await pause(2)
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start in light mode', async () => {
    expect(host.classList.contains('light')).toBe(true);
    expect(host.classList.contains('dark')).toBe(false);
    await expect(host).toMatchScreenshot('color-scheme-toggle-light');
  });

  it('should toggle to dark mode and emit dark on click', async () => {
    const emitSpy = vi.spyOn(component.color_scheme_change, 'emit');
    await pause(2)

    host.click();
    await pause(2)

    fixture.detectChanges();

    expect(host.classList.contains('dark')).toBe(true);
    expect(host.classList.contains('light')).toBe(false);
    expect(emitSpy).toHaveBeenCalledWith('dark');

    await expect(host).toMatchScreenshot('color-scheme-toggle-dark');
  });

  it('should toggle back to light mode and emit light on second click', async () => {
    const emitSpy = vi.spyOn(component.color_scheme_change, 'emit');

    host.click();
    await pause(2);

    fixture.detectChanges();

    host.click();
    await pause(2);

    fixture.detectChanges();

    expect(host.classList.contains('light')).toBe(true);
    expect(host.classList.contains('dark')).toBe(false);
    expect(emitSpy).toHaveBeenLastCalledWith('light');
    await expect(host).toMatchScreenshot('color-scheme-toggle-light');
  });
});
