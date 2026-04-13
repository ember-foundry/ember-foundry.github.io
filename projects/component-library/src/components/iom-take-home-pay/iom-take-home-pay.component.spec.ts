import { ComponentFixture, TestBed } from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import { IOMTakeHomePayComponent } from './iom-take-home-pay.component';

describe('IOMTakeHomePayComponent', () => {
  let component: IOMTakeHomePayComponent;
  let fixture: ComponentFixture<IOMTakeHomePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IOMTakeHomePayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IOMTakeHomePayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
