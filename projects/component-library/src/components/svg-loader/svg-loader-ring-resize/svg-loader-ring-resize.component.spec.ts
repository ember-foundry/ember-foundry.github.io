import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {SVGLoaderRingResizeComponent} from './svg-loader-ring-resize.component';

describe('SVGLoaderThreeDotsComponent', () => {
  let component: SVGLoaderRingResizeComponent;
  let fixture: ComponentFixture<SVGLoaderRingResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGLoaderRingResizeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGLoaderRingResizeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
