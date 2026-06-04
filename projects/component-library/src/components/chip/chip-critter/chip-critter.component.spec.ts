import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipCritterComponent } from './chip-critter.component';

describe('ChipCritterComponent', () => {
  let component: ChipCritterComponent;
  let fixture: ComponentFixture<ChipCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipCritterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
