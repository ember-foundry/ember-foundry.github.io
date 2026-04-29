import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandoNorrisSlidingTextComponent } from './lando-norris-sliding-text.component';

describe('LandoNorrisSlidingTextComponent', () => {
  let component: LandoNorrisSlidingTextComponent;
  let fixture: ComponentFixture<LandoNorrisSlidingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandoNorrisSlidingTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandoNorrisSlidingTextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
