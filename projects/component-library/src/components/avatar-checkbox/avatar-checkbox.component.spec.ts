import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, beforeEach, it} from 'vitest';
import {AvatarCheckboxComponent} from './avatar-checkbox.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {By} from '@angular/platform-browser';

describe('AvatarCheckboxComponent', () => {
  let component: AvatarCheckboxComponent;
  let fixture: ComponentFixture<AvatarCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarCheckboxComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default size md', () => {
    expect(component.size()).toBe(tailwind_sizes.md);
  });

  it('should toggle selection on click', () => {
    const hostElement = fixture.nativeElement;

    // Initial state (default is false)
    expect(hostElement.classList.contains('selected')).toBe(false);

    // Click to select
    hostElement.click();
    fixture.detectChanges();
    expect(hostElement.classList.contains('selected')).toBe(true);

    // Click to deselect
    hostElement.click();
    fixture.detectChanges();
    expect(hostElement.classList.contains('selected')).toBe(false);
  });

  it('should be preselected when the selected input is true', async () => {
    fixture.componentRef.setInput('selected', true);
    fixture.detectChanges();

    const hostElement = fixture.nativeElement;
    expect(hostElement.classList.contains('selected')).toBe(true);

    const badge = fixture.debugElement.query(By.css('lib-avatar-badge'));
    expect(badge).toBeTruthy();

    // expect(fixture.nativeElement).toMatchScreenshot('avatar-checkbox-selected');
  });

  it('should render only the avatar when not selected', () => {
    fixture.componentRef.setInput('selected', false);
    fixture.detectChanges();

    const badge = fixture.debugElement.query(By.css('lib-avatar-badge'));
    const avatar = fixture.debugElement.query(By.css('lib-avatar'));

    expect(badge).toBeFalsy();
    expect(avatar).toBeTruthy();

    // expect(fixture.nativeElement).toMatchScreenshot('avatar-checkbox-unselected');
  });
});
