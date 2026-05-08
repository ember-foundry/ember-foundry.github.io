import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DribbbleAuthorDetailsBarComponent } from './dribbble-author-details-bar.component';

describe('DribbbleAuthorDetailsBarComponent', () => {
  let component: DribbbleAuthorDetailsBarComponent;
  let fixture: ComponentFixture<DribbbleAuthorDetailsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DribbbleAuthorDetailsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DribbbleAuthorDetailsBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
