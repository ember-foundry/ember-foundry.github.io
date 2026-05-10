import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {SVGLoaderKFCComponent} from './svg-loader-kfc.component';

describe('SVGLoaderThreeDotsComponent', () => {
  let component: SVGLoaderKFCComponent;
  let fixture: ComponentFixture<SVGLoaderKFCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGLoaderKFCComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGLoaderKFCComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
