import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {CallbackStatusComponent} from './callback-status.component';

describe('CallbackStatusComponent', () => {
  let component: CallbackStatusComponent;
  let fixture: ComponentFixture<CallbackStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallbackStatusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CallbackStatusComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
