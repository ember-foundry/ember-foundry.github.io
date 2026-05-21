import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {CardWebGradientsComponent} from './card-web-gradients.component';

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
    fixture.componentRef.setInput('title', 'Test Card');
    fixture.componentRef.setInput('styles', 'background: red');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
