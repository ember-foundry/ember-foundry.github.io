import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {describe, it, expect, afterEach, beforeEach, vi} from 'vitest';
import {AvatarComponent, AvatarImageDirective} from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  const component_base_checks = () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.nativeElement).toBeInTheDocument();
    expect(fixture.debugElement.nativeElement).toHaveStyle('border-radius: 50%');
  }

  const initials_checks = (expected_initials: string) => {
    expect(fixture.debugElement.nativeElement.textContent.length).toBeLessThanOrEqual(2);
    expect(fixture.debugElement.nativeElement).toHaveTextContent(expected_initials);

    const span = fixture.debugElement.query(By.css('.text'));
    expect(span).toBeTruthy();
    expect(span.nativeElement).toHaveTextContent(expected_initials);

    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeNull();
  }

  const image_checks = () => {
    const avatar_image = get_avatar_image();
    expect(avatar_image).toBeTruthy();
    expect(avatar_image.style.borderRadius).toBe('inherit');
    expect(avatar_image.style.height).toBe('100%');
    expect(avatar_image.style.width).toBe('100%');
    expect(avatar_image).toHaveStyle('object-fit: var(--avatar-image-object-fit, cover)');
    expect(avatar_image.style.objectFit).toContain('var(--avatar-image-object-fit, cover)');
    return avatar_image;
  }

  // Helper to get the image element and its directive instance
  const get_avatar_image = (): HTMLImageElement => {
    const image_directive_debug_element = fixture.debugElement.query(By.directive(AvatarImageDirective));
    const image_element = image_directive_debug_element?.nativeElement as HTMLImageElement;
    // const directive = image_directive_debug_element?.injector.get(AvatarImageDirective);
    return image_element;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component_base_checks();
  })

  it('should apply directive host styles to the image', () => {
    fixture.componentRef.setInput('image_url', 'https://mockmind-api.uifaces.co/content/human/1.jpg');
    fixture.detectChanges();
    image_checks();
  });

  it('should apply the default alt text from directive', () => {
    fixture.componentRef.setInput('image_url', 'https://mockmind-api.uifaces.co/content/human/1.jpg');
    fixture.detectChanges();

    const avatar_image = image_checks();
    expect(avatar_image.getAttribute('alt')).toBe('Avatar Image');
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

  it('Should display an Unknown User Avatar', () => {
    expect(fixture.debugElement.query(By.css('img'))).toBeNull();
    expect(fixture.debugElement.query(By.css('.text')).nativeElement).toHaveStyle('background-color: rgb(227, 227, 227)');
    initials_checks('UU');
  });

  it('Should display only initials when no image url is provided', () => {
    fixture.componentRef.setInput('name', 'john doe');
    fixture.detectChanges();
    initials_checks('JD');
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeNull();
  });

  it('Should display only one letter when no image url is provided and just the first name is provided', () => {
    fixture.componentRef.setInput('name', 'john');
    fixture.detectChanges();
    initials_checks('J');
  });

  it('Should display image when only image url is provided', () => {
    const test_url = 'https://mockmind-api.uifaces.co/content/human/1.jpg';
    fixture.componentRef.setInput('image_url', test_url);
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img'));
    const span = fixture.debugElement.query(By.css('.text'));

    expect(span).toBeNull();
    expect(img).toBeTruthy();
    expect(img.nativeElement.src).toBe(test_url);
  });

  it('Should display image only when both name and image url are provided', () => {
    const test_url = 'https://mockmind-api.uifaces.co/content/human/1.jpg';
    fixture.componentRef.setInput('image_url', test_url);
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img'));
    const span = fixture.debugElement.query(By.css('.text'));

    expect(span).toBeNull();
    expect(img).toBeTruthy();
    expect(img.nativeElement.src).toBe(test_url);
  });

  it('Should display initials when image fails to load', () => {
    fixture.componentRef.setInput('image_url', 'bad_url');
    fixture.componentRef.setInput('name', 'Jane Doe');
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeTruthy();

    img.triggerEventHandler('error', null);
    fixture.detectChanges();
    initials_checks('JD');
  });

  it('Should call on_image_error when image fails to load', () => {
    fixture.componentRef.setInput('image_url', 'bad_url');
    fixture.detectChanges();

    const spy = vi.spyOn(component as unknown as { on_image_error: () => void }, 'on_image_error');
    const img = fixture.debugElement.query(By.css('img'));

    img.triggerEventHandler('error', null);

    expect(spy).toHaveBeenCalled();
  });

  it('Should use default name if not provided', () => {
    fixture.detectChanges();
    initials_checks('UU');
  });

  it('Should apply bordered styles when bordered is true', () => {
    fixture.componentRef.setInput('bordered', true);
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    expect(hostElement.style.getPropertyValue('--avatar-border-style')).toBe('solid');
    initials_checks('UU');
  });

  it('Should apply size styles when size is provided', () => {
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    expect(hostElement.style.getPropertyValue('--size')).toBe('var(--size-sm)');
    initials_checks('UU');
  });

  it('Should not apply size styles when size is undefined', () => {
    fixture.componentRef.setInput('size', undefined);
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    expect(hostElement.style.getPropertyValue('--size')).toBe('');
    initials_checks('UU');
  });

  it('Should handle all input properties correctly', () => {
    fixture.componentRef.setInput('bordered', false);
    fixture.componentRef.setInput('image_url', undefined);
    fixture.componentRef.setInput('name', 'Test User');
    fixture.componentRef.setInput('size', 'lg');

    fixture.detectChanges();

    const hostElement = fixture.nativeElement;
    expect(hostElement.getAttribute('aria-label')).toBe('Test User');
    expect(hostElement.style.getPropertyValue('--avatar-border-style')).toBe('');
    expect(hostElement.style.getPropertyValue('--size')).toBe('var(--size-lg)');
    initials_checks('TU');
  });

  it('Should fully exercise css_size_variable computed signal', () => {
    fixture.componentRef.setInput('size', undefined);
    fixture.detectChanges();
    component_base_checks();
    expect(component['css_size_variable']()).toBeUndefined();

    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component['css_size_variable']()).toBe('var(--size-lg)');
    initials_checks('UU');
  });

  it('Should exercise all input signal definitions', () => {
    fixture.componentRef.setInput('bordered', true);
    fixture.componentRef.setInput('image_url', 'https://mockmind-api.uifaces.co/content/human/1.jpg');
    fixture.componentRef.setInput('name', 'Test');
    fixture.componentRef.setInput('size', 'xl');
    fixture.detectChanges();

    expect(component.bordered()).toBe(true);
    expect(component.image_url()).toBe('https://mockmind-api.uifaces.co/content/human/1.jpg');
    expect(component.name()).toBe('Test');
    expect(component.size()).toBe('xl');
  });

  it('Should handle a small image (50x50) when the avatar size (64x64) is larger', () => {
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

  // TODO: test using a custom png injected
});
