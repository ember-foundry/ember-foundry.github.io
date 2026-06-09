import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, it, beforeEach} from 'vitest';
import {InputTextComponent} from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
