import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {SVGCheckmarkCircleFilledAlternateComponent} from './svg-checkmark-circle-filled-alternate.component';
import {svg_animations_ended} from '../../helpers/vitest/svg_animations_ended';

describe('CheckmarkFilledComponent', () => {
  let component: SVGCheckmarkCircleFilledAlternateComponent;
  let fixture: ComponentFixture<SVGCheckmarkCircleFilledAlternateComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGCheckmarkCircleFilledAlternateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGCheckmarkCircleFilledAlternateComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    host.style.setProperty('--checkmark-color', 'red');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should visually match', async () => {
    await svg_animations_ended(fixture);
    await expect(host).toMatchScreenshot('svg-checkmark-circle-filled-alternate');
  })
});
