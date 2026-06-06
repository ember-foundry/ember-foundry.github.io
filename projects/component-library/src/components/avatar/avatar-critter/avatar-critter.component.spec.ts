import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCritterComponent } from './avatar-critter.component';

describe('AvatarCritterComponent', () => {
  let component: AvatarCritterComponent;
  let fixture: ComponentFixture<AvatarCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarCritterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
