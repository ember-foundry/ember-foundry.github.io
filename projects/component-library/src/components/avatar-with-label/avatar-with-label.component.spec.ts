import {beforeEach, describe, expect, it} from "vitest";
import {TestBed} from '@angular/core/testing';
import {AvatarWithLabelComponent} from './avatar-with-label.component';

describe('AvatarWithLabelComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarWithLabelComponent]
    }).compileComponents();
  });

  it('should create and display the required name', () => {
    const fixture = TestBed.createComponent(AvatarWithLabelComponent);
    const component = fixture.componentInstance;

    fixture.componentRef.setInput('name', 'John Doe');

    fixture.detectChanges();

    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('John Doe');
  });
});
