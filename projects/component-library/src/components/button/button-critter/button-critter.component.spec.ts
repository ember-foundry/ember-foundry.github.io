import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {ButtonCritterComponent} from './button-critter.component';

describe('ButtonBasicComponent', () => {
  let component: ButtonCritterComponent;
  let fixture: ComponentFixture<ButtonCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCritterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
