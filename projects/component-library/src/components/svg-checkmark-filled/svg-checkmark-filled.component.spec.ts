import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {SVGCheckmarkFilledComponent} from './svg-checkmark-filled.component';

describe('CheckmarkFilledComponent', () => {
  let component: SVGCheckmarkFilledComponent;
  let fixture: ComponentFixture<SVGCheckmarkFilledComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGCheckmarkFilledComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGCheckmarkFilledComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    host.style.setProperty('--checkmark-color', 'red');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should visually match', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    await expect(host).toMatchScreenshot('svg-checkmark-filled');
  })
});
