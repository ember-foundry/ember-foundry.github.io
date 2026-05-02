import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {SVGCheckmarkComponent} from './svg-checkmark.component';
import {svg_animations_ended} from '../../helpers/vitest/svg_animations_ended';

describe('CheckmarkFilledComponent', () => {
  let component: SVGCheckmarkComponent;
  let fixture: ComponentFixture<SVGCheckmarkComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGCheckmarkComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGCheckmarkComponent);
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
    await expect(host).toMatchScreenshot('svg-checkmark');
  })
});
