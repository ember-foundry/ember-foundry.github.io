import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, expect, describe} from 'vitest';
import {InputQuantityCritterComponent} from './input-quantity-critter.component';

describe('InputQuantityCritterComponent', () => {
  let component: InputQuantityCritterComponent;
  let fixture: ComponentFixture<InputQuantityCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputQuantityCritterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputQuantityCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
