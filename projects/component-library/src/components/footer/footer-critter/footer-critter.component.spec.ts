import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCritterComponent } from './footer-critter.component';

describe('FooterCritterComponent', () => {
  let component: FooterCritterComponent;
  let fixture: ComponentFixture<FooterCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCritterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
