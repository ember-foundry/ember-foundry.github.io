import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {InputCheckboxCritterComponent} from './input-checkbox-critter.component';

describe('InputCheckboxCritterComponent', () => {
  let component: InputCheckboxCritterComponent;
  let fixture: ComponentFixture<InputCheckboxCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCheckboxCritterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputCheckboxCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
