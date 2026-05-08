import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {SVGCheckmarkCircleOutlineComponent} from './svg-checkmark-circle-outline.component';

describe('SVGCheckmarkCircleOutlineComponent', () => {
  let component: SVGCheckmarkCircleOutlineComponent;
  let fixture: ComponentFixture<SVGCheckmarkCircleOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGCheckmarkCircleOutlineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGCheckmarkCircleOutlineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to alexanders variant', async () => {
    expect(component.variant()).toEqual('alexander-haniotis');
  });

  it('should switch to michaels variant', async () => {
    fixture.componentRef.setInput('variant', 'sean-michael');
    expect(component.variant()).toEqual('sean-michael');
  });

});
