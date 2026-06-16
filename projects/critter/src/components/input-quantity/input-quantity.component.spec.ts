import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {InputQuantityComponent} from './input-quantity.component';

describe('InputQuantityComponent', () => {
  let component: InputQuantityComponent;
  let fixture: ComponentFixture<InputQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputQuantityComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputQuantityComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
