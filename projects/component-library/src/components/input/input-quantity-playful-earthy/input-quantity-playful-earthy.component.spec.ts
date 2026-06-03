import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, expect, describe } from 'vitest';
import { InputQuantityPlayfulEarthyComponent } from './input-quantity-playful-earthy.component';

describe('InputQuantityPlayfulEarthyComponent', () => {
  let component: InputQuantityPlayfulEarthyComponent;
  let fixture: ComponentFixture<InputQuantityPlayfulEarthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputQuantityPlayfulEarthyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputQuantityPlayfulEarthyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
