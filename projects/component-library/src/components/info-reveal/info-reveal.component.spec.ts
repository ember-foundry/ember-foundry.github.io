import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRevealComponent } from './info-reveal.component';

describe('RevealingCardComponent', () => {
  let component: InfoRevealComponent;
  let fixture: ComponentFixture<InfoRevealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRevealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRevealComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
