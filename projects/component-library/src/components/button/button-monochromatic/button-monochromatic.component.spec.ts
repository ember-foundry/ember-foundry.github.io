import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {ButtonMonochromaticComponent} from './button-monochromatic.component';

describe('ButtonBasicComponent', () => {
  let component: ButtonMonochromaticComponent;
  let fixture: ComponentFixture<ButtonMonochromaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMonochromaticComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonMonochromaticComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
