import {beforeEach, describe, expect, it} from "vitest";
import {TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {AvatarLabelComponent} from './avatar-label.component';

describe('AvatarLabelComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarLabelComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create and display the required name', () => {
    const fixture = TestBed.createComponent(AvatarLabelComponent);
    const component = fixture.componentInstance;

    fixture.componentRef.setInput('name', 'John Doe');

    fixture.detectChanges();

    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('John Doe');
  });

  it('should handle external links correctly', () => {
    const fixture = TestBed.createComponent(AvatarLabelComponent);

    fixture.componentRef.setInput('name', 'Jane Doe');
    fixture.componentRef.setInput('link', 'https://example.com');

    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a');
    expect(anchor.getAttribute('href')).toBe('https://example.com');
  });
});
