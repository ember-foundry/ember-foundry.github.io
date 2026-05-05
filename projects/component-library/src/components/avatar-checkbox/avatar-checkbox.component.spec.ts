import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, beforeEach, it} from 'vitest';
import {AvatarCheckboxComponent} from './avatar-checkbox.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';
import {By} from '@angular/platform-browser';
import {tailwind_sizes_values} from '../../constants/tailwind-sizes';
import {pause} from '../../helpers/pause';

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

  it('should toggle selection on click', async () => {
    const hostElement = fixture.nativeElement;

    expect(hostElement.classList.contains('selected')).toBe(false);
    await pause(1.5)

    hostElement.click();
    fixture.detectChanges();
    expect(hostElement.classList.contains('selected')).toBe(true);
    await pause(1.5)

    hostElement.click();
    fixture.detectChanges();
    expect(hostElement.classList.contains('selected')).toBe(false);
  });

  it('should be preselected when the selected input is true', () => {
    fixture.componentRef.setInput('selected', true);
    fixture.detectChanges();

    const hostElement = fixture.nativeElement;
    expect(hostElement.classList.contains('selected')).toBe(true);

    const badge = fixture.debugElement.query(By.css('mbr-avatar-badge'));
    expect(badge).toBeTruthy();

    // expect(fixture.nativeElement).toMatchScreenshot('avatar-checkbox-selected');
  });

  tailwind_sizes_values.forEach(size => {
    it.skip(`when selected the padding should match the border width (size: ${size})`, () => {
      fixture.componentRef.setInput('size', size);
      fixture.componentRef.setInput('selected', true);
      fixture.detectChanges();

      const avatar = fixture.debugElement.query(By.css('mbr-avatar'));
      expect(avatar).toBeTruthy();

      const computed_avatar_styles = window.getComputedStyle(avatar.nativeElement);

      console.log(size, 'borderWidth', computed_avatar_styles.borderWidth);
      console.log(size, 'padding', computed_avatar_styles.padding);
      expect(computed_avatar_styles.padding).toBe(computed_avatar_styles.borderWidth);
    });
  })


  it('should render only the avatar when not selected', () => {
    fixture.componentRef.setInput('selected', false);
    fixture.detectChanges();

    const badge = fixture.debugElement.query(By.css('mbr-avatar-badge'));
    const avatar = fixture.debugElement.query(By.css('mbr-avatar'));

    expect(badge).toBeFalsy();
    expect(avatar).toBeTruthy();

    // expect(fixture.nativeElement).toMatchScreenshot('avatar-checkbox-unselected');
  });
});
