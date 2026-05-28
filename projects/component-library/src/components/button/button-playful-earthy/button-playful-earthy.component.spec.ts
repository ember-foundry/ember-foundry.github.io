import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {ButtonPlayfulEarthyComponent} from './button-playful-earthy.component';

describe('ButtonBasicComponent', () => {
  let component: ButtonPlayfulEarthyComponent;
  let fixture: ComponentFixture<ButtonPlayfulEarthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPlayfulEarthyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonPlayfulEarthyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
