import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {SVGLoaderThreeDotsComponent} from './svg-loader-three-dots.component';

describe('SVGLoaderThreeDotsComponent', () => {
  let component: SVGLoaderThreeDotsComponent;
  let fixture: ComponentFixture<SVGLoaderThreeDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGLoaderThreeDotsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGLoaderThreeDotsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
