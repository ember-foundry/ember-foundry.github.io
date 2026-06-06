import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCritterComponent } from './card-critter.component';

describe('CardCritterComponent', () => {
  let component: CardCritterComponent;
  let fixture: ComponentFixture<CardCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCritterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
