import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {ButtonBasicComponent} from './button-basic.component';

describe('ButtonBasicComponent', () => {
  let component: ButtonBasicComponent;
  let fixture: ComponentFixture<ButtonBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBasicComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonBasicComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
