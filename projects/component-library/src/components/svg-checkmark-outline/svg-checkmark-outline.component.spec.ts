import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect} from 'vitest';
import {SvgCheckmarkOutlineComponent} from './svg-checkmark-outline.component';

describe('CheckmarkOutlineComponent', () => {
  let component: SvgCheckmarkOutlineComponent;
  let fixture: ComponentFixture<SvgCheckmarkOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCheckmarkOutlineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SvgCheckmarkOutlineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
