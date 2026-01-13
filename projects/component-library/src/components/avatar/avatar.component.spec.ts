import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {describe, it, expect, beforeEach, vi} from 'vitest';
import {AvatarComponent} from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should display an Unknown User Avatar', async () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.query(By.css('img'))).toBeNull();
    expect(fixture.debugElement.nativeElement.textContent).to.have.lengthOf(2);
    await expect.element(fixture.debugElement.nativeElement).toBeInTheDocument();
    await expect.element(fixture.debugElement.nativeElement).toHaveTextContent('UU');
    await expect.element(fixture.debugElement.nativeElement).toHaveStyle('background-color: rgb(227, 227, 227)')
  });

  it('should display initials when no image url is provided', () => {
    fixture.componentRef.setInput('name', 'John Doe');
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img'));
    const span = fixture.debugElement.query(By.css('.text'));

    expect(img).toBeNull();
    expect(span).toBeTruthy();
    expect(span.nativeElement.textContent).toBe('JD');
  });

  it('should display image when image url is provided', () => {
    const test_url = 'https://mockmind-api.uifaces.co/content/human/1.jpg';
    fixture.componentRef.setInput('image_url', test_url);
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img'));
    const span = fixture.debugElement.query(By.css('.text'));

    expect(span).toBeNull();
    expect(img).toBeTruthy();
    expect(img.nativeElement.src).toBe(test_url);
  });

  it('should display initials when image fails to load', () => {
    fixture.componentRef.setInput('image_url', 'bad_url');
    fixture.componentRef.setInput('name', 'Jane Doe');
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeTruthy();

    img.triggerEventHandler('error', null);
    fixture.detectChanges();

    const span = fixture.debugElement.query(By.css('.text'));
    const missing_img = fixture.debugElement.query(By.css('img'));

    expect(missing_img).toBeNull();
    expect(span).toBeTruthy();
    expect(span.nativeElement.textContent).toBe('JD');
  });

  it('should call on_image_error when image fails to load', () => {
    fixture.componentRef.setInput('image_url', 'bad_url');
    fixture.detectChanges();

    const spy = vi.spyOn(component as unknown as { on_image_error: () => void }, 'on_image_error');
    const img = fixture.debugElement.query(By.css('img'));

    img.triggerEventHandler('error', null);

    expect(spy).toHaveBeenCalled();
  });

  it('should use default name if not provided', () => {
    fixture.detectChanges();

    const span = fixture.debugElement.query(By.css('.text'));
    expect(span.nativeElement.textContent).toBe('UU');
  });

  it('should apply bordered styles when bordered is true', () => {
    fixture.componentRef.setInput('bordered', true);
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    expect(hostElement.style.getPropertyValue('--avatar-border-style')).toBe('solid');
  });

  it('should apply size styles when size is provided', () => {
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    expect(hostElement.style.getPropertyValue('--size')).toBe('var(--size-sm)');
  });

  it('should not apply size styles when size is undefined', () => {
    fixture.componentRef.setInput('size', undefined);
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    expect(hostElement.style.getPropertyValue('--size')).toBe('');
  });

  it('should handle all input properties correctly', () => {
    fixture.componentRef.setInput('bordered', false);
    fixture.componentRef.setInput('image_url', undefined);
    fixture.componentRef.setInput('name', 'Test User');
    fixture.componentRef.setInput('size', 'lg');

    fixture.detectChanges();

    const hostElement = fixture.nativeElement;
    expect(hostElement.getAttribute('aria-label')).toBe('Test User');
    expect(hostElement.style.getPropertyValue('--avatar-border-style')).toBe('');
    expect(hostElement.style.getPropertyValue('--size')).toBe('var(--size-lg)');
  });

  it('should fully exercise css_size_variable computed signal', () => {
    // Test the 'undefined' path (Line 31: return size)
    fixture.componentRef.setInput('size', undefined);
    fixture.detectChanges();
    expect(component['css_size_variable']()).toBeUndefined();

    // Test the 'defined' path (Line 31: return `var(...)`)
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component['css_size_variable']()).toBe('var(--size-lg)');
  });

  it('should exercise all input signal definitions', () => {
    fixture.componentRef.setInput('bordered', true);
    fixture.componentRef.setInput('image_url', 'https://test.com');
    fixture.componentRef.setInput('name', 'Test');
    fixture.componentRef.setInput('size', 'xl');
    fixture.detectChanges();

    expect(component.bordered()).toBe(true);
    expect(component.image_url()).toBe('https://test.com');
    expect(component.name()).toBe('Test');
    expect(component.size()).toBe('xl');
  });

  it('should handle a small image (50x50) when the avatar size (64x64) is larger', () => {
    fixture.componentRef.setInput('bordered', true);
    fixture.componentRef.setInput('image_url', 'https://picsum.photos/id/237/50/50');
    fixture.detectChanges();

    const hostElement = fixture.nativeElement;

    const hostStyles = window.getComputedStyle(hostElement);

    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    const imgStyles = window.getComputedStyle(img);
    expect(imgStyles.objectFit).toBe('cover');

    const hostWidth = parseFloat(hostStyles.width);
    const hostHeight = parseFloat(hostStyles.height);
    const imgWidth = parseFloat(imgStyles.width);
    const imgHeight = parseFloat(imgStyles.height);

    expect(imgWidth).toBeLessThanOrEqual(hostWidth);
    expect(imgHeight).toBeLessThanOrEqual(hostHeight);
  });

  it('should handle a non square small image (200x300) when the avatar size (64x64) is larger', () => {
    fixture.componentRef.setInput('bordered', true);
    fixture.componentRef.setInput('image_url', 'https://picsum.photos/id/237/200/300');
    fixture.detectChanges();

    const hostElement = fixture.nativeElement;

    const hostStyles = window.getComputedStyle(hostElement);

    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    const imgStyles = window.getComputedStyle(img);
    expect(imgStyles.objectFit).toBe('cover');

    const hostWidth = parseFloat(hostStyles.width);
    const hostHeight = parseFloat(hostStyles.height);
    const imgWidth = parseFloat(imgStyles.width);
    const imgHeight = parseFloat(imgStyles.height);

    expect(imgWidth).toBeLessThanOrEqual(hostWidth);
    expect(imgHeight).toBeLessThanOrEqual(hostHeight);
  });
});
