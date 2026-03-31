import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {SVGCheckmarkFilledComponent} from './svg-checkmark-filled.component';

describe('CheckmarkFilledComponent', () => {
  let component: SVGCheckmarkFilledComponent;
  let fixture: ComponentFixture<SVGCheckmarkFilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGCheckmarkFilledComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGCheckmarkFilledComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
