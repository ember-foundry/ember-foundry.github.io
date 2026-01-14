import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {describe, it, expect, afterEach, beforeEach, vi} from 'vitest';
import {AvatarComponent} from './avatar.component';

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

  it('Should display an Unknown User Avatar', () => {
    expect(fixture.debugElement.query(By.css('img'))).toBeNull();
    expect(fixture.debugElement.nativeElement).toHaveStyle('background-color: rgb(227, 227, 227)');
    initials_checks('UU');
  });

  it('should display only initials when no image url is provided', () => {
    fixture.componentRef.setInput('name', 'john doe');
    fixture.detectChanges();
    initials_checks('JD');
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeNull();
  });

  it('should display only one letter when no image url is provided and just the first name is provided', () => {
    fixture.componentRef.setInput('name', 'john');
    fixture.detectChanges();
    initials_checks('J');
  });

  it('should display image when only image url is provided', () => {
    const test_url = 'https://mockmind-api.uifaces.co/content/human/1.jpg';
    fixture.componentRef.setInput('image_url', test_url);
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img'));
    const span = fixture.debugElement.query(By.css('.text'));

    expect(span).toBeNull();
    expect(img).toBeTruthy();
    expect(img.nativeElement.src).toBe(test_url);
  });

  it('should display image only when both name and image url are provided', () => {
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
    initials_checks('JD');
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
    initials_checks('UU');
  });

  it('should apply bordered styles when bordered is true', () => {
    fixture.componentRef.setInput('bordered', true);
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    expect(hostElement.style.getPropertyValue('--avatar-border-style')).toBe('solid');
    initials_checks('UU');
  });

  it('should apply size styles when size is provided', () => {
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    expect(hostElement.style.getPropertyValue('--size')).toBe('var(--size-sm)');
    initials_checks('UU');
  });

  it('should not apply size styles when size is undefined', () => {
    fixture.componentRef.setInput('size', undefined);
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    expect(hostElement.style.getPropertyValue('--size')).toBe('');
    initials_checks('UU');
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
    initials_checks('TU');
  });

  it('should fully exercise css_size_variable computed signal', () => {
    fixture.componentRef.setInput('size', undefined);
    fixture.detectChanges();
    component_base_checks();
    expect(component['css_size_variable']()).toBeUndefined();

    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component['css_size_variable']()).toBe('var(--size-lg)');
    initials_checks('UU');
  });

  it('should exercise all input signal definitions', () => {
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
