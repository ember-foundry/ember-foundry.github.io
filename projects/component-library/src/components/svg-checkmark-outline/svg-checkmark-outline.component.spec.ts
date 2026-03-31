import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {SVGCheckmarkOutlineComponent} from './svg-checkmark-outline.component';

describe('CheckmarkOutlineComponent', () => {
  let component: SVGCheckmarkOutlineComponent;
  let fixture: ComponentFixture<SVGCheckmarkOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGCheckmarkOutlineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGCheckmarkOutlineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
