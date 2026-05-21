import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWebGradientsComponent } from './card-web-gradients.component';

describe('CardComponent', () => {
  let component: CardWebGradientsComponent;
  let fixture: ComponentFixture<CardWebGradientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWebGradientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWebGradientsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
