import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolutLoggedOutPopupComponent } from './revolut-logged-out-popup.component';

describe('RevolutLoggedOutPopupComponent', () => {
  let component: RevolutLoggedOutPopupComponent;
  let fixture: ComponentFixture<RevolutLoggedOutPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevolutLoggedOutPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevolutLoggedOutPopupComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
