import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, it, beforeEach} from 'vitest';
import {InputTextCritterComponent} from './input-text-critter.component';

describe('InputTextCritterComponent', () => {
  let component: InputTextCritterComponent;
  let fixture: ComponentFixture<InputTextCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextCritterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputTextCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
