import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {ToggleSwitchSeesawComponent} from './toggle-switch-seesaw.component';

describe('ToggleSwitchSeesawComponent', () => {
  let component: ToggleSwitchSeesawComponent;
  let fixture: ComponentFixture<ToggleSwitchSeesawComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSwitchSeesawComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToggleSwitchSeesawComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match visually', async () => {
    expect(host).toHaveStyle('border-radius: 50px');
    expect(host).toHaveStyle('background: crimson');
    expect(host).toHaveStyle('width: 140px');
    expect(host).toHaveStyle('height: 70px');

    expect(host.querySelector('.circle')).toHaveStyle('background-color: white');
    expect(host.querySelector('.circle')).toHaveStyle('border-radius: 50%');
    expect(host.querySelector('.circle')).toHaveStyle('height: 50px');
    expect(host.querySelector('.circle')).toHaveStyle('width: 50px');

    await expect(host).toMatchScreenshot('toggle-switch-seesaw');
  });

  it('should render the circle element', () => {
    const circle = host.querySelector('.circle');

    expect(circle).toBeTruthy();
  });

  it('should be inactive by default', () => {
    expect(component.active()).toBe(false);
    expect(host.classList.contains('active')).toBe(false);
  });

  it('should not be disabled by default', () => {
    expect(component.disabled()).toBe(false);
    expect(host.classList.contains('disabled')).toBe(false);
  });

  it('should toggle active to true when clicked', () => {
    host.click();
    fixture.detectChanges();

    expect(component.active()).toBe(true);
    expect(host.classList.contains('active')).toBe(true);
  });

  it('should toggle active back to false when clicked twice', () => {
    host.click();
    fixture.detectChanges();

    host.click();
    fixture.detectChanges();

    expect(component.active()).toBe(false);
    expect(host.classList.contains('active')).toBe(false);
  });

  it('should apply the active host class when active is true', () => {
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();

    expect(component.active()).toBe(true);
    expect(host.classList.contains('active')).toBe(true);
  });

  it('should apply the disabled host class when disabled is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    expect(component.disabled()).toBe(true);
    expect(host.classList.contains('disabled')).toBe(true);
  });

  it('should not toggle when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    host.click();
    fixture.detectChanges();

    expect(component.active()).toBe(false);
    expect(host.classList.contains('active')).toBe(false);
  });

  it('should keep the current active state when clicked while disabled', () => {
    fixture.componentRef.setInput('active', true);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    host.click();
    fixture.detectChanges();

    expect(component.active()).toBe(true);
    expect(host.classList.contains('active')).toBe(true);
  });
});
