import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCritterComponent } from './header-critter.component';

describe('HeaderCritterComponent', () => {
  let component: HeaderCritterComponent;
  let fixture: ComponentFixture<HeaderCritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCritterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCritterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
