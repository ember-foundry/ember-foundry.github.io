import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {describe, expect, it} from 'vitest';
import {AvatarImageDirective} from './avatar-image.directive';

@Component({
  standalone: true,
  imports: [AvatarImageDirective],
  template: `<img libAvatarImage [alt]="altText" src="https://mockmind-api.uifaces.co/content/human/1.jpg" />`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestHostComponent {
  altText = '';
}

describe('AvatarImageDirective', () => {
  const setup = (altText = '') => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.altText = altText;
    fixture.detectChanges();

    const imgDebugEl = fixture.debugElement.query(By.directive(AvatarImageDirective));
    const imgEl = imgDebugEl.nativeElement as HTMLImageElement;

    return { fixture, imgEl };
  };

  it('should create an instance', () => {
    const { imgEl } = setup();
    expect(imgEl).toBeTruthy();
  });

  it('should apply default host styles', () => {
    const { imgEl } = setup();
    expect(imgEl.style.borderRadius).toBe('inherit');
    expect(imgEl.style.height).toBe('100%');
    expect(imgEl.style.width).toBe('100%');
    expect(imgEl.style.objectFit).toMatch(/cover|var\(--avatar-image-object-fit/);
    expect(imgEl).toHaveStyle('object-fit: var(--avatar-image-object-fit, cover)');
    expect(imgEl.style.objectFit).toEqual('var(--avatar-image-object-fit, cover)');
  });

  it('should use default alt text when input is empty', () => {
    const { imgEl } = setup('');
    expect(imgEl.getAttribute('alt')).toBe('Avatar Image');
  });

  it('should update alt attribute when input changes', () => {
    const { fixture, imgEl } = setup('Custom Alt');
    expect(imgEl.getAttribute('alt')).toBe('Custom Alt');

    fixture.componentInstance.altText = 'Updated Alt';
    fixture.componentRef.setInput('alt', 'Updated Alt');
    fixture.detectChanges();
    expect(imgEl.getAttribute('alt')).toBe('Updated Alt');
  });
});
