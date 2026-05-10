import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {SVGLoaderComponent} from './svg-loader.component';

describe('SVGLoaderComponent', () => {
  let component: SVGLoaderComponent;
  let fixture: ComponentFixture<SVGLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGLoaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGLoaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
