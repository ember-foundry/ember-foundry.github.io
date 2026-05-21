import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyAlertBoxComponent } from './spotify-alert-box.component';

describe('SpotifyAlertBoxComponent', () => {
  let component: SpotifyAlertBoxComponent;
  let fixture: ComponentFixture<SpotifyAlertBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyAlertBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyAlertBoxComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
