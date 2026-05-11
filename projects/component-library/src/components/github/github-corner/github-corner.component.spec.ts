import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCornerComponent } from './github-corner.component';

describe('GithubCornerComponent', () => {
  let component: GithubCornerComponent;
  let fixture: ComponentFixture<GithubCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubCornerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubCornerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
