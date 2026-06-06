import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCardCritterComponent } from './inventory-card-critter.component';

describe('InventoryCardCritterComponent', () => {
  let component: InventoryCardCritterComponent;
  let fixture: ComponentFixture<InventoryCardCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCardCritterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryCardCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
