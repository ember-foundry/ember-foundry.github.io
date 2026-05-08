import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {SVGCheckmarkCircleOutlineSeanMichaelComponent} from './svg-checkmark-circle-outline-sean-michael.component';
import {svg_animations_ended} from '../../../helpers/vitest/svg_animations_ended';

describe('CheckmarkOutlineComponent', () => {
  let component: SVGCheckmarkCircleOutlineSeanMichaelComponent;
  let fixture: ComponentFixture<SVGCheckmarkCircleOutlineSeanMichaelComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGCheckmarkCircleOutlineSeanMichaelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGCheckmarkCircleOutlineSeanMichaelComponent);

    component = fixture.componentInstance;
    host = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should honour set size', async () => {
    await svg_animations_ended(fixture);

    host.style.setProperty('--size', '300px');
    const assertions = [];
    assertions.push(expect.element(host).toHaveStyle('width: 300px'));
    assertions.push(expect.element(host).toHaveStyle('height: 300px'));
    assertions.push(expect.element(host.querySelector('svg')).toHaveStyle('width: 300px'));
    assertions.push(expect.element(host.querySelector('svg')).toHaveStyle('height: 300px'));
    await Promise.all(assertions);
  });

  it('should match visually', async () => {
    await svg_animations_ended(fixture);
    await expect(host).toMatchScreenshot('svg-checkmark-circle-outline-sean-michael');
  });
});
