import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {InventoryCardComponent} from './inventory-card.component';

describe('InventoryCardComponent', () => {
  let component: InventoryCardComponent;
  let fixture: ComponentFixture<InventoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InventoryCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
