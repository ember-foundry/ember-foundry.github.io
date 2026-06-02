import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPlayfulEarthyComponent } from './checkbox-playful-earthy.component';

describe('CheckboxPlayfulEarthyComponent', () => {
  let component: CheckboxPlayfulEarthyComponent;
  let fixture: ComponentFixture<CheckboxPlayfulEarthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxPlayfulEarthyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxPlayfulEarthyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
